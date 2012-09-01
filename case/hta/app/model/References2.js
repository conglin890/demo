Ext.define('HowToApply.model.References2', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'referenceSecond.email',  type: 'string'}, 
        	   	{name: 'referenceSecond.firstName',  type: 'string'}, 
        	   	{name: 'referenceSecond.lastName',  type: 'string'}, 
        	   	{name: 'referenceSecond.occupation',  type: 'string'}, 
        	   	{name: 'referenceSecond.phone',  type: 'string'}

      ]
    }
});


var references2_model = Ext.create('HowToApply.model.References2',{
			'referenceSecond.email':'',
			'referenceSecond.firstName':'',
			'referenceSecond.lastName':'',
			'referenceSecond.occupation':'',
			'referenceSecond.phone':'',
	

})