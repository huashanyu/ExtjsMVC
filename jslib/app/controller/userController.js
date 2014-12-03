/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.controller.userController', {
    extend: 'Ext.app.Controller',
    refs: [
        {
            ref: 'userView',
            selector: 'userView'
        }
    ],
    init: function () {
        this.control({
            'userView button[action=add]': {
                click: this.addUser
            },
            'userView button[action=delete]': {
                click: this.deleteUser
            },
            'userView button[action=search]': {
                click: this.searchUser
            },
            'userView button[action=reflush]': {
                click: this.reflushUser
            }
        });
    },
    addUser: function (_this, e, option) {
        var testWindow = Ext.create('MV.util.utilWindow');
        testWindow.setTitle('添加窗口');
        testWindow.setHeight(350);
        testWindow.add(Ext.create('MV.view.UserFormView'));
        testWindow.doLayout();
        testWindow.show();
    },
    deleteUser: function (_this,e,option) {
        console.log(_this);//按钮对象
        console.log(e);//事件源对象
        console.log(option)
        console.log(this);//controller对象  及本类对象
        Ext.Msg.alert('这是标题','这里是内容');
    },
    searchUser: function (_this, e, option) {
        var dateFrom = Ext.query('input[name=dateFrom]');
        var dateTo = Ext.query('input[name=dateTo]');
        var keyWord = Ext.query('input[name=keyWord]');
//        var test = Ext.select('input[name=dateFrom]');
        console.log(dateFrom[0].value);
        console.log(dateTo[0].value);
        console.log(keyWord[0].value);
        console.log(this.getUserView().getTitle());//获取页面对象
        var userStore=this.getUserView().getStore();
        userStore.getProxy().setExtraParams({'dateFrom':dateFrom[0].value,'dateTo':dateTo[0].value,'keyWord':keyWord[0].value});
        //extraParams是为后续查询进行的添加参数
        userStore.load();
    },
    reflushUser: function () {

    },
    views: ['MV.view.userView'],
    stores: ['MV.store.UserStore'],
    models: ['MV.model.UserModel']
})