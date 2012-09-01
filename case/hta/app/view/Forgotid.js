Ext.define('HowToApply.view.Forgotid', {
	extend: 'Ext.Panel'
});

var Forgotid = {
	xtype: 'panel',
	items: [pre_logoImage,
	{
		xtype: 'formpanel',
		id: 'login_panel',
		scrollable: false,
		margin: '10 10 10 10',
		cls: 'top_box',

		items: [{
			xtype: 'label',
			html: 'Mobile',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'textfield',
			cls: 'textfield',
			height: 46,
			name: 'username'
		}, {
			xtype: 'label',
			html: 'Verification Code',
			style: 'font-size:16px; color:#646464; margin:10px auto;'
		}, {
			xtype: 'passwordfield',
			name: 'password',
			cls: 'textfield',
			height: 46
		}]
	}, {
		xtype: 'button',
		text: 'Login',
		cls: "bigNext",
		ui: 'action',
		margin: '10 10 10 10',
		handler: function() {
			mainPanel.push({
				title: 'House List',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: Houselist
			})


		}
	}]
};