/**
 * Created by zhangdihong on 2014/11/28.
 */
Ext.define('MV.view.UserFormView', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.UserFormView',
    defaultType: 'textfield',
    labelAlign: 'left',
//    labelWidth: 65,
    frame: false,
    border:false,
    trackResetOnLoad: true,//是否在表单初建的时候清除数据
    store: 'MV.store.UserFromStore',
    autoShow: true,
        layoutConfig: {
        labelSeparator: ':'
    },
    items: [
        {fieldLabel: '姓名'},
        {fieldLabel: '年龄'},
        {fieldLabel: '性别'},
        {xtype: 'datefield', fieldLabel: '生日', format: 'Y-m-d'}
    ],
//form表单页脚处显示按钮
//    dockedItems: [{
//    xtype: 'toolbar',
//    dock: 'bottom',
//    ui: 'footer',
//    defaults: {minWidth: minButtonWidth},
//    items: [
//        { xtype: 'button', text: 'Button 1' }
//    ]
//}]  || 等价下面的代码
    buttons: [
        {text: '添加'},
        {text: '重置'}
    ],
    //按钮显示位置
    buttonAlign: 'center',
    initComponent: function () {
        this.callParent(arguments);
    }
});