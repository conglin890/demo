Ext.define('HowToApply.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});