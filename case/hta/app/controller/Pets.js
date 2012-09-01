Ext.define('HowToApply.controller.Pets', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			pets_filed : '#pets_form textfield'
		},
		control : {
			pets_filed : {
				change : 'pets_filed_fun'		
			}
		}
	},
	pets_filed_fun : function(obj) {	
		pets_model.set(obj.getName(),obj.getValue());
	
	}

});