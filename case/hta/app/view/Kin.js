Ext.define('HowToApply.view.Kin', {
			extend : 'Ext.Panel'
		});

var Kin =  {
	xtype : 'panel',
	id:'person_panel',
	style : 'padding-top:10px;',
	items : [{
				xtype : 'formpanel',
				id:'kindetails_form',
				scrollable : false,
				margin : '10 10 10 10',
				cls : 'top_box',
				items : [{
							xtype : 'label',
							html : 'Name',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						},

						{
							xtype : 'textfield',
							cls : 'textfield',
							height : 46,
							name : 'kinDetailFullName'
						}, {
							xtype : 'label',
							html : 'Mobile/Phone Number',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'kinDetailContactPhone',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Address',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'kinDetailAddress',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Relationship',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'kinDetailRelationship',
							cls : 'textfield',
							height : 46
						}]
			}, {
				xtype : 'button',
				text : 'NEXT',
				cls : "bigNext",
				ui : 'action',
				margin:'10 10 10 10',

				handler : function() {
								mainPanel.push({
										title : 'Upload 100 Points Of ID',
										scrollable : {
										direction : 'vertical',
										directionLock : true
									},
										items : [Upload]
									});
					
					
					
					
					


				}
			}]
};