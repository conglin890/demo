Ext.define('HowToApply.view.Children', {
			extend : 'Ext.Panel'
		});

var Children = {
	xtype : 'formpanel',
	id : 'children_form',
	scrollable : false,
	style : 'padding-top:10px;',
	//padding:'10 10 10 10',
	items : [{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '1'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[0].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[0].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '2'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[1].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[1].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '3'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[2].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[2].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '4'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[3].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[3].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '5'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[4].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[4].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '6'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[5].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[5].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '7'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[6].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[6].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '8'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[7].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[7].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '9'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[8].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[8].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		//layout : 'hbox',
		//width:'80%',
		cls : 'top_box',
		//padding:'10 10 10 10',
		//margin : '10 10 -20 10',
		items : [
		
				{xtype:'panel',
					layout : 'hbox',items:[{
					xtype : 'img',
					src : 'images/child_on.png',
					width : 38,
					height : 38,
					style : 'margin-top:5px;'
				}, {
					xtype : 'label',
					style : 'padding-top:10px;  font-size:16px; font-weight:bold;',
					html : '10'
				}]},
					
					{
						xtype:'panel',
					layout : 'hbox',
					items:[{
					xtype : 'selectfield',
					label : 'Gender',
					labelWidth : 80,
					name : 'children[9].GenderValue',
					//style : 'margin-left:20px;',
					width : 180,
					options : [{
								text : 'Boy',
								value : '0'
							}, {
								text : 'Girl',
								value : '1'
							},]
				}, {
					xtype : 'label',
					style : 'padding-top:10px; margin:0 10px; font-size:16px; font-weight:bold;',
					html : 'Age'
				}, {
					xtype : 'numberfield',
					width : 70,
					name : 'children[9].Age',
					minValue : 1,
					maxValue : 20,
					cls : 'textfield'
					,

				}]
					}

					]

	},{
		xtype : 'panel',
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		items : [{
					xtype : 'button',
					text : 'Save',
					cls : "bigNext",
					ui: 'confirm',
					width : '45%',
					margin : '10 10 10 10',

					handler : function() {
						mainPanel.pop(1);
						
						
						
						

					}
				}, {
					xtype : 'button',
					text : 'Cancel',
					cls : "bigNext",
					ui : 'decline',
					width : '45%',
					margin : '10 15%',

					handler : function() {
						mainPanel.pop(1);
					}
				}]
	}]
}