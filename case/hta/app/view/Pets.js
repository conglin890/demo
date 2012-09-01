Ext.define('HowToApply.view.Pets', {
			extend : 'Ext.Panel'
		});

var Pets = {
	xtype : 'formpanel',
	id:'pets_form',
	scrollable : false,
	//padding : '10 10 10 10',
	style:'padding-top:10px;',
	items : [{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			//argin : '10 0 0 0',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '1',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
							labelWidth:70,
							width:200,
							name:'pets[0].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
										labelWidth:70,
										width:200,
										name:'pets[0].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[0].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '2',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
								labelWidth:70,
							width:200,
							name:'pets[1].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
											labelWidth:70,
							width:200,
										name:'pets[1].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[1].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '3',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
								labelWidth:70,
							width:200,
							name:'pets[2].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
											labelWidth:70,
							width:200,
										name:'pets[2].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[2].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '4',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
								labelWidth:70,
							width:200,
							name:'pets[3].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
											labelWidth:70,
							width:200,
										name:'pets[3].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[3].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '5',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
								labelWidth:70,
							width:200,
							name:'pets[4].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
											labelWidth:70,
							width:200,
										name:'pets[4].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[4].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '6',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
								labelWidth:70,
							width:200,
							name:'pets[5].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
											labelWidth:70,
							width:200,
										name:'pets[5].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[5].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '7',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
							labelWidth:70,
							width:200,
							name:'pets[6].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
										labelWidth:70,
							width:200,
										name:'pets[6].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[6].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '8',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
							labelWidth:70,
							width:200,
							name:'pets[7].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
										labelWidth:70,
							width:200,
										name:'pets[7].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[7].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '9',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
							labelWidth:70,
							width:200,
							name:'pets[8].Type',
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
										labelWidth:70,
							width:200,
										name:'pets[8].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[8].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
	},{
		xtype : 'panel',
		style : 'margin-top:10px;',
		cls : 'top_box',
		items : [{
			xtype : 'panel',
			margin : '10 10 0 10',
			layout : 'hbox',
			cls : 'pet_panel',
			items : [{
				xtype : 'label',
				html : '10',
				style : 'padding-top:40px; margin:0 10px; font-size:16px; font-weight:bold;'
			}, {
				xtype : 'panel',
				items : [{
							xtype : 'selectfield',
							label : 'Class',
							name:'pets[9].Type',
							labelWidth:70,
							width:200,
							options : [{
										text : 'Dog',
										value : 'Dog'
									}, {
										text : 'Cat',
										value : 'Cat'
									}, {
										text : 'Other',
										value : 'Other'
									}]
						}, {
							xtype : 'panel',
							style : 'margin-top:10px;',
							layout : 'hbox',
							items : [{
										xtype : 'selectfield',
										label : 'Weight',
										labelWidth:70,
							width:200,
										name:'pets[9].DogWeight',
										options : [{
													text : '0-5Kg',
													value : '0-5Kg'
												}, {
													text : '5-10Kg',
													value : '5-10Kg'
												}, {
													text : '10-15Kg',
													value : '10-15Kg'
												}, {
													text : '15+Kg',
													value : '15+Kg'
												},]
									}]
						}]
			}]
		}, {
			xtype : 'panel',
			margin : '10 10 0 10',
			items : [{
						xtype : 'label',
						html : 'Specify Type'
					}, {
						xtype : 'textfield',
						cls : 'textfield',
						name:'pets[9].SpecifyType',
						marign : '10',
						style:'margin-top:10px;',
						height : 46
					}]

		}]
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
};