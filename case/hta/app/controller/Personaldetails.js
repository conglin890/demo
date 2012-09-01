Ext.define('HowToApply.controller.Personaldetails', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			info_filed : '#personaldetails_form textfield'
		},
		control : {
			info_filed : {
				change : 'info_filed_fun'		
			}
		}
	},
	info_filed_fun : function(obj) {	
		personaldetails_model.set(obj.getName(),obj.getValue());
		
		if(obj.getName() == 'birthday'){
			console.log(Ext.ComponentQuery.query('#personaldetails_form textfield[name="birthday"]')[0].getFormattedValue())
			personaldetails_model.set(obj.getName(),Ext.ComponentQuery.query('#personaldetails_form textfield[name="birthday"]')[0].getFormattedValue());
		}

	}

});