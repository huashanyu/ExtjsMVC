/**
 * Created by zhangdihong on 2014/12/1.
 */
Ext.define('MV.util.utilWindow', {
    extend: 'Ext.window.Window',
    layout: 'fit',
    width: 380,
//    height: 320,
    resizable: false,
    draggable: true,
    closable: true,
    modal: true,
    closeAction: 'destroy',//hide,close
    collapsible: true,
    titleCollapse: true,
    maximizable: false,
    bodyPadding: 15,
    border: false,
    animCollapse: true,
    title: '',
    pageY: 180,
    pageX:document.body.clientWidth / 2 - 420 / 2,
    animateTarget: Ext.getBody(),
    constrain: true,
    initComponent: function () {
        this.callParent(arguments);
    }
});