Ext.define('HowToApply.view.PreApplicationPage2', {
	extend: 'Ext.Panel'
});
var PreApplicationPage2 = {
	xtype: 'formpanel',
	id: 'person',
	scrollable: false,
	padding: '10 10 10 10',
	items: [{
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A1',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[0].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[0].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[0].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A2',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[1].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[1].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[1].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A3',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[2].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[2].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[2].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A4',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[3].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[3].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[3].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A5',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[4].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[4].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[4].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A6',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[5].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[5].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[5].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A7',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[6].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[6].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[6].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A8',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[7].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[7].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[7].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A9',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[8].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[8].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[8].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'panel',
		margin: '10 10 10 10',
		cls: 'top_box',
		items: [{
			xtype: 'label',
			height: 40,
			html: '<img style="vertical-align: middle; margin-right:10px;" src="images/pro_black.png" />A10',
			style: 'color:#0b0b0b; font-size:26px; line-height:40px;'
		}, {
			xtype: 'label',
			html: 'First Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		},

		{
			xtype: 'textfield',
			cls: 'textfield',
			name: 'applicants[9].FirstName',
			height: 46
		}, {
			xtype: 'label',
			html: 'Last Name',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			name: 'applicants[9].LastName',
			height: 46,
			cls: 'textfield'
		}, {
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'numberfield',
			name: 'applicants[9].Phone',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'button',
		text: 'NEXT',
		margin: '10 10 10 10',
		cls: "bigNext",
		ui: 'action',
		handler: function() {
			mainPanel.push({
				title: 'Login',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [Forgotid]
			})

		}
	}]
}