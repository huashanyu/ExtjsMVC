/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.controller.userController', {
    extend: 'Ext.app.Controller',
    require:'MV.view.UserFormView',
    init: function () {
        this.control({
            'userView button[action=add]': {
                click: this.addUser
            },
            'userView button[action=delete]':{
                click:this.deleteUser
            },
            'userView button[action=search]':{
                click:this.searchUser
            },
            'userView button[action=reflush]':{
                click:this.reflushUser
            }
        });
    },
    addUser: function (_this,e,option) {
        console.log(_this);
        console.log(e);
        console.log(option);
        viewport.bringToFront(Ext.create('MV.view.UserFormView').show());
    },
    deleteUser: function () {

    },
    searchUser: function () {

    },
    reflushUser: function () {

    },
    views: ['MV.view.userView'],
    stores: ['MV.store.UserStore'],
    models: ['MV.model.UserModel']
})