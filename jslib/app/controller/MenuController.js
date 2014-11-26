
/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define('MV.controller.MenuController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'MenuView dataview': {
                itemclick: this.itemClick
            }
        });
    },
    itemClick: function (_this, record, item, index, e, eOpts) {
//        console.log(_this);//获取整个 Ext.view.View对象
//        console.log(record);//获取Ext.data.Model 对象
//        console.log(item);//获取的HTMLElement 就是当前对象的整个html
//        console.log(index);//index 判断及所属层次进行判断，子节点依次递增需要将每个子节点遍历完了才是下一个节点
//        console.log(e);//Ext.EventObject 事件对象
//        console.log(eOpts+"------------------");//
        var _this = this;
        this.isClickEvent=true;
        var isAddNewTabPanel = true;
        var centerTabPanel = Ext.getCmp('centerTabPanel');
        var dataUrl = record.data.dataUrl;
        var centerIterm = centerTabPanel.items.items;
        if (!dataUrl) {
            return false;
        }
        for (var i = 0; i < centerIterm.length; i++) {
            if ((centerIterm[i].id.split('-')[0] == dataUrl.split('.')[2])) {
//                this.updateItem(centerTabPanel, centerIterm[i].id);
               this.fireEvent('tabchange',centerTabPanel,centerIterm[i]);
                isAddNewTabPanel = false;
                break;
            }
        }
        if (isAddNewTabPanel) {
            var newView = Ext.create(dataUrl, {closable: true});
            centerTabPanel.add(newView);
//            centerTabPanel.setActiveItem(newView);
            _this.updateItem(centerTabPanel, newView.id);//为新的view添加数据
            centerTabPanel.on('tabchange', _this.tabChange);
            this.fireEvent('tabchange',centerTabPanel,newView);
        }
    },
    updateItem: function (centerTabPanel, updateTabId) {

        Ext.getCmp(updateTabId).store.reload();
        centerTabPanel.setActiveItem(updateTabId);
    },
    tabChange: function (tabPanel, newCard, oldCard, eOpts) {
        //TODO 需要对在添加新的panel 禁用tabchange事件  若不禁用会出现两次http 请求
        Ext.getCmp(newCard.id).store.reload();
        tabPanel.setActiveItem(newCard.id);
    },
    views: ['MV.view.MenuView'],
    models: ['MV.model.MenuModel'],
    stores: ['MV.store.MenuStore']
});
