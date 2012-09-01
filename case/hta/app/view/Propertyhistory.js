Ext.define('HowToApply.view.Propertyhistory', {
			extend : 'Ext.Panel'
		});

var Propertyhistory = {
	xtype : 'panel',
	margin : '10 10 10 10',
	style : 'padding-top:20px;',
	items : [{
		xtype : 'label',
		html : '<div class="ph_top_box"><div class="ph_top_box_in"><p>1. CURRENT PROPERTY DETAILS </p><p>2. PREVIOUS PROPERTY DETAILS</p><p>3.UPLOAD LETTER FOR RENTAL HISTORY</p><p>4.TERMS OF AGREEMENT</p</div></div>'
	}, {
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
			margin:'10 0 10 0',

		handler : function() {

			mainPanel.push({
						title : 'Address Details',
						scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Addressdetails]
					});
	
		Ext.getCmp('addressdetails_panel').setRecord(addressdetails_model);
		}
	}]
};

