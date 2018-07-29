const mongoose = require('mongoose');

// setup mongoose to use promises and connected with the database.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose };
