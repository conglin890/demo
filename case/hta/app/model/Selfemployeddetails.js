Ext.define('HowToApply.model.Selfemployeddetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'selfEmployed.businessName',  type: 'string'}, 
        	   	{name: 'selfEmployed.businessType',  type: 'string'}, 
            	{name: 'selfEmployed.businessAddress',  type: 'string'}, 
            	{name: 'selfEmployed.businessPhoneNumber',  type: 'string'}, 
            	{name: 'selfEmployed.businessEmailAddress',  type: 'string'}, 
            	{name: 'selfEmployed.businessFaxNumber',  type: 'string'}, 
            	{name: 'selfEmployed.aBNNumber', type:'string'}
   
      ]
    }
});


var selfemployeddetails_model = Ext.create('HowToApply.model.Selfemployeddetails',{
		'selfEmployed.businessName':'',
		'selfEmployed.businessType':'',	
		'selfEmployed.businessAddress':'',
		'selfEmployed.businessPhoneNumber':'',	
		'selfEmployed.businessEmailAddress':'',
		'selfEmployed.businessFaxNumber':'',
		'selfEmployed.aBNNumber':''

})