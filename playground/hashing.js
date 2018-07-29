const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

// pass in hashed data, then give a secret. When decoding, the secret must also be given to make sure no changes were made as well.
const token = jwt.sign(data, '123abc');
console.log(token);

const decoded = jwt.verify(token, '123abc');
console.log('decoded:', decoded);

// const message = 'I am user number 3';
// const hashMessage = SHA256(message).toString();

// console.log(message);
// console.log(hashMessage);

// const data = {
//     id: 4
// };

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }
