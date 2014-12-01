/**
 * Created by zhangdihong on 2014/11/28.
 */
Ext.define('MV.view.UserFormView', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.UserFormView',
    defaultType: 'textfield',
    labelAlign: 'right',
    labelWidth: 65,
    frame: false,
    border: false,
    trackResetOnLoad: true,//是否在表单初建的时候清除数据
    store:'MV.store.UserFromStore',
    autoShow:true,
//    layoutConfig: {
//        labelSeparator: ':'
//    },
    items: {
        defaults: {

            labelAlign:'left',
            msgTarget: 'side'
        },
        items: [
            {xtype: 'textfield', lablefield: '姓名'},
            {xtype: 'textfield', lablefield: '年龄'},
            {xtype: 'textfield', lablefield: '性别'},
            {xtype: 'datefield', lablefield: '生日', format: 'Y-m-d'}
        ]
    },
//在form表单页脚处显示按钮
//    dockedItems: [{
//    xtype: 'toolbar',
//    dock: 'bottom',
//    ui: 'footer',
//    defaults: {minWidth: minButtonWidth},
//    items: [
//        { xtype: 'component', flex: 1 },
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