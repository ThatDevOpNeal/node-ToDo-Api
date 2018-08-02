const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
    var user = this;
    const access = 'auth';
    const token = jwt.sign({ _id: user._id.toHexString(), access }, 'tempSecretVal').toString();

    user.tokens = user.tokens.concat([{ access, token }]);

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByCredentials = function(email, password) {
    var user = this;
    return user.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare( password, user.password, (err, result) => {
                if (result) {
                    return resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

//use a regular function so we have access to the proper `this`
UserSchema.pre('save', function(next) {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
    
});

UserSchema.methods.removeToken = function(token) {
    const user =  this;

    return user.update({
        $pull: {
            tokens: {
                token
            }
        }
    });
};

UserSchema.statics.findByToken = function(token) {
    var User = this;
    let decoded;
    
    try {
        decoded = jwt.verify(token, 'tempSecretVal');
    } catch (err) {
        return Promise.reject();
    };

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = { User };