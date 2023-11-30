const {User} = require('../models');

const userData = [
    {
        username: 'testuser1',
        email: 'test1@gmail.com',
        password: 'password1'
    },
    {
        username: 'testuser2',
        email: 'test2@gmail.com',
        password: 'password2'
    },
    {
        username: 'testuser3',
        email: 'test3@gmail.com',
        password: 'password3'
    }
]
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;