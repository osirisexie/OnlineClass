/**
 * Created by qianmoxie on 3/7/16.
 */
var helpers = require('../helpers');
var mongoose = require('mongoose');
var video = mongoose.model('Video');

module.exports.videolist = function (req, res){
    video
        .find()
        .exec(function (err, videos) {
            helpers.sendJsonResponse(res, 200, videos);
        });
};

module.exports.videoCreate = function (req, res) {
    video
        .create({
            videoid: req.body.videoid,
            length: req.body.length,
            title: req.body.title,
            description: req.body.description
        },function(err, video){
            if(err){
                helpers.sendJsonResponse(res, 400 ,err);
            }else{
                helpers.sendJsonResponse(res, 201, video);
            }
        })
};