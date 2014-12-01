/**
 * Created by zhangdihong on 2014/11/28.
 */
Ext.define('MV.store.UserFromStore',{
    extend:'Ext.data.Store',
    model:'MV.model.UserFormModel',
    proxy:{
        writer:{
             type:'json'
        }
    }
});