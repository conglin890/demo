Ext.define('HowToApply.model.PreApplicationPage2', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [
            	{name: 'applicants[0].FirstName',  type: 'string'},          	
            	{name: 'applicants[0].LastName', type: 'string'},
            	{name: 'applicants[0].Phone',   type: 'int'}, 
            	{name: 'applicants[1].FirstName',  type: 'string'},          	
            	{name: 'applicants[1].LastName', type: 'string'},
            	{name: 'applicants[1].Phone',   type: 'int'},
            	{name: 'applicants[2].FirstName',  type: 'string'},          	
            	{name: 'applicants[2].LastName', type: 'string'},
            	{name: 'applicants[2].Phone',   type: 'int'},
            	{name: 'applicants[3].FirstName',  type: 'string'},          	
            	{name: 'applicants[3].LastName', type: 'string'},
            	{name: 'applicants[3].Phone',   type: 'int'},
            	{name: 'applicants[4].FirstName',  type: 'string'},          	
            	{name: 'applicants[4].LastName', type: 'string'},
            	{name: 'applicants[4].Phone',   type: 'int'},
            	{name: 'applicants[5].FirstName',  type: 'string'},          	
            	{name: 'applicants[5].LastName', type: 'string'},
            	{name: 'applicants[5].Phone',   type: 'int'},
            	{name: 'applicants[6].FirstName',  type: 'string'},          	
            	{name: 'applicants[6].LastName', type: 'string'},
            	{name: 'applicants[6].Phone',   type: 'int'},
            	{name: 'applicants[7].FirstName',  type: 'string'},          	
            	{name: 'applicants[7].LastName', type: 'string'},
            	{name: 'applicants[7].Phone',   type: 'int'},
            	{name: 'applicants[8].FirstName',  type: 'string'},          	
            	{name: 'applicants[8].LastName', type: 'string'},
            	{name: 'applicants[8].Phone',   type: 'int'},
            	{name: 'applicants[9].FirstName',  type: 'string'},          	
            	{name: 'applicants[9].LastName', type: 'string'},
            	{name: 'applicants[9].Phone',   type: 'int'},
            	
      ]
    }
});


var person_model =  Ext.create('HowToApply.model.PreApplicationPage2',{
	
							'applicants[0].FirstName':'',
							'applicants[0].LastName':'',
							'applicants[0].Phone':'',
							'applicants[1].FirstName':'',
							'applicants[1].LastName':'',
							'applicants[1].Phone':'',
							'applicants[2].FirstName':'',
							'applicants[2].LastName':'',
							'applicants[2].Phone':'',
							'applicants[3].FirstName':'',
							'applicants[3].LastName':'',
							'applicants[3].Phone':'',		
							'applicants[4].FirstName':'',
							'applicants[4].LastName':'',
							'applicants[4].Phone':'',
							'applicants[5].FirstName':'',
							'applicants[5].LastName':'',
							'applicants[5].Phone':'',
							'applicants[6].FirstName':'',
							'applicants[6].LastName':'',
							'applicants[6].Phone':'',
							'applicants[7].FirstName':'',
							'applicants[7].LastName':'',
							'applicants[7].Phone':'',
							'applicants[8].FirstName':'',
							'applicants[8].LastName':'',
							'applicants[8].Phone':'',
							'applicants[9].FirstName':'',
							'applicants[9].Phone':''
})