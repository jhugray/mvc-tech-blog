const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great blog.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Thumbs up!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'I disagree',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Boooooooo. jk jk',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I agree.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Well said.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'LOL',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'What do you think about xyz?',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;