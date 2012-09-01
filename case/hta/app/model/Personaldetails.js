Ext.define('HowToApply.model.Personaldetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [
            	{name: 'birthday',  type: 'string'},          	
            	{name: 'driverLicenceOrPassportNumber', type: 'string'},
            	{name: 'firstName',  type: 'string'},          	
            	{name: 'lastName', type: 'string'},
            	{name: 'email',  type: 'string'},          	
            	{name: 'currentAddress', type: 'string'},
            	{name:'phone',  type: 'string'},          	
 
            	
      ]
    }
});


var personaldetails_model =  Ext.create('HowToApply.model.Personaldetails',{
							'birthday':'',
							'driverLicenceOrPassportNumber':'',
							'firstName':'',
							'lastName':'',
							'email':'',
							'currentAddress':'',
							'phone':'',			
	
})