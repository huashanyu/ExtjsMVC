/**
 * Created by zhangdihong on 2014/12/1.
 */
Ext.define('MV.view.testWindow', {
    extend: 'Ext.window.Window',
    layout: 'fit',
    width: 380,
    height: 220,
    resizable: false,
    draggable: true,
    closable: true,
    modal: true,
    closeAction: 'hide',
    collapsible: true,
    titleCollapse: true,
    maximizable: false,
    buttonAlign: 'right',
    bodyPadding: 15,
    border: false,
    animCollapse: true,
    title: '测试弹出框口',
    pageY: 180,
    pageX:document.body.clientWidth / 2 - 420 / 2,
    animateTarget: Ext.getBody(),
    constrain: true,
    initComponent: function () {
//        Ext.applyIf(this, {items: Ext.create('MV.view.UserFormView')});
        this.callParent(arguments);
    }
});