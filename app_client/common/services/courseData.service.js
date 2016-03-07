/**
 * Created by qianmoxie on 3/3/16.
 */
angular
    .module('onlineApp')
    .service('courseData', courseData);

function courseData($http) {
    return $http.get('/api/courses');

}


