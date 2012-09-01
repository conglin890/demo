Ext.define('HowToApply.view.Student4', {
			extend : 'Ext.Panel'
		});

var Student4 = {
	xtype : 'panel',
	style:'margin-top:10px;',
	items : [{
		xtype : 'panel',
		margin : '10 10 10 10',
		stype:'padding-top:10px;',
		style : 'background:#f2f2f2; border-radius:10px; border:1px solid #f2f2f;',
		items : [{
					xtype : 'panel',
					padding : '10 10 10 10',
					style : 'background:#dcdcdc; ',
					layout : {
						type : 'vbox',
						align : 'middle'
					},
					items : [{
								xtype : 'label',
								style : 'color:#777777; font-size:14px;',
								html : 'DO YOU RECEIVE ANY OTHER INCOME / ALLOWANCE?'
							}, {
								xtype : 'button',
								width : 100,
								height : 35,
								style : 'margin-left:5px;',
								text : '',
								cls : 'switch_off',
								handler : function() {
									if ('switch_off' == this.getCls()) {
										this.setCls('switch_on');				
										Ext.getCmp('student4_form').setHidden(false);
								
											
			
									} else {
										this.setCls('switch_off');
										Ext.getCmp('student4_form').setHidden(true);
										
					
									}
								}
							}]
				}, 
				{xtype : 'formpanel',
					padding:'10 10 10 10',
					scrollable : false,
					hidden:true,
					id:'student4_form',
					items:[{
					xtype : 'label',
					html : 'Tyep of payment',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				},

				{
					xtype : 'textfield',
					cls : 'textfield',
					height : 46,
					style:'background:#ffffff',
					name : 'student.paymentType'
				}, {
					xtype : 'label',
					html : 'Frequency of Payment',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'student.paymentFrequency',
					cls : 'textfield',
					height : 46,
					style:'background:#ffffff',
				}, {
					xtype : 'label',
					html : 'Amount of payment($)',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					style:'background:#ffffff',
					name : 'student.paymentAmount',
					cls : 'textfield',
					height : 46
				}]	}
				
			
				
				]
	},{
		xtype : 'button',
		text : 'NEXT',
				cls : "bigNext",
		ui : 'action',
		margin:'10 10 10 10',
		handler : function() {
			
			mainPanel.push({
		title : 'Upload Proof of Student',
				scrollable : {
				direction : 'vertical',
				directionLock : true
			},
		items : [Student2]
	});
			

			



		
		}
	}]
};