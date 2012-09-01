Ext.define('HowToApply.model.Addressdetails2', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'current.agentOrOwnerName',  type: 'string'}, 
        	   	{name: 'current.agentOrOwnerPhone',  type: 'string'}, 
            	{name: 'current.agentOrOwnerEmail',  type: 'string'}, 
            	{name: 'current.agentOrOwnerFax',  type: 'string'}, 
            	{name: 'current.rentPerWeek',  type: 'string'}, 
            	{name: 'current.overseasAddress',  type: 'string'}, 
            	{name: 'current.stayYears',  type: 'string'}, 
            	{name: 'current.stayMonths',  type: 'string'}, 
            	{name: 'current.leavingReason',  type: 'string'}, 
      ]
    }
});


var addressdetails2_model = Ext.create('HowToApply.model.Addressdetails2',{
		'current.agentOrOwnerName':'',
		'current.agentOrOwnerPhone':'',	
		'current.agentOrOwnerEmail':'',
		'current.agentOrOwnerFax':'',	
		'current.rentPerWeek':'',
		'current.overseasAddress':'',
		'current.stayYears':'',	
		'current.stayMonths':'',
		'current.leavingReason':''
})