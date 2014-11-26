var viewport;
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
            viewport = Ext.create("Ext.container.Viewport", {
                layout: 'border',
                defaults: {
                    split: true,
                    collapsible: true,
                    border: 0
                },
                items: [
                    {
                        id: 'centerTabPanel',
                        xtype: 'tabpanel',
                        region: 'center',
                        items: [
//                            {
//                                xtype: 'userView',
//                                closable: true,
//                                layout: 'fit'
//                            }
                        ]
                    },
                    {
                        title: '这是南边的天空',
                        xtype: 'panel',
                        region: 'south',
                        layout: 'fit',
                        border: 0,
                        frame: true
                    },
                    {
                        title: '这是北边的天空',
                        xtype: 'panel',
                        region: 'north',
                        split: true,
                        header: false,//取消头部信息
                        height: 180,
                        layout: 'fit',
                        bodyStyle: {background: 'url("./static/header.png") no-repeat'}

                    },
                    {
                        id: 'treeBarPanel',
                        title: '信息管理导航',
                        titleCollapse: true,
                        xtype: 'panel',
                        width: 200,
                        region: 'west',
                        frame: true,//该属性能够为panel添加背景色
                        split: true,
                        layout: 'accordion',
                        items: [
                            {
                                xtype: 'MenuView',
                                width: 200
                            },
                            {
                                title: '部门管理',
                                xtype: 'panel',
                                width: 200,
                                html: '<div>fsfafsafafafafaf</div>'
                            }
                        ]

                    },
                    {
                        title: '这是东边的天空',
                        xtype: 'panel',
                        region: 'east',
                        split: true,
                        layout: 'fit'

                    }
                ]});
        },

        models: ['UserModel', 'MenuModel', 'StudentModel'],
        stores: ['UserStore', 'MenuStore', 'StudentStore'],
        controllers: ['userController', 'MenuController', 'StudentController']
//        views: ['userView', 'MenuView']
    });
});
