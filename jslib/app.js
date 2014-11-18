Ext.onReady(function () {
    Ext.Loader.setConfig({
        enabled: true
    });
    Ext.application({
        name: 'MV',//应用名字
        appFolder: "app",//应用目录
        extend: 'Ext.app.Application',
        enableQuickTips: true,
        requires: ['Ext.container.Viewport'],
        launch: function () {
            Ext.create("Ext.container.Viewport", {
                layout: 'border',
                items: [
                    {
                        xtype: 'userList',
                        title: '欢迎',
                        region: 'center',
                        split: true,
                        layout:'fit'
                    },
                    {
                        title:'这是南边的天空',
                        xtype:'panel',
                        region:'south',
                        split:true,
                        layout:'fit'

                    },{
                        title:'这是北边的天空',
                        xtype:'panel',
                        region:'north',
                        split:true,
                        layout:'fit'

                    },{
                        title:'这是东边的天空',
                        xtype:'panel',
                        region:'east',
                        split:true,
                        layout:'fit'

                    },{
                        title:'这是西方的天空',
                        xtype:'panel',
                        region:'west',
                        split:true,
                        layout:'fit'

                    }
                ]});
        },

        models: ['UserModel'],
        stores: ['UserStore'],
        controllers: ['userController'],
        view: ['userView']
    });
});
