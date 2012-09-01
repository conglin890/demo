Ext.define('HowToApply.controller.Bookinspection', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			pap_home_btn: '#Bookinspection_btn'
		},
		control: {
			pap_home_btn: {
				tap: 'Bookinspection_btn_fun'
			}
		}
	},

	Bookinspection_btn_fun: function() {
		mainPanel.push({
			title: 'Online Booking System',
			scrollable: {
				direction: 'vertical',
				directionLock: true
			},
			items: [Onlinebookingsystem]
		});

	}

});