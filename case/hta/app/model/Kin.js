Ext.define('HowToApply.model.Kin', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'kinDetailFullName',  type: 'string'}, 
        	   	{name: 'kinDetailContactPhone',  type: 'string'}, 
            	{name: 'kinDetailAddress',  type: 'string'}, 
            	{name: 'kinDetailRelationship',  type: 'string'}
      ]
    }
});


var kin_model = Ext.create('HowToApply.model.Kin',{
		'kinDetailFullName':'',
		'kinDetailContactPhone':'',	
		'kinDetailAddress':'',
		'kinDetailRelationship':''
})