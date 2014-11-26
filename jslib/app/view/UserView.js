/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.view.userView', {
    extend: 'Ext.grid.Panel',
    title: 'gird显示',
    alias:'widget.userView',
//    frame:true,
//    height:document.body.clientHeight*100,
//    width:document.body.clientWidth*100,
    autoShow:true,
    columns:[
        {dataIndex:'name',text:'姓名',flex:1},
        {dataIndex:'age',text:'年龄',flex:1},
        {dataIndex:'sex',text:'性别',flex:1},
        {dataIndex:'createTime',text:'创建时间',flex:1}
    ],
    tbar:[
        {xtype:'button',text:'添加用户'},
        {xtype:'button',text:'删除用户'},
    ],
    setType:'checkboxmodel',
    multiSelect:true,
    store:'MV.store.UserStore',
    initComponent: function () {
        this.callParent(arguments);
    }
});