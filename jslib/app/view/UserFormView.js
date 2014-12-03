/**
 * Created by zhangdihong on 2014/11/28.
 */
Ext.define('MV.view.UserFormView', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.UserFormView',
    defaultType: 'textfield',
//    labelAlign: 'right',
    labelWidth: 15,
    frame: false,
    border: false,
    trackResetOnLoad: true,//是否在表单初建的时候清除数据
    autoShow: true,
    autoHeight: true,
    defaults: {
        allowBlank: false,//不允许为空
        labelAlign: 'right',
        blankText: '不能为空'
    },
    layoutConfig: {
        labelSeparator:':'
    },
    items: [
        {fieldLabel: '姓名', vtype: 'alpha', vtypeText: '请用英文字母'},
        {fieldLabel: '密码',vtype:'password',id:'password',vtypeText:'两次密码不一致',confirmTo:'repassword'},
        {fieldLabel: '确认密码',vtype:'password',id:'repassword',confirmTo:'password',vtypeText:'两次密码不一致'},
        {fieldLabel: '电话号码',vtype:'phone'},
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
        {text: '添加', handler: function (_button, e) {
            var  _form=_button.ownerCt.ownerCt;
            if(_form.getForm().isValid()){
                _form.getForm().submit({
                    waitTitle:'温馨提示',
                    waitMsg:'正在提交',
                    url:'',
                    method:'POST',
                    params:"",
                    success:function(form,action){

                    },
                    failure:function(form,action){

                    }
                });
            }
        }},
        {text: '重置', handler: function (_button, e) {
            this.ownerCt.ownerCt.reset();
        }}
    ],
    //按钮显示位置
    buttonAlign: 'center',
    initComponent: function () {
        this.callParent(arguments);
        Ext.applyIf(Ext.form.VTypes, {
            password: function (val,field) {
                         //val输入的值，实时监控
                    console.log(val);
                    console.log(field.confirmTo);
                    console.log(field);
            },
            phone: function (val,field) {
                try
                {
                    if(/1[3|5|7|8|][0-9]{9}/.test(val))
                            return true;
                            return false;
                }
                catch(e)
                {
                    return false;
                }
            },
            phoneText:'电话号码格式不争取1'
        });
    }
});