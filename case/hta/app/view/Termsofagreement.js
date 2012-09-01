Ext.define('HowToApply.view.Termsofagreement', {
			extend : 'Ext.Panel'
		});

var Termsofagreement = {
	xtype : 'panel',
	style : 'margin:10px auto;',
	items : [{
		xtype : 'label',
		margin : '10 10 10 10',
		html : '<div class="toa_title">TERMS OF AGREEMENT</div><div class="toa_info">www.howtoapply.com.au (howtoapply) is a privately owned tenancy application system residing in Australia. From this tenancy application, your personal information is to be assessed by the real estate agency that is advertising this property, in order to process your application and to make an informative decision. The information provided by you in this application may be used to conduct background checks on all tenancy databases, gather information from letting/real estate agents on past property history, receive employment information from past employers and for enquiries to references produced. The owner of this property may also receive relevant information relating to the application with regards to its processing. <br />In relation to information on deposits and bonds for this property, you may directly obtain details from the real estate agency that is advertising this property. Our company may also use these details in the application to inform you of relevant information pertaining to our systems. Your personal information can be accessed at your disposal by logging into your account on our website. You can also contact your real estate agent for any further information concerning your application and its processing. <br />Howtoapply will not be held liable for any matters such as loss, damage, delay or failure in relation to utility services/utility connections or utility providers. Real estate agents via howtoapply may decline or reject your application if it is not suitable, and we are not legally obliged to provide a reason. In agreeing to these terms, you declare that all information submitted is true and correct, and is not false or misleading. If you would like to proceed with your tenancy application, please agree to these terms. Thank you.</div>'
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		items : [{
					xtype : 'button',
					text : 'AGREE',
					cls : "bigNext",
					ui: 'confirm',
					width : '45%',
					margin : '10 10 10 10',

					handler : function() {

						mainPanel.push({
									title : 'Rental History',
									scrollable : {
										direction : 'vertical',
										directionLock : true
									},
									items : [Rentalhistory]
								});
					}
				}, {
					xtype : 'button',
					text : 'DON\'T AGREE',
					cls : "bigNext",
					ui : 'decline',
					width : '45%',
					margin : '10 10%',

					handler : function() {
						mainPanel.pop(100);
					}
				}]
	}]
};