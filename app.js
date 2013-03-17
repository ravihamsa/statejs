/**
 * Created with JetBrains WebStorm.
 * User: ravi.hamsa
 * Date: 17/03/13
 * Time: 5:58 PM
 * To change this template use File | Settings | File Templates.
 */

define(['lodash', 'backbone'],function(_,Backbone){
    "use strict";

    var app = {
        request:function(config){
            if(_.isArray(config)){
                return app._.requests(config);
            }

            return $.ajax(config);
        },
        _requests:function(array){
            var defArray =  _.map(array,function(config){
                return app.request(config);
            });

            return $.when(defArray);
        }
    };

    return app;

});