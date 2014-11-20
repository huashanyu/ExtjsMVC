/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.BLANK_IMAGE_URL="ext/resources/images/default/s.gif";
Ext.QuickTips.init();
/*菜单面板*/
MenuPanel=function(config){
    config=config||{};
    var config_=Ext.applyIf({
        layout:'accordion',
        region:'west',
        split:true,
        width:200,
        collapsible:true,
        border:false,
        animate: true
    },config);
    MenuPanel.superclass.constructor.call(this,config_);
};
Ext.extend(MenuPanel,Ext.Panel,{});
/*菜单模块面板*/
ModulePanel=function(config){
    config=config||{};
    var nodes_loader=new Ext.tree.TreeLoader({dataUrl:config.dataUrl});
    ModulePanel.superclass.constructor.call(this,{
        animate: true,
        title:config.title,
        rootVisible:false,
        iconCls:'tab_icon',
        region:'west',
        split:true,
        width:200,
        collapsible:true,
        root:{
        },
        loader:nodes_loader
    });
};

Ext.extend(ModulePanel,Ext.tree.TreePanel,{
    setTargetOpen:function(contentPanel){
        this.on("click",function(node){
            if(!node.attributes.leaf){
                return true;
            }
            var tabid="module_tab_"+node.attributes.id;
            var exist_panel=contentPanel.getComponent(tabid);
            if(exist_panel){
                contentPanel.setActiveTab(exist_panel);
            }else{
                var iframe_in_tab="iframe_"+tabid;
                var iframe_html="<iframe width=100% height=100% id='"+iframe_in_tab+"'/>"
                var panel=new Ext.Panel({
                    title:node.attributes.text,
                    id:tabid,
                    closable:true,
                    iconCls:'tab_icon_2',
                    html:iframe_html
                });
                contentPanel.add(panel);
                contentPanel.setActiveTab(panel);
                Ext.get(iframe_in_tab).set({
                    src:node.attributes.url
                });
            }
        });
    }
});
/*主面板*/
MainPanel=function(){
    MainPanel.superclass.constructor.call(this,{
        region:'center',
        margins:'0 5 5 0',
        resizeTabs: true,
        minTabWidth: 135,
        tabWidth: 135,
        enableTabScroll: true,
        activeTab: 0,
        items:[{
            title:'公告面板',
            closable:true,
            html:'管理平台欢迎您，如有问题，请联系coreycui,timwen,liubangchen'
        }],
        tbar:new Ext.Toolbar({
            items:[
                {xtype:'displayfield',value:'内容页面导航: ',style:'color:RED'},
                {xtype:'button',iconCls:'prev_icon',tooltip:'后退',handler:function(){
                    var activePanel=this.findParentByType("toolbar",false).ownerCt.getActiveTab();
                    var activePanelId=activePanel.getItemId();
                    var iframe_in_tab=Ext.get("iframe_"+activePanelId);
                    Ext.getDom("iframe_"+activePanelId).contentWindow.history.back();
                }},
                {xtype:'button',iconCls:'next_icon',tooltip:'前进',handler:function(){
                    var activePanel=this.findParentByType("toolbar",false).ownerCt.getActiveTab();
                    var activePanelId=activePanel.getItemId();
                    var iframe_in_tab=Ext.get("iframe_"+activePanelId);
                    Ext.getDom("iframe_"+activePanelId).contentWindow.history.forward();
                }},
                {xtype:'button',iconCls:'refresh_icon',tooltip:'刷新',handler:function(){
                    var activePanel=this.findParentByType("toolbar",false).ownerCt.getActiveTab();
                    var activePanelId=activePanel.getItemId();
                    var iframe_in_tab=Ext.get("iframe_"+activePanelId);
                    Ext.getDom("iframe_"+activePanelId).contentWindow.document.location.reload();
                }}
            ]
        })
    });
}
Ext.extend(MainPanel,Ext.TabPanel,{});
Ext.onReady(function(){
    var contentPanel=new MainPanel();


    var menu_panel=new ModulePanel({
        title:'功能导航',
        dataUrl:'menu_node.jsp'

    });

    menu_panel.setTargetOpen(contentPanel);


    var viewport=new Ext.Viewport({
        layout:'border',
        items:[
            {region:'north',border:false,contentEl:'header',split:true},
            menu_panel,
            contentPanel
        ]
    });
});