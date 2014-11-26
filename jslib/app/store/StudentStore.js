/**
 * Created by zhangdihong on 2014/11/24.
 */
Ext.define('MV.store.StudentStore',{
    extend:'Ext.data.Store',
    model:'MV.model.StudentModel',
    proxy:{
        type:'ajax',
        url:'userData.json',
        reader:{
            type:'json'
        }
    }
//    autoLoad: true
});