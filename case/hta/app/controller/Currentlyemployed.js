Ext.define('HowToApply.controller.Currentlyemployed', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			currentlyemployed_text : '#currentlyemployed_panel textfield',
		},
		control : {
			currentlyemployed_text : {
				change : 'currentlyemployed_text_fun'
			}
		}
	},
	 currentlyemployed_text_fun:function(obj){
		currentlyemployed_model.set(obj.getName(),obj.getValue());
	}
	

});