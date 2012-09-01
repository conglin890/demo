Ext.define('HowToApply.view.PreApplicationPage', {
	extend: 'Ext.Panel'
});

var PreApplicationPage = [pre_logoImage,
{
	xtype: 'label',
	margin: '10 10 10 10',
	html: '<p class="pre_pro_text">Property address </p>'
}, {
	xtype: 'textfield',
	id: 'add_text',
	margin: '10 10 10 10',
	cls: 'textfield',
	value: ''
}, {
	xtype: 'hiddenfield',
	id: 'address_id',
	value: ''
}, {
	xtype: 'panel',
	margin: '10 10 10 10',
	cls: 'top_box',
	items: [{
		xtype: 'label',
		margin: '10 10 10 10',
		html: '<p class="pre_pro_text">Number of applicants:</p>'
	}, {
		xtype: 'panel',
		layout: {
			type: 'hbox',
			pack: 'center',
			align: 'center'
		},
		id: 'pap_pro',
		items: [{
			xtype: 'button',
			id: '1',
			width: 41,
			height: 46,
			cls: 'pro_btn',
			iconCls: 'pro_on',
			style: 'background-image:none; background-color:#ffffff; padding:0; border:0;',
			handler: function() {
				pap_select_pro(this);
			}
		}, {
			xtype: 'button',
			id: '2',
			width: 41,
			height: 46,
			cls: 'pro_btn',
			ui: 'pro_off',
			iconCls: 'pro_off',
			style: 'background-image:none; background-color:#ffffff; padding:0; border:0;',
			handler: function() {
				pap_select_pro(this);
			}
		}, {
			xtype: 'button',
			id: '3',
			width: 41,
			height: 46,
			cls: 'pro_btn',
			ui: 'pro_off',
			iconCls: 'pro_off',
			style: 'background-image:none; background-color:#ffffff; padding:0; border:0;',
			handler: function() {
				pap_select_pro(this);
			}
		}, {
			xtype: 'button',
			id: '4',
			width: 41,
			height: 46,
			cls: 'pro_btn',
			ui: 'pro_off',
			iconCls: 'pro_off',
			style: 'background-image:none; background-color:#ffffff; padding:0; border:0;',
			handler: function() {
				pap_select_pro(this);
			}
		}, {
			xtype: 'button',
			id: '5',
			width: 41,
			height: 46,
			cls: 'pro_btn',
			ui: 'pro_off',
			iconCls: 'pro_off',
			style: 'background-image:none; background-color:#ffffff; padding:0; border:0;',
			handler: function() {
				pap_select_pro(this);
			}
		}]
	}, {
		xtype: 'fieldset',

		items: [{
			xtype: 'selectfield',
			id: 'pro_num',
			options: [{
				text: 'More Than Five ?',
				value: null
			}, {
				text: '6',
				value: '6'
			}, {
				text: '7',
				value: '7'
			}, {
				text: '8',
				value: '8'
			}, {
				text: '9',
				value: '9'
			}, {
				text: '10',
				value: '10'
			}]
		}]
	}]
}, {
	xtype: 'button',
	id: 'pap_people_btn',
	margin: '10 10 10 10',
	cls: "bigNext",
	ui: 'action',
	text: 'NEXT',
	handler: function() {
		mainPanel.push({
			title: 'Pre Application',
			fullscreen: true,
			scrollable: {
				direction: 'vertical',
				directionLock: true
			},
			items: [PreApplicationPage2]
		});

	}
}]