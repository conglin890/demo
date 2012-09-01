Ext.define('HowToApply.model.Currentlyemployed', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'currentlyEmployed.companyAddress',  type: 'string'}, 
        	   	{name: 'currentlyEmployed.companyEmailAddress',  type: 'string'}, 
            	{name: 'currentlyEmployed.companyFaxNumber',  type: 'string'}, 
            	{name: 'currentlyEmployed.companyName',  type: 'string'}, 
            	{name: 'currentlyEmployed.companyPhoneNumber',  type: 'string'}, 
            	{name: 'currentlyEmployed.employmentLength',  type: 'string'}, 
            	{name: 'currentlyEmployed.employmentStatusValue',  type: 'string'},
            	{name: 'currentlyEmployed.jobPosition',  type: 'string'},
            	{name: 'currentlyEmployed.netIncomeWeekly',  type: 'string'},
            	{name: 'currentlyEmployed.workhoursperweek',  type: 'string'},
      ]
    }
});


var currentlyemployed_model = Ext.create('HowToApply.model.Addressdetails',{
				'currentlyEmployed.companyAddress':'',	
				'currentlyEmployed.companyEmailAddress':'',	
				'currentlyEmployed.companyFaxNumber':'',
				'currentlyEmployed.companyName':'',	
				'currentlyEmployed.companyPhoneNumber':'',	
				'currentlyEmployed.employmentLength':'',	
				'currentlyEmployed.employmentStatusValue':'',	
				'currentlyEmployed.jobPosition':'',
				'currentlyEmployed.netIncomeWeekly':'',
				'currentlyEmployed.workhoursperweek':''
})