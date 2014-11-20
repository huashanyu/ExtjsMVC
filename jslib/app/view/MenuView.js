/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define('MV.view.MenuView',{
    extend:'Ext.tree.Panel',
    store:'MV.store.MenuStore',
    alias:'widget.menuList',
    title:'树状图形',
    animate:true,
    collapsible:true,
    enableDD:true,
    enableDrag:true,
    autoScroll:true,
    useArrows:true,
//    root:'asyncTreeNode',
//        frame:true,
//    autoShow:true,
//    rootVisible:false

   renderTo:Ext.getBody()
});
