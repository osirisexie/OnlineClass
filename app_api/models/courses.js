/**
 * Created by qianmoxie on 3/3/16.
 */
var mongoose = require('mongoose'),Schema = mongoose.Schema;

//course schema
var courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    videos : [{ type: Schema.Types.ObjectId, ref: 'Video' }]
});

mongoose.model('Course', courseSchema);