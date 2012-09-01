// PreApplicationPage
Ext.define('HowToApply.controller.PreApplicationPage', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			info_filed : '#person textfield',
			add_text_btn : '#add_text'
		},
		control : {
			info_filed : {
				change : 'info_filed_fun'
			},
			add_text_btn: {
				//blur : 'add_text_fun'
			}
		}
	},
	info_filed_fun : function(obj) {
		person_model.set(obj.getName(),obj.getValue())
	},
	add_text_fun:function(obj){
	
		if(obj.getValue() ==''){
			Ext.ComponentQuery.query('#address_id')[0].setValue(null)
		}
		if(obj.getValue()!=''){
		
		//check address
		Ext.data.JsonP.request({
			callbackKey : 'callback',
			url : global_url  + '/Sencha/PreApplication/Submit',
			timeout:out_time,
			params : {
				address : obj.getValue()
			},
			success : function(result){	
				if( false == result[0]){
					alert('The address is wrong !');
					//Ext.ComponentQuery.query('#address_id')[0].setValue(null)
				} else {
					Ext.ComponentQuery.query('#address_id')[0].setValue(result[0])
				}
			},
			failure : function(e){
							Ext.getCmp('load').setHidden(true);	
							
							if(e == 'timeout'){
									alert(net_wrong)
							} else {
								alert(server_wrong)
							}
					}
			
		})}
		
	}

});