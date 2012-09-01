Ext.define('HowToApply.view.Bookinspection', {
			extend : 'Ext.Panel'
		});

var Bookinspection = {
	xtype : 'panel',
	items : [{
				xtype : 'label',
				margin : '5 5 5 5',
				style : 'text-align: center; padding-top:20px;',
				html : '<img src="images/irent_logo.png" />'
			}, {
				xtype : 'label',
				style : 'margin-top:20px;',
				html : '<p class="bi_title">FIND YOUR PROPERTY ADDRESS</p><p class="bi_info">Collect from real estate website or agent  </p><p class="bi_title">BOOK INSPECTION</p><p class="bi_info"> Type address into search below</p>'
			}, {
				xtype : 'formpanel',
				id : 'Bookinspection_form',
				scrollable : false,
				margin : '5 5 5 5',
				padding : '5 5 5 5',
				items : [{
							xtype : 'textfield',
							id : 'Address',
							name : 'Address',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'button',
							id : 'Bookinspection_btn',
							text : 'NEXT',

							cls : "bigNext",
							ui : 'action',
							style : 'margin-top:10px;'
						}]
			}]
}