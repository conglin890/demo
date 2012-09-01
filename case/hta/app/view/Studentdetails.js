Ext.define('HowToApply.view.Studentdetails', {
			extend : 'Ext.Panel'
		});

var Studentdetails = {
	xtype : 'panel',
	style : 'padding-top:10px;',
	items : [{
		xtype : 'formpanel',
		id:'student_panel',
			scrollable : false,
	cls : 'top_box',
		margin:'10 10 10 10',
		items : [{
					xtype : 'label',
					html : 'Name of Educational/Study Institution',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				},

				{
					xtype : 'textfield',
					cls : 'textfield',
					height : 46,
					name : 'student.institutionName'
				}, {
					xtype : 'label',
					html : 'Name of Course',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'student.courseName',
						cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					html : 'Length of Course (Years)',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, {
					xtype : 'textfield',
					name : 'student.courseLength',
					cls : 'textfield',
					height : 46
				}, {
					xtype : 'label',
					//html : 'Do you receive Govement Assistance:',
					style : 'font-size:16px; color:#646464; margin:10px auto;'
				}, 
				
//				{
//					xtype : 'panel',
//					layout : 'hbox',
//					items : [{
//								xtype : 'radiofield',
//								width : '45%',
//								labelWidth : 50,
//								name : 'color',
//								value : 'true',
//								label : 'Yes',
//								checked : true
//							}, {
//								xtype : 'radiofield',
//									width : '45%',
//								labelWidth : 50,
//								style:'margin-left:10%',
//								name : 'color',
//								value : 'false',
//								label : 'No',
//						
//							}]
//				}
				
				
				]
	}, {
		xtype : 'button',
		text : 'NEXT',
		cls : "bigNext",
		ui : 'action',
		margin:'10 10 10 10',

		handler : function() {		mainPanel.push({
				title : 'Government Assistance',
						scrollable : {
						direction : 'vertical',
						directionLock : true
					},
				items : [Student3]
			});
			



		}
	}]
};