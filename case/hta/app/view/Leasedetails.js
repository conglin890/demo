Ext.define('HowToApply.view.Leasedetails', {
			extend : 'Ext.Panel'
		});

var Leasedetails = {

	padding:'10 10 10 10',
	items : [{
				xtype : 'formpanel',
				cls : 'top_box',
				id:'lesase_panel',
				scrollable : false,
	
				items : [{
							xtype : 'label',
							html : 'Avaliable Date / Start Date',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'datepickerfield',
							cls : 'textfield',
							height : 46,
							dateFormat :'Y-m-d',
							name : 'startDate'
						}, {
							xtype : 'label',
							html : 'Length of lease',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'leaseLength',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Rent $ Per Week',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'rentPerWeek',
							cls : 'textfield',
							height : 46
						}]
			}, {
				xtype : 'panel',
				cls : 'top_box',
				maring : '10 10 10 10',
				items : [{
							xtype : 'label',
							
							html : '<p class="pre_pro_text">Number of Children:</p>'
						}, {
							xtype : 'panel',
							layout : {
								type : 'hbox',
								pack : 'center',
								align : 'center'
							},
							id : 'child',
							items : [{
								xtype : 'button',
								id : 'c1',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'child_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									child_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'c2',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								ui : 'pro_off',
								iconCls : 'child_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									child_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'c3',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'child_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									child_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'c4',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'child_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									child_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'c5',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'child_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									child_select_pro(this);
								}
							}]
						}, {
							xtype : 'fieldset',

							items : [{
										xtype : 'selectfield',
										id : 'child_num',
										options : [{text: 'More Than Five ?',  value: null}, {
													text : '6',
													value : '6'
												}, {
													text : '7',
													value : '7'
												}, {
													text : '8',
													value : '8'
												}, {
													text : '9',
													value : '9'
												}, {
													text : '10',
													value : '10'
												}]
									}]
						},{
							xtype : 'label',
					
							html : '<p class="pre_pro_text">Number of Pets:</p>'
						},{
							xtype : 'panel',
							layout : {
								type : 'hbox',
								pack : 'center',
								align : 'center'
							},
							scrollable:false,
							id : 'pet',
							items : [{
								xtype : 'button',
								id : 'p1',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'pet_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									pet_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'p2',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								ui : 'pro_off',
								iconCls : 'pet_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									pet_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'p3',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'pet_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									pet_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'p4',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'pet_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									pet_select_pro(this);
								}
							}, {
								xtype : 'button',
								id : 'p5',
								width : 41,
								height : 46,
								cls : 'pro_btn',
								iconCls : 'pet_off',
								style : 'background-image:none; background-color:#ffffff; padding:0; border:0;',
								handler : function() {
									pet_select_pro(this);
								}
							}]
						}, {
							xtype : 'fieldset',

							items : [{
										xtype : 'selectfield',
										id : 'pet_num',
										options : [{text: 'More Than Five ?',  value: null}, {
													text : '6',
													value : '6'
												}, {
													text : '7',
													value : '7'
												}, {
													text : '8',
													value : '8'
												}, {
													text : '9',
													value : '9'
												}, {
													text : '10',
													value : '10'
												}]
									}]
						}]
			}, {
				xtype : 'button',
				text : 'NEXT',
				cls : "bigNext",
				ui : 'action',

				handler : function() {

							mainPanel.push({
								title : 'Property History',
								scrollable : {
									direction : 'vertical',
									directionLock : true
								},
								items : [Propertyhistory]
							})
				
				}
			}]
};