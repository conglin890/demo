Ext.define('HowToApply.view.Employmentinformation', {
			extend : 'Ext.Panel'
		});

var Employmentinformation = {
	xtype : 'panel',
	
	items : [{
		xtype : 'label',
		margin:'10 10 10 10',
		html : '<div class="ei_title"><p class="ei_title_line1">At present you are</p><p class="ei_title_line2">This section covers the information needed in order to show financial stability.</p></div>'
	}, {
		xtype : 'panel',
		margin:'10 10 10 10',
		
		style : 'margin:10px auto; background:#eaeaea; border:1px solid #cdcdcd; padding:10px;',
		items : [{
			xtyle : 'panel',

			style : 'background:#ffffff',
			items : [{
				xtype : 'button',
				text : 'CURRENTLY EMPLOYED',
				labelCls:'tl',
				height : 115,
				style : 'background-image:none; background:url(images/list_bg.png) no-repeat 95% 45px   #ffffff; border:0; border-bottom:1px solid #e9e9e9; color:#7f7f7f; border-radius:0; text-align: left;',
				handler : function() {
					mainPanel.push({
						title : 'Currently Employed Details',
								scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Currentlyemployed]
					});
					Ext.getCmp('currentlyemployed_panel').setRecord(currentlyemployed_model)
				}
			}, {
				xtype : 'button',
				text : 'SELF EMPLOYED ',
				labelCls:'tl',
				height : 93,
				style : 'background-image:none; background:url(images/list_bg.png) no-repeat 95% 40px   #ffffff; border:0; border-bottom:1px solid #e9e9e9; color:#7f7f7f; border-radius:0; text-align: left;',
				handler : function() {
					mainPanel.push({
						title : 'Self Employed Details',
								scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Selfemployeddetails]
					});
					
					Ext.getCmp('selfemployeddetails_panel').setRecord(selfemployeddetails_model)
				}
			}, {
				xtype : 'button',
				text : 'STUDENT',
				labelCls:'tl',
				height : 93,
				style : 'background-image:none; background:url(images/list_bg.png) no-repeat 95% 40px   #ffffff; border:0; border-bottom:1px solid #e9e9e9; color:#7f7f7f; border-radius:0; text-align: left;',
				handler : function() {
						mainPanel.push({
						title : 'Student Details',
								scrollable : {
								direction : 'vertical',
								directionLock : true
							},
						items : [Studentdetails]
					});
					
					Ext.getCmp('student_panel').setRecord(studentdetails_model)
				}
			}, {
				xtype : 'button',
				text : 'UNEMPLOYED',
				labelCls:'tl',
				height : 93,
				style : 'background-image:none; background:url(images/list_bg.png) no-repeat 95% 40px   #ffffff; border:0; border-bottom:1px solid #e9e9e9; color:#7f7f7f; border-radius:0; text-align: left;',
				handler : function() {
						mainPanel.push({
						title : 'Unemployed Details',
								scrollable : {
								direction : 'vertical',
										scrollable : {
								direction : 'vertical',
								directionLock : true
							},
								directionLock : true
							},
						items : [Unemployeddetails]
					});
					
					Ext.getCmp('unemployeddetails_panel').setRecord(unemployeddetails_model)
				}
			}]
		}]

	}]
}