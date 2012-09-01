Ext.define('HowToApply.view.Previouspropertydetails', {
			extend : 'Ext.Panel'
		});

//var Previouspropertydetails2 = {
//	xtype : 'panel',
//	style : 'padding-top:10px;',
//	items : [{
//		xtype : 'label',
//		margin : '10 10 10 10',
//		html : '<div class="prd_box_top"><div class="title"><p>PREVIOUS PROPERTY DETAILS (IF APPLICABLE)</p><span class="switch_off" style="margin-top:5px;"></span></div><div class="text">If you have stayed in a property for over 12 months, there is no need to fill in this previous property details section.</div></div>'
//	}, {
//		xtype : 'button',
//		text : 'NEXT',
//		cls : "bigNext",
//		ui : 'action',
//		margin : '10 10 10 10',
//		handler : function() {
//
//			mainPanel.push({
//						title : 'Previous Property Details',
//						scrollable : {
//							direction : 'vertical',
//							directionLock : true
//						},
//						items : [Previouspropertydetails2]
//					})
//		}
//	}]
//}

var Previouspropertydetails = {
	xtype : 'panel',
	style : 'padding-top:10px;',
	items : [{
		xtype : 'panel',
		margin : '10 10 10 10',

		style : 'background:#f2f2f2; border-radius:10px; border:1px solid #f2f2f;',
		items : [{
			xtype : 'panel',
			padding : '10 10 10 10',
			style : 'background:#dcdcdc; text-align:center; ',
			items : [{
						xtype : 'label',
						style : 'color:#777777; font-size:18px;',
						html : 'PREVIOUS PROPERTY DETAILS (IF APPLICABLE)'
					}, {
						xtype : 'button',
						id:'showp',
						width : 100,
						height : 35,
						text : '',
						cls : 'switch_off',
						handler : function() {
							if ('switch_off' == this.getCls()) {
								this.setCls('switch_on');
								Ext.getCmp('ppd_html').setHtml('<div class="ppd_text">Since you have been at your current address for less than 12 month, please fill out your previous address details (last rental property, own home or family home for example.).Thank you</div');

							} else {
								this.setCls('switch_off');
								Ext.getCmp('ppd_html').setHtml('<div class="ppd_text">If you have stayed in a property for over 12 months, there is no need to fill in this previous property details section.</div');
							}
						}
					}]
		}, {
			xtype : 'label',
			id : 'ppd_html',
			html : '<div class="ppd_text">If you have stayed in a property for over 12 months, there is no need to fill in this previous property details section.</div>'
		}]
	}, {
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
		margin : '10 10 10 10',
		handler : function() {
		
		if(	Ext.getCmp('showp').getCls()=='switch_off'){
			
				mainPanel.push({
					title : 'Terms Of Agreement',
					 scrollable : {
					direction : 'vertical',
					directionLock : true
					},
					items : [Termsofagreement]
					});
			
			
			
		}	else {
			
			mainPanel.push({
						title : 'Previous Property Details',
						scrollable : {
							direction : 'vertical',
							directionLock : true
						},
						items : [Previouspropertydetails2]
					})
					
					
					Ext.getCmp('previous_form').setRecord(previouspropertydetails2_model)
			
		}
			
			
			
			
			


		}
	}]
}