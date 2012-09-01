Ext.define('HowToApply.view.Addressdetails', {
			extend : 'Ext.Panel'
		});

var Addressdetails = {
	xtype : 'formpanel',
	style : 'padding-top:10px;',
	id:'addressdetails_form',
	scrollable : false,

	items : [{
		xtype : 'formpanel',
		margin : '10 10 10 10',
		cls : 'top_box',
		id:'addressdetails_panel',
		scrollable : false,
		items : [{
					xtype : 'label',
					html : 'Current Address',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				},

				{
					xtype : 'textfield',
					cls : 'textfield',
					height : 46,
					name : 'current.currentAddress'
				}, {
					xtype : 'label',
					html : 'Suburb',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'current.suburb',
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
								name:'current.cityOrState',
								options : [ {
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
					name : 'current.postcode',
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
								name:'current.country',
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
					name : 'current.overseasAddress',
					cls : 'textfield',
					height : 46
					,
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
						items : [Addressdetails2]
					});
					
		Ext.getCmp('addressdetails2_panel').setRecord(addressdetails2_model);
		}
	}]
};