/**
 * Created by zhangdihong on 2014/11/24.
 */
Ext.define('MV.controller.StudentController',
    {
        extend: 'Ext.app.Controller',
        init: function () {

        },
        views: ['MV.view.StudentView'],
        stores: ['MV.store.StudentStore'],
        models: ['MV.model.StudentModel']
    }
);