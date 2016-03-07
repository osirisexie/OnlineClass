/**
 * Created by qianmoxie on 3/7/16.
 */
(function(){
    angular
        .module('onlineApp')
        .controller('videoCtrl', videoCtrl);

    videoCtrl.$inject = ['videoData'];
    function videoCtrl(videoData){
        var vm = this;
        videoData.videos()
            .success(function (data) {
                vm.videos = data;
            })
        vm.onSubmit = function () {
            vm.addVideo(vm.formData);
            videoData.videos().success(function(data){
                vm.videos = data;
            });
        };
        vm.addVideo = function(formData){

            videoData.addVideo({
                title: formData.title,
                description: formData.description,
                videoid: formData.videoid,
                length: formData.length
            })
                .success(function(data){

                });
            return false;
        };
    }

})();

