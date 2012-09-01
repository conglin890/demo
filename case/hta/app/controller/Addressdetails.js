Ext.define('HowToApply.controller.Addressdetails', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			addressdetails_text : '#addressdetails_panel textfield',
			addressdetails2_text : '#addressdetails2_panel textfield',
			addressdetails3_text: '#previous2_form textfield'
		},
		control : {
			addressdetails_text : {
				change : 'addressdetails_text_fun'
			},
			addressdetails2_text : {
				change : 'addressdetails2_text_fun'
			},
			addressdetails3_text : {
				change : 'addressdetails3_text_fun'
			}
		}
	},
	addressdetails_text_fun:function(obj){
		addressdetails_model.set(obj.getName(),obj.getValue());
	},
	addressdetails2_text_fun:function(obj){
		addressdetails2_model.set(obj.getName(),obj.getValue());
	},
	addressdetails3_text_fun:function(obj){
		addressdetails3_model.set(obj.getName(),obj.getValue());
	}
	

});