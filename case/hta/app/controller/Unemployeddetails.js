Ext.define('HowToApply.controller.Unemployeddetails', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			unemployeddetails_text : '#unemployeddetails_panel textfield',
		},
		control : {
			unemployeddetails_text : {
				change : 'unemployeddetails_text_fun'
			}
		}
	},
	 unemployeddetails_text_fun:function(obj){
		unemployeddetails_model.set(obj.getName(),obj.getValue());
	}
	

});