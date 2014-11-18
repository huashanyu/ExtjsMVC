/**
 * Created by Administrator on 2014/9/10.
 */
Ext.define('MV.store.UserStore', {
        extend: 'Ext.data.Store',
        model:'MV.model.UserModel',
        proxy: {
            type: 'ajax',
            url: "user.json",
            reader: {
                type: 'json',
                root: 'data'
            },
            writer: {
                type: 'json'
            }
        },
        autoLoad: true
    }
);