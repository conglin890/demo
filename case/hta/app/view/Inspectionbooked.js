Ext.define('HowToApply.view.Inspectionbooked', {
			extend : 'Ext.Panel'
		});

var Inspectionbooked = {
	xtype : 'panel',
	style : 'margin:10px auto;',
	items : [{
		xtype : 'label',
		margin : '10 10 10 10',
		html : '<div class="ib_time">"Monday, January 30 9:30 AM"</div><div class="ib_time_text">Thank you for booking your inspection online. You will now receive an SMS and/or Email confirmation.</div><p class="ib_time_text">Please click APPLY NOW in order to begin the        application process for your property.</p>'
	}, {
		xtype : 'button',
		text : 'APPLY NOW',
		cls : "bigNext",
		ui : 'confirm',
		margin : '10 10 10 10',
		handler : function() {

			mainPanel.push({
						title : 'APPLY NOW',
						scrollable : {
							direction : 'vertical',
							directionLock : true
						},
						items : PreApplicationPage
					})
					
					
					Ext.ComponentQuery.query('#add_text')[0].setValue(address);
					Ext.ComponentQuery.query('#address_id')[0].setValue(property_Id);
		}
	}, {
		xtype : 'button',
		text : 'APPLY LATER',
		cls : "bigNext",
		ui : 'decline',
		margin : '10 10 10 10',
		handler : function() {

			mainPanel.pop(3);
		}
	}]
};