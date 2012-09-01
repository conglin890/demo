Ext.define('HowToApply.view.Selfemployeddetails2', {
			extend : 'Ext.Panel'
		});
		
var Selfemployeddetails2 = {
	xtype : 'panel',
	style : 'padding-top:10px;',
	items : [{
			xtype : 'formpanel',
			id:'selfemployeddetails2_panel',
			scrollable : false,
			cls : 'top_box',
		margin:'10 10 10 10',
		items : [{
					xtype : 'label',
					html : 'Length of Employment',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
				cls : 'textfield',
					height : 46,
					name : 'selfEmployed.employmentLength'
				}, {
					xtype : 'label',
					html : 'Work hours per week',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.workhoursperweek',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Net Income (After Tax) Weekly',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.netIncomeWeekly',
					cls : 'textfield',
					height : 4
				}, {
					xtype : 'label',
					html : 'Accountant\'s Phone Number',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.accountantPhoneNumber',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Accountant\'s Email Address',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'emailfield',
					name : 'selfEmployed.businessEmailAddress',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Accountant\'s Fax Number',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'selfEmployed.accountantFaxNumber',
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
						title : 'Upload Proof of Employment',
								scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Uploadproofofemployment]
					})

			
			
			


		}
	}]
};