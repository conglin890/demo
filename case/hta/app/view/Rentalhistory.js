Ext.define('HowToApply.view.Rentalhistory', {
			extend : 'Ext.Panel'
		});



var Rentalhistory = {
	xtype : 'panel',
	style : 'padding-top:10px;',
	items : [{
		xtype : 'panel',
		margin : '10 10 10 10',

		style : 'background:#f2f2f2; border-radius:10px; border:1px solid #f2f2f;',
		items : [{
					xtype : 'panel',
					padding : '10 10 10 10',
					style : 'background:#dcdcdc; ',
					layout : {
						type : 'hbox',
						align : 'middle'
					},
					items : [{
								xtype : 'label',
								style : 'color:#777777; font-size:14px;',
								html : 'UPLOAD 100 Points Of ID'
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
										upload_view['upload100_file'] = false;
										Ext.getCmp('upload_html').setHtml('<div class="upload_table"><p class="upload_table_title">Please attach 100 points in total & use at least 1 Compulsory ID (all 50 points each):</p><div><p class="upload_table_main_title">Compulsory ID - Driver’s licence, 18+ card or passport. Extra ID - Birth certificate, bank card, phone/electricity or gas bill, or car rego doc.</p>');
										
										
										
			
									} else {
										this.setCls('switch_off');
										upload_view['upload100_file'] = true;
										Ext.getCmp('upload_html').setHtml('<div class="upload_info">If you have a current ledger or reference from your agent/property manager, please attach. </div>');
									}
								}
							}]
				}, {
					xtype : 'label',
					id:'upload_html',
					html : '<div class="upload_info" >If you have a current ledger or reference from your agent/property manager, please attach.</div>'
				}]
	},{
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
		margin : '10 10 10 10',
		handler : function() {		
			mainPanel.push({
			title : 'Employment Information',
			scrollable : {
				direction : 'vertical',
				directionLock : true
			},
			items : [Employmentinformation]
		});}
	}]
}