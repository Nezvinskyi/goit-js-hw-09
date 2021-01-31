// const greeter = require('./greeter')

// greeter('Hello, world!')

const validator = require('validator')

const validateEmail = email => {
	return validator.isEmail(email);
}

console.log('Is mango@mail.com a valid email?', validateEmail('mango@mail.com'));
console.log('Is mangomail.com a valid email?', validateEmail('mangomail.com'));

