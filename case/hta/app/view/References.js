Ext.define('HowToApply.view.References', {
			extend : 'Ext.Panel'
		});

var References = {
	xtype : 'formpanel',
	id:'references_panel',
	scrollable : false,
	style : 'padding-top:10px;',
	items : [{
		xtype : 'panel',
		margin : '10 10 10 10',
		style : 'background:#ffffff; border:1px solid #e4e4e4; margin:10px auto; padding-bottom: 10px;',
		items : [{
			xtype : 'label',
			html : '<p style="height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px;">Reference 1:</p>'
		}, {
			xtype : 'label',
			html : 'First Name',
			style : 'font-size:16px; color:#646464; margin:10px 10px; '
		}, {
			xtype : 'textfield',
			cls : 'textfield',
			margin : '0 10 10 10',
			height : 46,
			name : 'referenceFirst.firstName'
		}, {
			xtype : 'label',
			html : 'Last Name',

			style : 'font-size:16px; color:#646464; margin:10px 10px;'
		}, {
			xtype : 'textfield',
			cls : 'textfield',
			margin : '0 10 10 10',
			height : 46,
			name : 'referenceFirst.lastName'
		}, {
			xtype : 'label',
			html : 'Occupation',
			style : 'font-size:16px; color:#646464; margin:10px 10px;'
		}, {
			xtype : 'textfield',
			cls : 'textfield',
			margin : '0 10 10 10',
			height : 46,
			name : 'referenceFirst.occupation'
			,
		}, {
			xtype : 'label',

			html : 'Phone',
			style : 'font-size:16px; color:#646464; margin:10px 10px;'
		}, {
			xtype : 'textfield',
			cls : 'textfield',
			margin : '0 10 10 10',
			height : 46,
			name : 'referenceFirst.phone'
		}, {
			xtype : 'label',
			html : 'Email',

			style : 'font-size:16px; color:#646464; margin:10px 10px;'
		}, {
			xtype : 'textfield',
			cls : 'textfield',
			margin : '0 10 10 10',
			height : 46,
			name : 'referenceFirst.email'
		}, {
			xtype : 'label',
			width : '90%',
			html : '<p style=" color:#2fc7ff; font-size:16px; margin:10px;">Please be advised that these references/referees must not be related to you as the applicant.</p>'
		}]
	}, {
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
						html : 'UPLOAD REFERENCE'
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
								upload_view['refr1_file'] = false;
								Ext.getCmp('refer_html').setHtml('<div class="upload_info" ></div>');

							} else {
								this.setCls('switch_off');
								upload_view['refr1_file'] = true;
								Ext.getCmp('refer_html').setHtml('<div class="upload_info" ></div>');
							}
						}
					}]
		}, {
			xtype : 'label',
			id : 'refer_html',
			html : '<div class="upload_info"  ></div>'
		}]
	}, {
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
		margin : '10 10 10 10',
		handler : function() {
				mainPanel.push({
						title : 'References',
						scrollable : {
							direction : 'vertical',
							directionLock : true
						},
						items : [References2]
					})
		}
	}]
};