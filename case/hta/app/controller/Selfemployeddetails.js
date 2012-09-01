Ext.define('HowToApply.controller.Selfemployeddetails', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			selfemployeddetails_text:'#selfemployeddetails_panel textfield',
			selfemployeddetails2_text:'#selfemployeddetails2_panel textfield',
		},
		control : {
				selfemployeddetails_text : {
				change : 'selfemployeddetails_text_fun'
			},
			selfemployeddetails2_text : {
				change : 'selfemployeddetails2_text_fun'
			}
		}
	},
	 selfemployeddetails_text_fun:function(obj){

		selfemployeddetails_model.set(obj.getName(),obj.getValue());
	},
		 selfemployeddetails2_text_fun:function(obj){

		selfemployeddetails2_model.set(obj.getName(),obj.getValue());
	}
	

});