Ext.define('HowToApply.model.Studentdetails', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'student.courseLength',  type: 'string'}, 
        	   	{name: 'student.courseName',  type: 'string'}, 
            	{name: 'student.institutionName',  type: 'string'}, 
      ]
    }
});


var studentdetails_model = Ext.create('HowToApply.model.Studentdetails',{
		'student.courseLength':'',
		'student.courseName':'',	
		'student.institutionName':'',

})