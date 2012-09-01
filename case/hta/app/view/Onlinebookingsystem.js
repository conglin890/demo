Ext.define('HowToApply.view.Onlinebookingsystem', {
			extend : 'Ext.Panel'
		});

var Onlinebookingsystem = {
	xtype : 'panel',
	items : [pre_logoImage, {
		xtype : 'panel',
		scrollable : false,
		items : [{
			xtype : 'label',
			margin : '10px 10px',
			html : '<div class="obs_clock"><div class="obs_clock_first"> <img src="images/clock.png" style="float:left; margin-right:10px;" />Please select a day and time to book an inspection for this property. Please note that the days and times shown are the only ones available for this property. If it is not shown or you cannot click on it, then an inspection cannot be arranged.</div><div>You must book an inspection online to receive SMS and/or email notifications. You will not receive any updates otherwise.Thank You.</div></div>'
		}, {
			xtype : 'panel',
			cls : 'top_box',
			margin : '10 10 10 10',
			items : [{
				xtype : 'label',
				html : 'Inspection Date',
				style : 'font-size:16px; color:#1694e3; margin:10px auto; font-size:16px;'
			}, {
				xtype : 'fieldset',
				id:'InspectionDate',
				name:'InspectionDate',
			
				height : 46,
				items : [{
							xtype : 'selectfield',
							style : 'color:#959595;'
						}]
			}, {
				xtype : 'label',
				html : 'Inspection Time',
				
				style : 'font-size:16px; color:#646464; margin:10px auto;'
			}, {
				xtype : 'fieldset',
				name:'InspectionTime',
				id:'InspectionTime',
				height : 46,
				items : [{
							xtype : 'selectfield'
						}]
			}, {
				xtype : 'label',
				html : 'Tenant Details',
				style : 'font-size:16px; color:#1694e3;  margin:10px auto;'
			}, {
				xtype : 'label',
				html : 'First Name',
				style : 'font-size:16px; color:#646464; margin:10px auto;'
			}, {
				xtype : 'textfield',
				name : 'tenant_FirstName',
				cls : 'textfield',
				height : 46
			}, {
				xtype : 'label',
				html : 'Last Name',
				style : 'font-size:16px; color:#646464; margin:10px auto;'
			}, {
				xtype : 'textfield',
				name : 'tenant_LastName',
				cls : 'textfield',
				height : 46
			}, {
				xtype : 'label',
				html : 'Mobile number',
				style : 'font-size:16px; color:#646464; margin:10px auto;'
			}, {
				xtype : 'textfield',
				name : 'tenant_Phone',
				cls : 'textfield',
				height : 46
			}, {
				xtype : 'label',
				html : 'Email',
				style : 'font-size:16px; color:#646464; margin:10px auto;'
			}, {
				xtype : 'textfield',
				name : 'tenant_Email',
				cls : 'textfield',
				height : 46
			}]
		}, {
			xtype : 'button',
			text : 'Book Inspection',

			cls : "bigNext",
			ui : 'action',
			id:'BookInspection_btn2',
			margin : '10 10 10 10'
		}]
	}]
}