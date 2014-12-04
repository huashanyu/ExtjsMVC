/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.view.userView', {
    extend: 'Ext.grid.Panel',
    title: 'gird显示',
    alias: 'widget.userView',
    forceFit: true,//表示为自动展开/缩小列的宽度以适应grid的宽度，这样就不会出现水平的滚动条
    multiSelect: true,
//    layout: 'fit',
    selType: 'checkboxmodel',
    frame: true,
//    height:document.body.clientHeight*100,
//    width:document.body.clientWidth*100,
    autoShow: true,
    columns: {items: [
        {dataIndex: 'name', text: '姓名', flex: 1},
        {dataIndex: 'age', text: '年龄', flex: 1},
        {dataIndex: 'sex', text: '性别', flex: 1},
        {dataIndex: 'createTime', text: '创建时间', flex: 1}
    ], defaults: {
        align: 'center'
    }},
    tbar: [
        {xtype: 'button', text: '添加', icon: '../jslib/static/icon/user/user_add.png', action: 'add'},
        {xtype: 'button', text: '删除', icon: '../jslib/static/icon/user/user_delete.png', action: 'delete'},
        {xtype: 'datefield', name: 'dateFrom', format: 'Y-m-d', fieldLabel: '修改日期', labelWidth: 58, labelAlign: 'right'},
        {xtype: 'datefield', name: 'dateTo', format: 'Y-m-d', maxValue: new Date(), fieldLabel: '到', labelWidth: 15, labelAlign: 'right'},
        {xtype: 'textfield', name: 'keyWord', fieldLabel: '关键字', labelWidth: 43, placeholder: '关键字'},
        {xtype: 'button', text: '查找', icon: '../jslib/static/icon/map/magnifier.png', action: 'search'},
        {xtype: 'button', text: '刷新', icon: '../jslib/static/icon/arrow/arrow_refresh.png', action: 'reflush', defaultAlign: 'right'}
    ],
    fbar: [
        {xtype: 'pagingtoolbar',store:'MV.store.UserStore',displayInfo:true}
    ],
    setType: 'checkboxmodel',
    multiSelect: true,
    store: 'MV.store.UserStore',
    initComponent: function () {
        this.callParent(arguments);
    }
});