Ext.define('HowToApply.model.Selfemployeddetails2', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'selfEmployed.accountantEmailAddress',  type: 'string'}, 
        	   	{name: 'selfEmployed.accountantFaxNumber',  type: 'string'}, 
            	{name: 'selfEmployed.accountantPhoneNumber',  type: 'string'}, 
            	{name: 'selfEmployed.employmentLength',  type: 'string'}, 
            	{name: 'selfEmployed.netIncomeWeekly',  type: 'string'}, 
            	{name: 'selfEmployed.workhoursperweek',  type: 'string'}, 
   
      ]
    }
});


var selfemployeddetails2_model = Ext.create('HowToApply.model.Selfemployeddetails2',{
		'selfEmployed.accountantEmailAddress':'',
		'selfEmployed.accountantFaxNumber':'',	
		'selfEmployed.accountantPhoneNumber':'',
		'selfEmployed.employmentLength':'',	
		'selfEmployed.netIncomeWeekly':'',
		'selfEmployed.workhoursperweek':'',

})