Ext.define('HowToApply.controller.Studentdetails', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			studentdetails_text : '#student_panel textfield',
		},
		control : {
			studentdetails_text : {
				change : 'studentdetails_text_fun'
			}
		}
	},
	 studentdetails_text_fun:function(obj){
		studentdetails_model.set(obj.getName(),obj.getValue());
	}
	

});