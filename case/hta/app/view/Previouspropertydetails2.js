Ext.define('HowToApply.view.Previouspropertydetails2', {
			extend : 'Ext.Panel'
		});

var Previouspropertydetails2 = {
	xtype : 'panel',
   style:'padding-top:10px',
	items : [{
		xtype : 'formpanel',
		id:'previous_form',
		scrollable : false,
		cls : 'top_box',
		margin:'10 10 10 10',
		items : [{
					xtype : 'label',
					html : 'Current Address',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				},

				{
					xtype : 'textfield',
					cls : 'textfield',
					height : 46,
					name : 'previous.currentAddress'
				}, {
					xtype : 'label',
					html : 'Suburb',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'previous.suburb',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'CITY/STATE',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'fieldset',
					height : 46,
					items : [{
								xtype : 'selectfield',
								style : 'color:#959595;',
								name:'previous.cityOrState',
								options : [{
											text : '- QLD -',
											value : 'QLD'
										}, {
											text : '- NSW -',
											value : 'NSW'
										}, {
											text : '- VIC -',
											value : 'VIC'
										}, {
											text : '- SA -',
											value : 'SA'
										}, {
											text : '- WA -',
											value : 'WA'
										}, {
											text : '- TAS -',
											value : 'TAS'
										}, {
											text : '- NT -',
											value : 'NT'
										}]
							}]
				}, {
					xtype : 'label',
					html : 'POSTCODE',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'previous.postcode',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'COUNTRY',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'fieldset',
					height : 46,
					items : [{
								xtype : 'selectfield',
								name:'previous.country',
								options : [{
											text : '- Australia -',
											value : 'Australia'
										}]
							}]
				}, {
					xtype : 'label',
					html : 'Overseas Address? (Please type in entire address here if applicable)',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'previous.overseasAddress',
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
						title : 'Address details',
						scrollable : {
						direction : 'vertical',
						directionLock : true
					},
						items : [Addressdetails3]
					})
					
		Ext.getCmp('previous2_form').setRecord(addressdetails3_model)
		}
	}]
};
