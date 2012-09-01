Ext.define('HowToApply.view.Unemployeddetails', {
			extend : 'Ext.Panel'
		});

var Unemployeddetails = {
	xtype : 'panel',
	style:'padding-top:10px;',
	items : [{
		xtype : 'formpanel',
			scrollable : false,
			id:'unemployeddetails_panel',
		cls : 'top_box',
		margin : '10 10 10 10',
		items : [{
			xtype : 'label',
			html : '<div class="ud_text">If you are receiving income support, please attach all documents. Please provide a brief description on how you intend to meet the rental payments requirements:</div>'
		}, {
			xtype : 'textareafield',
			maxRows : 4,
			cls : 'textfield',
			style:'margin-top:10px;',
			height : 190,
			name : 'unemployed.description'
		}, {
			xtype : 'button',
			text : 'NEXT',
					cls : "bigNext",
					margin:'10 0 0 0',
		ui : 'action',
			handler : function() {

							mainPanel.push({
							title : 'References',
							scrollable : {
								direction : 'vertical',
								directionLock : true
							},
							items : [References]
						})
				
							

				
				


			}
		}]
	}]
};