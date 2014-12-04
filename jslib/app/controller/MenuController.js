/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define('MV.controller.MenuController', {
    extend: 'Ext.app.Controller',
    /**
     * menu treepanel 初始化方式注册事件等
     */
    init: function () {
        this.control({
            'MenuView': {
                itemclick: this.itemClick,
//                cellcontextmenu: this.contextMenuClick,
                rowcontextmenu: this.rowContextMenuClick
            }
        });
    },
    /**
     *
     * @param _this //获取整个 Ext.view.View对象 及 menu这个对象
     * @param record //获取Ext.data.Model 对象
     * @param item //获取的HTMLElement 就是当前对象的整个html
     * @param index // 判断及所属层次进行判断，子节点依次递增需要将每个子节点遍历完了才是下一个节点
     * @param e     //Ext.EventObject 事件对象
     * @param eOpts
     * @returns {boolean}
     */
    itemClick: function (_this, record, item, index, e, eOpts) {
        var _this = this;
        var isAddNewTabPanel = true;
        var centerTabPanel = Ext.getCmp('centerTabPanel');
        var dataUrl = record.data.dataUrl;
        var centerIterm = centerTabPanel.items.items;
        if (!dataUrl) {
            return false;
        }
        for (var i = 0; i < centerIterm.length; i++) {
            if ((centerIterm[i].id.split('-')[0] == dataUrl.split('.')[2])) {
                /**
                 * 此处代码需要优化，围绕tabchange触发的原因进行考虑
                 * 如果当前活跃窗口是和当前点击的窗口一直仅仅将当前窗口高亮，进行数据加载，反之其他创口数据加载交给了tabchange来做
                 */
                if (centerTabPanel.getActiveTab().id == centerIterm[i].id) {
                    this.updateItem(centerTabPanel, centerIterm[i].id);
                } else {
                    centerTabPanel.setActiveTab(centerIterm[i].id);
                }
                isAddNewTabPanel = false;
                break;
            }
        }
        //开关变量如果在centerTabpanel没有则进行添加操作
        if (isAddNewTabPanel) {
            var newView = Ext.create(dataUrl, {closable: true});
            centerTabPanel.add(newView);
            if (centerIterm.length == 1) {
                _this.updateItem(centerTabPanel, newView.id);//为新的第一个view添加数据  其他view依靠tabchange事件触发
            }
            //高亮当前panel
            centerTabPanel.setActiveTab(newView.id);
            centerTabPanel.on('tabchange', _this.tabChange);
        }
    },
    /**
     * 更新数据并且高亮显示
     * @param centerTabPanel    显示区域Ext对象
     * @param updateTabId       需要高亮和更新数据的store
     */
    updateItem: function (centerTabPanel, updateTabId) {
        Ext.getCmp(updateTabId).store.reload();
        centerTabPanel.setActiveTab(updateTabId);
    },
    /**
     * tabchange事件
     * @param centerTabPanel  显示区域Ext对象
     * @param newCard   新的显示panel
     * @param oldCard   切换之前的显示的panel
     * @param eOpts
     */
    tabChange: function (centerTabPanel, newCard, oldCard, eOpts) {
        //FIXME 需要对在添加新的panel 第二个panel单击某个item添加到tabpanel上时会触发tabchange事件 目前是在第二次添加的时候进行判断如果是第二次就不进行click的update
        Ext.getCmp(newCard.id).store.reload();
        centerTabPanel.setActiveTab(newCard.id);
    },
    /**
     *
     * @param _this当前 treeview对象
     * @param record treeview的数据
     * @param tr    这行的html标签
     * @param rowIndex 行索引
     * @param e事件源对象
     * @param eOpts 选择项
     */
    rowContextMenuClick: function (_this, record, tr, rowIndex, e, eOpts) {
        e.stopEvent();
        var menuPanel = Ext.create('MV.view.ContextMenuView', {
            //TODO对于menu  form这样的panel需要在单独的地方进行业务逻辑处理还是需要哪里创建哪里业务逻辑处理
            /**
             * 注册事件
             */
            listeners: {
                /**
                 *
                 * @param menu  这个菜单栏对象
                 * @param item  单击的那个选项
                 * @param e     事件源对象
                 * @param eOpts 可选项
                 */
                'click': function (menu, item, e, eOpts) {
                    switch(item.action){
                        case'add':
                            Ext.Msg.prompt('输入框','输入添加的新名字', function (btn,text) {
                                if(btn=='ok'){

                                }
                            });
                            break;
                        case'edit':
                            Ext.Msg.prompt('输入框','输入新名字', function (btn,text) {
                                if(btn=='ok'){
                                    record.data.text=text;
                                    console.log(record.data.text);
                                    //TODO暂时没有弄出如何实现双向数据绑定方式动态改变数据
                                }
                            });
                            break;
                        case'delete':
                            break;
                        default :
                            Ext.Msg.alert('警告','程序出错啦')
                    }
                }
            }
        });
        if (!record.data.leaf) {
            menuPanel.items.items[2].disable();
        }
        menuPanel.showAt(e.getPoint());
        console.log(_this);
        console.log(record);
        console.log(tr);
        console.log(rowIndex);
        console.log(e);
        console.log(eOpts);
    },
    views: ['MV.view.MenuView'],
    models: ['MV.model.MenuModel'],
    stores: ['MV.store.MenuStore']
});
