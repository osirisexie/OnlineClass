/**
 * Created by qianmoxie on 3/7/16.
 */
(function(){
    angular
        .module('onlineApp')
        .service('videoData', videoData);

    videoData.$inject = ['$http'];
    function videoData($http){
        var videos = function (){
            return $http.get('/api/videos');
        };
        var addVideo = function (data){
            return $http.post('/api/videos',data);
        };
        return {
            videos: videos,
            addVideo: addVideo
        };

    };
})();