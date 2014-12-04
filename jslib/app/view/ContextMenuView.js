/**
 * Created by zhangdihong on 2014/12/3.
 */
Ext.define('MV.view.ContextMenuView', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.ContextMenu',
    items: [
        {text: '添加',action:'add',icon: '../jslib/static/icon/arrow/add.png'},
        {text: '编辑',action:'edit',icon: '../jslib/static/icon/application/application_edit.png'},
        {text: '删除',action:'delete',icon: '../jslib/static/icon/delete.png'}
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});