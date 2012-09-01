Ext.define('HowToApply.model.References', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'referenceFirst.email',  type: 'string'}, 
        	   	{name: 'referenceFirst.firstName',  type: 'string'}, 
        	   	{name: 'referenceFirst.lastName',  type: 'string'}, 
        	   	{name: 'referenceFirst.occupation',  type: 'string'}, 
        	   	{name: 'referenceFirst.phone',  type: 'string'}

      ]
    }
});


var references_model = Ext.create('HowToApply.model.References',{
			'referenceFirst.email':'',
			'referenceFirst.firstName':'',
			'referenceFirst.lastName':'',
			'referenceFirst.occupation':'',
			'referenceFirst.phone':'',
	

})