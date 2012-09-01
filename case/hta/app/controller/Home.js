Ext.define('HowToApply.controller.Home', {
			extend : 'Ext.app.Controller',
			// init:function(){
			// alert(111)
			// }

			config : {
				refs : {
					pap_home_btn : '#pap_home_btn'
				},

				control : {
					pap_home_btn : {
						tap : 'pap_home_btn_fun'
					}
				}
			},

			pap_home_btn_fun : function() {
				mainPanel.push({
							title : 'Pre Application',
							scrollable : {
								direction : 'vertical',
								directionLock : true
							},
							items : PreApplicationPage
						})
						
						Ext.ComponentQuery.query('#loginbtn')[0].setHidden(true);	
						
				Ext.ComponentQuery.query('#add_text')[0].setValue(address);
				Ext.ComponentQuery.query('#address_id')[0].setValue(property_Id);

			}

		});