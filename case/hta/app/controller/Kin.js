Ext.define('HowToApply.controller.Kin', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			kind_filed : '#kindetails_form textfield'
		},
		control : {
			kind_filed : {
				change : 'kind_filed_fun'		
			}
		}
	},
	kind_filed_fun : function(obj) {	
		personaldetails_model.set(obj.getName(),obj.getValue());
	}

});