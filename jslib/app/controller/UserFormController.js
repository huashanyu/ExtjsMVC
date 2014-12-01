/**
 * Created by zhangdihong on 2014/11/28.
 */
Ext.define('MV.controller.UserFormController',{
    extend:'Ext.app.Controller',
    init: function () {
        this.control({
        });
    },
    views:['MV.view.UserFormView'],
    stores:['MV.store.UserFromStore'],
    models:['MV.model.UserFormModel']

});