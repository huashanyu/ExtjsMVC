/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define('MV.view.MenuView',{
    extend:'Ext.tree.Panel',
    store:'MV.store.MenuStore',
    alias:'widget.menuList',
    title:'权限管理',
    icon:'../jslib/static/icon/folder/folder_database.png',
    animate:true,
    enableDD:true,
    enableDrag:true,
    autoScroll:true,
    useArrows:true,
    root:'asyncTreeNode',
    frame:true,
    autoShow:true,
   rootVisible:false,
   renderTo:Ext.getBody(),
    initComponent: function () {
        this.callParent(arguments);
    }
});
