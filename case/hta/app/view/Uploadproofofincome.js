Ext.define('HowToApply.view.Uploadproofofincome', {
			extend : 'Ext.Panel'
		});

var Uploadproofofincome = {
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
						type : 'hbox',
						align : 'middle'
					},
					items : [{
								xtype : 'label',
								style : 'color:#777777; font-size:14px;',
								html : 'UPLOAD PROOF OF INCOME'
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
										upload_view['upload_file_income'] = false;
										Ext.getCmp('upload_html1').setHtml('<div class="upload_info upload_info1" style="color:#1694e3;">If you are receiving income support, please attach all documents.</div>');
											
			
									} else {
										this.setCls('switch_off');
										upload_view['upload_file_income'] = true;
										Ext.getCmp('upload_html1').setHtml('<div class="upload_info upload_info1" style="color:#1694e3;"></div>');
									}
								}
							}]
				}, {
					xtype : 'label',
					id:'upload_html1',
					html : '<div class="upload_info upload_info1" style="color:#1694e3;"></div>'
				}]
	}, {
		xtype : 'button',
		text : 'NEXT',
				cls : "bigNext",
		ui : 'action',
		margin:'10 10 10 10',
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
};