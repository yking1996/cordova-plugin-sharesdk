---
title: ShareSDK
description: Cordova ShareSDK Plugin
---

# cordova-plugin-sharesdk

## Installation

    cordova plugin add https://github.com/falcon11/cordova-plugin-sharesdk.git

## Usage
```js
var param = [
            '测试分享标题',
            '你们好啊这里是测试分享',
            'http://cdn.qiyestore.com/openapi/upload/2015/12/25/EYZZ17L785.png',
            'http://www.qiyestore.com'
        ];
        var success = function(result){
            console.log('share success!!',JSON.stringify(result))
        };
        var error = function(result){
            console.log('share error!!',JSON.stringify(result))
        };
        ShareSDKPlugin.share(success,error,param);
```

### Supported Platforms

- iOS
- Android

