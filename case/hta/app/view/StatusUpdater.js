Ext.define('HowToApply.view.StatusUpdater', {
			extend : 'Ext.Panel'
		});

var StatusUpdater = {
	xtype : 'panel',
	items : [pre_logoImage, {
		xtype : 'panel',
		html : '<span class="statusupdater_text_span">SMS & EMAIL NOTIFICATION PROCESS</span> <br />Once you have submitted your application, you will <br /> be notified in real-time via SMS and/or email',
		margin:'10 10 10 10',
		style : '  color:#a8a8a8; font-weight:bold; letter-spacing: 1px; text-align:center;'

	}, {
		xtype : 'panel',
		margin:'10 10 10 10',
		html : '<ul class="sp_ul"><li class="sp_text">STATUS UPDATE 1 <br /> <span>Application Received</span></li> <li class="select_on">&nbsp;</li><li class="sp_text">STATUS UPDATE 2 <br /> <span>Application Processing</span></li> <li class="select_on">&nbsp;</li><li class="sp_text">STATUS UPDATE 3 <br /> <span>Application with Owner</span></li> <li class="select_on">&nbsp;</li><li class="sp_text">STATUS UPDATE 4 <br /> <span>Application Approved</span></li> <li class="select_on">&nbsp;</li></ul>',
		style : ' text-align:center; color:#a8a8a8; font-weight:bold; padding-top:20px; '

	}]
}