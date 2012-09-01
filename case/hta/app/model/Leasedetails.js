Ext.define('HowToApply.model.Leasedetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'startDate',  type: 'string'}, 
        	   	{name: 'leaseLength',  type: 'string'}, 
            	{name: 'rentPerWeek',  type: 'string'}, 
      ]
    }
});


var leasedetails_model = Ext.create('HowToApply.model.Leasedetails',{
		'startDate':'',
		'leaseLength':'',	
		'rentPerWeek':''
})