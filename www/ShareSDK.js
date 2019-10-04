var pluginName = 'ShareSDK';
var ShareSDK = {};
ShareSDK.logout = function(successCallback, errorCallback, params) {
  cordova.exec(successCallback, errorCallback, pluginName, 'logout', [params]);
};
ShareSDK.share = function(successCallback, errorCallback, params) {
  var result = undefined;
  if (Array.isArray(params)) {
    result = params;
  } else {
    result = [params];
  }
  cordova.exec(successCallback, errorCallback, pluginName, 'share', result);
};
//获取用户信息
ShareSDK.login = function(successCallback, errorCallback, params) {
  cordova.exec(successCallback, errorCallback, pluginName, 'login', [params]);
};
//用户授权
ShareSDK.auth = function(successCallback, errorCallback, params) {
  cordova.exec(successCallback, errorCallback, pluginName, 'auth', [params]);
};
module.exports = ShareSDK;
