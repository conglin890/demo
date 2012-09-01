Ext.define('HowToApply.view.Tenancyapplicationform', {
	extend: 'Ext.Panel'
});

var Tenancyapplicationform = {
	xtype: 'panel',
	id: 'tenan_panel',
	items: [{
		xtype: 'label',
		margin: '10 10 10 10',
		style: 'font-size:14px; color:#898989; font-weight: bold;',
		html: 'All fields must be filled out otherwise you can’t go to the next page or save your form. Thank You.'
	}, {
		xtype: 'button',
		cls: 'green_down',
		disabled: false,
		disabledCls: 'gray_down',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">1) PERSONAL DETAILS</p>',
		handler: function() {


			mainPanel.push({
				title: 'Personal Details',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [Personaldetails]
			})



		}
	},

	{
		xtype: 'button',
		cls: 'green_down',
		disabled: false,
		disabledCls: 'gray_down',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">2) LEASE DETAILS</p>',
		handler: function() {
			mainPanel.push({
				title: 'Lease Details',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [Leasedetails]
			})

		}
	},

	{
		xtype: 'button',
		cls: 'green_down',
		disabled: false,
		disabledCls: 'gray_down',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">3) PROPERTY HISTORY</p>',
		handler: function() {
					mainPanel.push({
						title: 'Property History',
						scrollable: {
							direction: 'vertical',
							directionLock: true
						},
						items: [Propertyhistory]
					})

		}
	},

	{
		xtype: 'button',
		cls: 'green_down',
		disabled: false,
		disabledCls: 'gray_down',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">4) EMPLOYMENT INFORMATION</p>',
		handler: function() {
					mainPanel.push({
						title: 'Employment Information',
						scrollable: {
							direction: 'vertical',
							directionLock: true
						},
						items: [Employmentinformation]
					})

		}
	},

	{
		xtype: 'button',
		cls: 'green_down',
		disabled: false,
		disabledCls: 'gray_down',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">5) REFERENCES</p>',
		handler: function() {

					mainPanel.push({
						title: 'References',
						scrollable: {
							direction: 'vertical',
							directionLock: true
						},
						items: [References]
					})

		}
	},

	{
		xtype: 'button',
		cls: 'green_sign',
		disabled: true,
		disabledCls: 'gray_sign',
		style: 'border:0;  border-bottom: 1px solid #b1b3b8; height:40px; text-indent:10px; font-size:16px; border-radius:0;   ',
		html: '<p style="text-align:left; color:#646464;">6) FINALISE APPLICATION</p>',
		handler: function() {
			mainPanel.pop(100);
		}
	},

	{
		xtype: 'button',
		text: 'Start Applying',
		margin: '10 10 10 10',
		cls: "bigNext",
		ui: 'action',

		handler: function() {

			mainPanel.push({
				title: 'Personal Details',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [Personaldetails]
			});

			Ext.getCmp('personaldetails_form').setRecord(personaldetails_model);

			Ext.ComponentQuery.query('#personaldetails_form textfield[name="birthday"]')[0].getPicker().setYearFrom(1900)
			Ext.ComponentQuery.query('#personaldetails_form textfield[name="birthday"]')[0].getPicker().setHidden(true)
		}

	}]
}