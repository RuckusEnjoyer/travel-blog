const {User} = require('../models');
const bcrypt = require('bcrypt');

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


// const seedUsers = () => User.bulkCreate(userData);
// module.exports = seedUsers;

// const { User } = require('../models');
// const bcrypt = require('bcrypt');

// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// };

// User.beforeCreate(async (user) => {
//   user.password = await hashPassword(user.password);
// });

// User.beforeUpdate(async (user) => {
//   user.password = await hashPassword(user.password);
// });

// const seedUsers = () => User.bulkCreate([
//   {
//     username: 'testuser1',
//     email: 'test1@gmail.com',
//     password: 'password1'
//   },
//   {
//     username: 'testuser2',
//     email: 'test2@gmail.com',
//     password: 'password2'
//   },
//   {
//     username: 'testuser3',
//     email: 'test3@gmail.com',
//     password: 'password3'
//   }
// ]);

// module.exports = seedUsers;