Ext.define('HowToApply.model.Unemployeddetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'unemployed.description',  type: 'string'}, 

      ]
    }
});


var unemployeddetails_model = Ext.create('HowToApply.model.Unemployeddetails',{
		'unemployed.description':'',
	

})