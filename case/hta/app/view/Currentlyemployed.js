Ext.define('HowToApply.view.Currentlyemployed', {
	extend: 'Ext.Panel'
});

var Currentlyemployed = {
	xtype: 'panel',
	style: 'padding-top:10px;',
	items: [{
		xtype: 'formpanel',
		id: 'currentlyemployed_panel',
		scrollable: false,
		cls: 'top_box',
		margin: '10 10 10 10',
		items: [{
			xtype: 'label',
			html: 'Job Position/Title',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			height: 46,
			cls: 'textfield',
			name: 'currentlyEmployed.jobPosition'
		}, {
			xtype: 'label',
			html: 'Company Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'currentlyEmployed.companyName',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Company Address',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'currentlyEmployed.companyAddress',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Company Phone Number',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'currentlyEmployed.companyPhoneNumber',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Company Email Address',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'emailfield',
			name: 'currentlyEmployed.companyEmailAddress',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Company Fax Number',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'currentlyEmployed.companyFaxNumber',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Length of Employment',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'currentlyEmployed.employmentLength',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Work hours per week',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'currentlyEmployed.workhoursperweek',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Net Income (After Tax) Weekly',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'currentlyEmployed.netIncomeWeekly',
			cls: 'textfield',
			height: 46
		}, {
			xtype: 'label',
			html: 'Employment Status',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtyle: 'panel',
			items: [{
				xtype: 'radiofield',


				name: 'currentlyEmployed.employmentStatusValue',
				value: '0',
				label: 'Full Time',
				checked: true
			}, {
				xtype: 'radiofield',


				name: 'currentlyEmployed.employmentStatusValue',
				value: '1',
				label: ' Part Time'
			}, {
				xtype: 'radiofield',

				name: 'currentlyEmployed.employmentStatusValue',
				value: '2',
				label: 'Casual'
			}]
		}]
	}, {
		xtype: 'button',
		text: 'NEXT',
		cls: "bigNext",
		ui: 'action',
		margin: '10 10 10 10',

		handler: function() {
			mainPanel.push({
				title: 'Upload Proof of Income',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},

				items: [Uploadproofofincome]
			})
		}
	}]
};