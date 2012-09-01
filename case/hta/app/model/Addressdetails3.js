Ext.define('HowToApply.model.Addressdetails3', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'previous.agentOrOwnerName',  type: 'string'}, 
        	   	{name: 'previous.agentOrOwnerPhone',  type: 'string'}, 
            	{name: 'previous.agentOrOwnerEmail',  type: 'string'}, 
            	{name: 'previous.agentOrOwnerFax',  type: 'string'}, 
            	{name: 'previous.rentPerWeek',  type: 'string'}, 
            	{name: 'previous.overseasAddress',  type: 'string'}, 
            	{name: 'previous.stayYears',  type: 'string'}, 
            	{name: 'previous.stayMonths',  type: 'string'}, 
            	{name: 'previous.leavingReason',  type: 'string'}, 
      ]
    }
});


var addressdetails3_model = Ext.create('HowToApply.model.Addressdetails2',{
		'previous.agentOrOwnerName':'',
		'previous.agentOrOwnerPhone':'',	
		'previous.agentOrOwnerEmail':'',
		'previous.agentOrOwnerFax':'',	
		'previous.rentPerWeek':'',
		'previous.overseasAddress':'',
		'previous.stayYears':'',	
		'previous.stayMonths':'',
		'previous.leavingReason':''
})