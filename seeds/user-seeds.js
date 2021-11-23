const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'user1',
    password: 'badpassword1'
  },
  {
    username: 'user2',
    password: 'badpassword2'
  },
  {
    username: 'user3',
    password: 'badpassword3'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
