/**
 * Created by qianmoxie on 3/3/16.
 */
var express = require('express');
var router = express.Router();
var ctrlCourse = require('../controllers/courses');
var ctrlVideo = require('../controllers/videos');

router.get('/courses', ctrlCourse.courseList);
router.get('/videos',ctrlVideo.videolist);
router.post('/videos',ctrlVideo.videoCreate);

module.exports = router;