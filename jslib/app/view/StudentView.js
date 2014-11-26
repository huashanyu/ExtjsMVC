/**
 * Created by zhangdihong on 2014/11/24.
 */
Ext.define('MV.view.StudentView', {
    extend: 'Ext.grid.Panel',
    store: 'MV.store.StudentStore',
    title: '学生信息展示',
    alias: 'widget.StudentView',
//    autoShow:true,
    columns: [
        {dataIndex: 'id', text: '编号', flex: 1},
        {dataIndex: 'name', text: '姓名', flex: 1},
        {dataIndex: 'createTime', text: '创建时间', flex: 1}
    ],
    tbar: [
        {xtype: 'button', text: '添加用户'},
        {xtype: 'button', text: '删除用户'}
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});