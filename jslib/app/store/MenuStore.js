/**
 * Created by zhangdihong on 2014/11/18.
 */
Ext.define("MV.store.MenuStore",{
    extend:'Ext.data.TreeStore',
    model:'MV.model.MenuModel',
    rootvisible:false,
    autoSync:true,
    proxy:{
        type:'ajax',
        api:{
            read:'menuData.json'
        },
        reader:{
            type:'json'
        }
    }
//    autoLoad: true
});