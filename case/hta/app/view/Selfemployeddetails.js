Ext.define('HowToApply.view.Selfemployeddetails', {
			extend : 'Ext.Panel'
		});
		
var Selfemployeddetails = {
	xtype : 'formpanel',
	style : 'padding-top:10px;',
	scrollable : false,
	id:'selfemployeddetails_panel',
	items : [{
		xtype : 'panel',
		cls : 'top_box',
		margin:'10 10 10 10',
		items : [{
					xtype : 'label',
					html : 'Business Name',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
						cls : 'textfield',
					height : 46,
					name : 'selfEmployed.businessName'
				}, {
					xtype : 'label',
					html : 'Business Type',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.businessType',
						cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Business Address',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.businessAddress',
						cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Business Phone Number',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'numberfield',
					name : 'selfEmployed.businessPhoneNumber',
						cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Business Email Address',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'emailfield',
					name : 'selfEmployed.businessEmailAddress',
						cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Business Fax Number',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'numberfield',
					name : 'selfEmployed.accountantFaxNumber',
					cls : 'textfield',
					height : 46
				},{
					xtype : 'label',
					html : 'ABN/ACN',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.aBNNumber',
					cls : 'textfield',
					height : 46
				}]
	}, {
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
		margin:'10 10 10 10',
	
		handler : function() {

	mainPanel.push({
						title : 'Self Employed Details',
								scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Selfemployeddetails2]
					});
					
		Ext.getCmp('selfemployeddetails2_panel').setRecord(selfemployeddetails2_model)
					
				
		}
	}]
};