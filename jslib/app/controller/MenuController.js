/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define('MV.controller.MenuController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'menuList dataview': {
                itemclick:this.itemClick}
        });
    },
    itemClick: function (_this, record, item, index, e, eOpts) {
        console.log(_this);//获取整个 Ext.view.View对象
        console.log(record);//获取Ext.data.Model 对象
        console.log(item);//获取的HTMLElement 就是当前对象的整个html
        console.log(index);//index 判断及所属层次进行判断，子节点依次递增需要将每个子节点遍历完了才是下一个节点
        console.log(e);//Ext.EventObject 事件对象
        console.log(eOpts);//
    },
    views: ['MV.view.MenuView'],
    models: ['MV.model.MenuModel'],
    stores: ['MV.store.MenuStore']
});
