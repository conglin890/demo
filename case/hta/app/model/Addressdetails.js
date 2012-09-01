Ext.define('HowToApply.model.Addressdetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'current.currentAddress',  type: 'string'}, 
        	   	{name: 'current.suburb',  type: 'string'}, 
            	{name: 'current.cityOrState',  type: 'string'}, 
            	{name: 'current.postcode',  type: 'string'}, 
            	{name: 'current.country',  type: 'string'}, 
            	{name: 'current.overseasAddress',  type: 'string'}, 
      ]
    }
});


var addressdetails_model = Ext.create('HowToApply.model.Addressdetails',{
		'current.currentAddress':'',
		'current.suburb':'',	
		'current.cityOrState':'',
		'current.postcode':'',	
		'current.overseasAddress':'',
		'current.country':''
})