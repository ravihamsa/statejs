/**
 * Created with JetBrains WebStorm.
 * User: ravi.hamsa
 * Date: 15/01/13
 * Time: 11:59 PM
 * To change this template use File | Settings | File Templates.
 */


var S = {};

S.addPage=function(config){
    console.log(config);
}


S.addPage({
   name:'page1',
   dep:['module1', 'module2', 'module3']
});