Ext.define('HowToApply.view.Personaldetails', {
	extend: 'Ext.Panel'
});

var Personaldetails = {
	xtype: 'panel',
	id: 'person_panel',
	style: 'padding-top:10px;',
	items: [{
		xtype: 'formpanel',
		id: 'personaldetails_form',
		scrollable: false,
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			height: 46,
			name: 'firstName'
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'lastName',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Email',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'emailfield',
			name: 'email',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Mobile/Phone Number',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'phone',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Date of Birth',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'datepickerfield',
			name: 'birthday',
			yearFrom: 1900,
			// vaelue:{year: 1989, day: 1, month: 5},
			cls: 'textfield',

			// dateFormat :'Y-m-d',
			height: 46
		}, {
			xtype: 'label',
			html: 'Dirver Licence or Passport Number',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'driverLicenceOrPassportNumber',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Current Address',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'currentAddress',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'button',
		text: 'NEXT',
		cls: "bigNext",
		ui: 'action',
		margin: '10 10 10 10',

		handler: function() {
			mainPanel.push({
				title: 'Next of Kin Details',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [Kin]
			});



		}
	}]
};