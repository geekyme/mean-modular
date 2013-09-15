angular.module('mean.auth').factory("Auth", [function() {
    var _this = this;
    console.log(window.user);
    _this._data = {
        user: window.user,
        authenticated: !! window.user
    };

    return _this._data;
}]);