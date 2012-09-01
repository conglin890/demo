Ext.define('HowToApply.controller.Child', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			children_filed : '#children_form textfield'
		},
		control : {
			children_filed : {
				change : 'children_filed_fun'		
			}
		}
	},
	children_filed_fun : function(obj) {	
		child_model.set(obj.getName(),obj.getValue());
	
	}

});