Ext.define('HowToApply.model.Student3', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'student.paymentAmount',  type: 'string'}, 
        	   	{name: 'student.paymentFrequency',  type: 'string'}, 
            	{name: 'student.paymentType',  type: 'string'}, 
      ]
    }
});


var student3_model = Ext.create('HowToApply.model.Studentdetails',{
		'student.paymentAmount':'',
		'student.paymentFrequency':'',	
		'student.paymentType':'',

})