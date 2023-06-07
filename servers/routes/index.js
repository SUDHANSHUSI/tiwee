const express = require('express');
const postRoutes = require('./post.route');

const router = express.Router();

router.get('/', function (req, res) {
  res.send('API works!');
});

router.use('/posts', postRoutes);

module.exports = router;