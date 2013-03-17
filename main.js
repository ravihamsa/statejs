/**
 * Created with JetBrains WebStorm.
 * User: ravi.hamsa
 * Date: 17/03/13
 * Time: 5:50 PM
 * To change this template use File | Settings | File Templates.
 */

require(['app'],function(app){
    "use strict";

    var tmp  = app.request({url:'data/one.json', dataType:'json', contentType:'json'});
    tmp.done(function(data){
        console.log(data);
    });
});