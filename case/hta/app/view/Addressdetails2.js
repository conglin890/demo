Ext.define('HowToApply.view.Addressdetails2', {
			extend : 'Ext.Panel'
		});

var Addressdetails2 = {
	xtype : 'panel',
	style : 'padding-top:10px;',
	items : [{
				xtype : 'formpanel',
				margin : '10 10 10 10',
				scrollable : false,
				cls : 'top_box',
				id:'addressdetails2_panel',
				items : [{
							xtype : 'label',
							html : 'Name of Agent or Owner',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						},

						{
							xtype : 'textfield',
							cls : 'textfield',
							height : 46,
							name : 'current.agentOrOwnerName'
						}, {
							xtype : 'label',
							html : 'Agent/Owner Phone',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'current.agentOrOwnerPhone',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Agent/Owner Email',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'emailfield',
							name : 'current.agentOrOwnerEmail',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Agent/Owner Fax',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'current.agentOrOwnerFax',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Rent $ Per Week',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'current.rentPerWeek',
							cls : 'textfield',
							height : 46
						}, {
							xtype : 'label',
							html : 'Length of Stay',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'panel',
							height : 46,
							layout : {
								type : 'hbox',
								align : 'middle'
							},
							items : [{
										xtype : 'fieldset',
										width : '40%',
										height : 46,
										style : 'margin-right:5px;',
										items : [{
													xtype : 'selectfield',
													name:'current.stayYears',
													options : [{
																text : '0',
																value : '0'
															}, {
																text : '1',
																value : '1'
															}, {
																text : '2',
																value : '2'
															}, {
																text : '3',
																value : '3'
															}, {
																text : '4',
																value : '4'
															}, {
																text : '5',
																value : '5'
															}, {
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
									}, {
										xtype : 'label',
										html : '/Y'
									}, {
										xtype : 'fieldset',
											width : '40%',
										height : 46,
										style : 'margin-right:5px; margin-left:10px;',
										items : [{
													xtype : 'selectfield',
													name:'current.stayMonths',
													options :  [{
																text : '0',
																value : '0'
															}, {
																text : '1',
																value : '1'
															}, {
																text : '2',
																value : '2'
															}, {
																text : '3',
																value : '3'
															}, {
																text : '4',
																value : '4'
															}, {
																text : '5',
																value : '5'
															}, {
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
															}, {
																text : '11',
																value : '11'
															}]
												}]
									}, {
										xtype : 'label',
										html : '/M'
									}]
						}, {
							xtype : 'label',
							html : 'Reason for leaving',
							style : 'font-size:16px; color:#646464; margin:10px auto;'
						}, {
							xtype : 'textfield',
							name : 'current.leavingReason',
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
						title : 'Previous Property Details',
						scrollable : {
							direction : 'vertical',
							directionLock : true
						},
						items : [Previouspropertydetails2]
					})
						
						
				
				}
			}]
};