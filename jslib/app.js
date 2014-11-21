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
                default:{
                    split:true,
                    collapsible: true,
                    bodyStyle: 'padding:15px'

                },
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
                        layout:'fit'

                    },
                    {
                        title:'这是北边的天空',
                        xtype:'panel',
                        region:'north',
                        split:true,
                        header:false,
                        frame:true,
                        border:false,
                        height:180,
                        layout:'fit',
                       bodyStyle:{background:'url("./static/header.png") no-repeat'}

                    },
                    {
                        xtype:'',
                        title:'信息管理导航',
                        width:200,
                        region:'west',
                        split:true,
                        layout:'accordion',
                        items:[{
                         xtype:'menuList'
                        },{
                            title:'部门管理',
                            xtype:'panel',
                            html:'<div>fsfafsafafafafaf</div>'
                        }]

                    },
                    {
                        title:'这是东边的天空',
                        xtype:'panel',
                        region:'east',
                        split:true,
                        layout:'fit'

                    }
                ]});
        },

        models: ['UserModel','MenuModel'],
        stores: ['UserStore','MenuStore'],
        controllers: ['userController','MenuController'],
        view: ['userView','MenuView']
    });
});
