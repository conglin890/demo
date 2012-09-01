Ext.define('HowToApply.controller.Student3', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			student3_form_text : '#student3_form textfield',
		},
		control : {
			student3_form_text : {
				change : 'student3_form_text_fun'
			}
		}
	},
	student3_form_text_fun:function(obj){
		
	
		student3_model.set(obj.getName(),obj.getValue());
	}
	

});