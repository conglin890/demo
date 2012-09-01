// PreApplicationPage
Ext.define('HowToApply.controller.Leasedetails', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			child_num_btn : '#child_num',
			pet_num_btn : '#pet_num',
			form_text:'#lesase_panel textfield'
		},
		control : {
			child_num_btn : {
				change : 'child_num_fun'
			},
			pet_num_btn: {
				change : 'pet_num_fun'
			},
			
			form_text:{
				change:'form_text_fun'
			}
		}
	},
	child_num_fun : function(obj) {
		if( obj.getValue() != null){
			for( i in Ext.ComponentQuery.query('#child > button') ){
				Ext.ComponentQuery.query('#child > button')[i].setIconCls('child_off')		
			}
		} else {
			Ext.ComponentQuery.query('#child > button')[0].setIconCls('child_on')
		}	
		child_panel_show();
	},
	pet_num_fun:function(obj){
		if( obj.getValue() != null){
			for( i in Ext.ComponentQuery.query('#pet > button') ){
				Ext.ComponentQuery.query('#pet > button')[i].setIconCls('pet_off')		
			}
		} else {
			Ext.ComponentQuery.query('#pet > button')[0].setIconCls('pet_on')
		}	
		pet_panel_show();
	},
	form_text_fun:function(obj){
		 leasedetails_model.set(obj.getName(),obj.getValue());
		 
			if(obj.getName() == 'startDate'){
				console.log(Ext.ComponentQuery.query('#lesase_panel textfield[name="startDate"]')[0].getFormattedValue())
				personaldetails_model.set(obj.getName(),Ext.ComponentQuery.query('#lesase_panel textfield[name="startDate"]')[0].getFormattedValue());
			}
	}

});