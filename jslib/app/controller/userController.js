/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.controller.userController',{
    extend:'Ext.app.Controller',
     init:function (){

    },
    views:['MV.view.userView'],
    stores:['MV.store.UserStore'],
    models:['MV.model.UserModel']
})