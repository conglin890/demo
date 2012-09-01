Ext.define('HowToApply.view.Uploadfile', {
			extend : 'Ext.Panel'
		});

var Uploadfile = {
	xtyle : 'panel',
	id : 'Uploadfile',
	items : [
//	{
//		xtype : 'panel',
//		width : '100%',
//		height : 105,
//		margin : '10 10 10 10',
//		layout : {
//			type : 'hbox',
//			align : 'middle'
//		},
//		items : [{
//					xtype : 'image',
//	
//					width : 84,
//					height : 68,
//					src : 'images/no_image.png'
//				}, {
//					xtype : 'label',
//					style : 'margin-left:10px;',
//					html : '<p>10 Oxford Street, Bulimba QLD </p><p>MON 16/05/12  10:00</p>'
//				}]
//	}, 
{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'upload100_file',
		hidden:upload_view['upload100_file'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'Upload 100 Points Of ID'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Compulsory ID:</p><p></p>'
					}]
		},

		{
			xtype : 'panel',
			width : '100%',
			height : 105,
			margin : '0 10 0 10',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',

						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Extra ID:</p><p></p>'
					}]
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,
			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Extra ID:</p><p></p>'
					}]
		}

		]
	},{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'upload_file_income',
		hidden:upload_view['upload_file_income'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'Upload Proof of Income'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Upload Proof of Income</p><p></p>'
					}]
		}

		]
	},
	{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'upload_file_employmen',
		hidden:upload_view['upload_file_employmen'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'Upload Proof of Employment'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Upload Proof of Employment</p><p></p>'
					}]
		}

		]
	},
	{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'student_file',
		hidden:upload_view['student_file'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'Upload Proof of Income(Students)'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Upload Proof of Income(Students)</p><p></p>'
					}]
		}

		]
	},
		{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'refr1_file',
		hidden:upload_view['refr1_file'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'References 1'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Upload References 1</p><p></p>'
					}]
		}

		]
	},
	{
		xtype : 'panel',
		margin : '0 10 10 10',
		style : 'border:1px solid #eeeeee',
		id : 'refr2_file',
		hidden:upload_view['refr2_file'],
		items : [{
			xtype : 'label',
			style : 'height:40px; background:#2fc7ff; color:#ffffff; line-height:40px; text-indent:20px; font-size:20px; text-align: center;',
			html : 'References 2'
		}, {
			xtype : 'panel',
			width : '100%',
			height : 105,

			style : 'background:#ffffff; padding-left:10px',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [{
						xtype : 'image',
						width : 84,
						height : 68,
						src : 'images/no_image.png'
					}, {
						xtype : 'label',
						style : 'margin-left:10px;',
						html : '<p>Upload References 2</p><p></p>'
					}]
		}

		]
	}
	

	]
}