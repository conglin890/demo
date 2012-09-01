Ext.define('HowToApply.view.StepOne', {
			extend : 'Ext.Panel'
		});

var StepOne = {
	xtype : 'panel',
	items : [{
		xtype : 'panel',
		width:600,
		html : '<p class="iv_step">STEP 1</p><p class="iv_info">BOOK INSPECTION ONLINE</p><p class="iv_link" >ibuyirent.com.au</p>',
		style : 'padding-top:10px; margin:0 auto;'
	}, {
		xtype : 'panel',
		width : 610,
		style : 'border:5px #eeeeee solid; margin:10px auto;',
		items : [{
					xtype : 'video',
					width : 600,
					height : 435
				}]
	}]
}