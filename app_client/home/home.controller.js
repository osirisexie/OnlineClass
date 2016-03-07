/**
 * Created by qianmoxie on 3/3/16.
 */
angular
    .module('onlineApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl (courseData){
    var vm = this;
    vm.pageHeader = {
        title: 'Online Classroom'
    };
    courseData
        .success(function(data){
           vm.courses = data;
        });


}