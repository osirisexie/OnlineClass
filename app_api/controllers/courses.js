/**
 * Created by qianmoxie on 3/3/16.
 */
var helpers = require('../helpers');
var mongoose = require('mongoose');
var course = mongoose.model('Course');

module.exports.courseList = function(req, res){
    course
        .findOne()
        .populate('videos')
        .exec(function (err, courses) {
            helpers.sendJsonResponse(res, 200, courses);
        });
};
