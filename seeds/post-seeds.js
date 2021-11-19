const { Post } = require('../models');

// object data changed to include body instead of url
const postdata = [
  {
    title: 'Insert clickbait title',
    body: 'This is my garbage clickbait blog post.',
    user_id: 2
  },
  {
    title: 'How to count to 10 in 12 easy steps!',
    body: 'Step 1: Read this post. Step 2-11: Count to 10. Step 12: You\'re welcome. ',
    user_id: 1
  },
  {
    title: 'This is a blog title. ',
    body: 'This is a blog',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
