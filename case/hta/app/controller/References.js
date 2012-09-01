Ext.define('HowToApply.controller.References', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			references_text : '#references_panel textfield',
		},
		control : {
			references_text : {
				change : 'references_text_fun'
			}
		}
	},
	 references_text_fun:function(obj){
		references_model.set(obj.getName(),obj.getValue());
	}
	

});