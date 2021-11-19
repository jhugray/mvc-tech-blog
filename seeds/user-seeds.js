const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'user1@email.com',
    password: 'badpassword1'
  },
  {
    username: 'user2',
    email: 'user2@email.com',
    password: 'badpassword2'
  },
  {
    username: 'user3',
    email: 'user3@email.com',
    password: 'badpassword3'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
