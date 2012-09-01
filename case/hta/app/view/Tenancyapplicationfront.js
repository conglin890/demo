Ext.define('HowToApply.view.Tenancyapplicationfront', {
			extend : 'Ext.Panel'
		});

var Tenancyapplicationfront = {
	xtype : 'panel',
	id : 'pro_cross',
	items : [pre_logoImage, {
		xtype : 'label',
		margin : '10 10 10 10',
		style : 'margin:40px auto 0 auto;',
		html : '<p class="pre_pro_text">Property address </p><p class="pre_north_text">Northern Brisbane, QLD</p>'
	}, {
		xtype : 'panel',
		cls : 'top_box',
		margin : '10 10 10 10',
		items : [{
			xtype : 'label',
			html : '<p class="tac_title"><img style="vertical-align: middle; margin-right:10px; margin-left:20px;" src="images/pro_black.png"> <span class="num">A1</span> <span class="name">Johm Smith</span></p><p class="tac_pross"><span class="tac_pross_text">Incomplete</span><span class="tac_pross_pross"></span></p>'
		}, {
			xtype : 'button',
			text : 'Open Application Form',
			width : 281,
			height : 51,
			style : 'background:url(images/green_btn.png) center center; margin-top:10px; float:right; color:#ffffff; border:0;',
			handler : function() {
				mainPanel.push({
							title : 'Tenancy Application Form',
							scrollable : {
								direction : 'vertical',
								directionLock : true
							},
							items : [Tenancyapplicationform]
						})
			}
		}]
	}]
};