Ext.define('HowToApply.model.Child', {
			extend: 'Ext.data.Model',
			config: {
        	fields: [ 
        	   	{name: 'children[0].Age',  type: 'string'}, 
        	   	{name: 'children[0].GenderValue',  type: 'string'},
        	   	{name: 'children[1].Age',  type: 'string'}, 
        	   	{name: 'children[1].GenderValue',  type: 'string'},
        	   	{name: 'children[2].Age',  type: 'string'}, 
        	   	{name: 'children[2].GenderValue',  type: 'string'},
        	   	{name: 'children[3].Age',  type: 'string'}, 
        	   	{name: 'children[3].GenderValue',  type: 'string'},
        	   	{name: 'children[4].Age',  type: 'string'}, 
        	   	{name: 'children[4].GenderValue',  type: 'string'},
        	   	{name: 'children[5].Age',  type: 'string'}, 
        	   	{name: 'children[5].GenderValue',  type: 'string'},
        	   	{name: 'children[6].Age',  type: 'string'}, 
        	   	{name: 'children[6].GenderValue',  type: 'string'},
        	   	{name: 'children[7].Age',  type: 'string'}, 
        	   	{name: 'children[7].GenderValue',  type: 'string'},
        	   	{name: 'children[8].Age',  type: 'string'}, 
        	   	{name: 'children[8].GenderValue',  type: 'string'},
        	   	{name: 'children[9].Age',  type: 'string'}, 
        	   	{name: 'children[9].GenderValue',  type: 'string'},
      ]
    }
});


var child_model = Ext.create('HowToApply.model.Kin',{
		'children[0].Age':'',
		'children[0].GenderValue':'',	
		'children[1].Age':'',
		'children[1].GenderValue':'',	
		'children[2].Age':'',
		'children[2].GenderValue':'',	
		'children[3].Age':'',
		'children[3].GenderValue':'',	
		'children[4].Age':'',
		'children[4].GenderValue':'',	
		'children[5].Age':'',
		'children[5].GenderValue':'',	
		'children[6].Age':'',
		'children[6].GenderValue':'',	
		'children[7].Age':'',
		'children[7].GenderValue':'',	
		'children[8].Age':'',
		'children[8].GenderValue':'',	
		'children[9].Age':'',
		'children[9].GenderValue':'',	
})