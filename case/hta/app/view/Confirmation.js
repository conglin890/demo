Ext.define('HowToApply.view.Confirmation', {
			extend : 'Ext.Panel'
		});

var Confirmation = {
	xtype : 'panel',
	items : [pre_logoImage, {
		xtype : 'label',
		margin : '10 10 10 10',
		html : '<p class="pre_pro_text">Property address </p><p class="pre_north_text">Northern Brisbane, QLD</p>'
	}, {
		xtype : 'label',
		cls : 'top_box',
		margin : '10 10 10 10',
		html : '<p class="confirmation_text">YOU MUST CHOOSE ONE OF THE OPTIONS BELOW BEFORE MOVING FORWARD WITH HOWTOAPPLY:</p><p class="confirmation_text2">- IF YOU OR ONE OF YOUR GROUP MEMBERS HAVE NOT INSPECTED THE PROPERTY, PLEASE CLICK A.</p><p class="confirmation_text2">- IF YOU OR ONE OF YOUR GROUP MEMBERS HAVE INSPECTED THE PROPERTY , PLEASE CLICK B.</p>'
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox',
			align : 'center'
		},
		style : 'margin:10px auto',
		items : [{
					xtype : 'button',
					width : '45%',
					margin : '10 10 10 10',
					cls : "bigNext",
					ui : 'action',

					text : 'A',
					handler : function() {
//						mainPanel.push({
//									title : 'Online Booking System',
//									scrollable : {
//										direction : 'vertical',
//										directionLock : true
//									},
//									items : [Onlinebookingsystem]
//								})


							mainPanel.push({
									title : 'Tenancy Application',
									scrollable : {
										direction : 'vertical',
										directionLock : true
									},
									items : [Tenancyapplicationfront]
								})
					}
				}, {
					xtype : 'button',
					width : '45%',
					margin : '10 10 10 10',
					cls : "bigNext",
					ui : 'action',

					text : 'B',
					handler : function() {
						mainPanel.push({
									title : 'Tenancy Application',
									scrollable : {
										direction : 'vertical',
										directionLock : true
									},
									items : [Tenancyapplicationfront]
								})
					}
				}]
	}]
}