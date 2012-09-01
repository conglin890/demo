Ext.define('HowToApply.controller.Previouspropertydetails2', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			previouspropertydetails2_text : '#previous_form textfield',
			//addressdetails2_text : '#addressdetails2_panel textfield'
		},
		control : {
			previouspropertydetails2_text : {
				change : 'previous2_text_fun'
			},
//			addressdetails2_text : {
//				change : 'addressdetails2_text_fun'
//			}
		}
	},
	previous2_text_fun:function(obj){
		previouspropertydetails2_model.set(obj.getName(),obj.getValue());
	},
	addressdetails2_text_fun:function(obj){
		addressdetails2_model.set(obj.getName(),obj.getValue());
	}
	

});