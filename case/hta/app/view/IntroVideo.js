Ext.define('HowToApply.view.IntroVideo', {
			extend : 'Ext.NavigationView'
			,
		});

var IntroVideoFrom = {
	xtype : 'panel',
	width : 600,
	layout : {
		type : 'hbox',
		align : 'top'
	},
	style : 'border:1px solid #eeeeee; padding:20px; border-top:5px solid #3ad3fb; margin-top:10px; font-family:euromode; background:#ffffff',
	items : [{
		xtype : 'panel',
		width : 320,
		html : '<p class="iv_step">STEP 1</p><p class="iv_info">BOOK INSPECTION ONLINE</p><p class="iv_link">ibuyirent.com.au</p>'
	}, {
		xtype : 'button',
		width : 240,
		height:160,
		html : '<img src="images/iv_video_btn.png" />',
		style : 'padding:0; background-color:#ffffff; border:0; border:10px solid #eeeeee;',
		handler : function() {
			mainPanel.push({
						title : 'Step 1',
						items : [StepOne]
					})
		}
	}]
}

var IntroVideoFrom2 = {
	xtype : 'panel',
	width : 600,
	layout : {
		type : 'hbox',
		align : 'top'
	},
	style : 'border:1px solid #eeeeee; padding:20px; border-top:5px solid #eeeeee; margin-top:10px; font-family:euromode; background:#ffffff',
	items : [{
		xtype : 'panel',
		width : 320,
		html : '<p class="iv_step">STEP 2</p><p class="iv_info">FOLLOW STATUS UPDATES</p><p class="iv_link">You have been approved!</p>'
	}, {
		xtype : 'button',
		width : 240,
		height:160,
		html : '<img src="images/iv_video_btn.png" />',
		style : 'padding:0; background-color:#ffffff; border:0; border:10px solid #eeeeee;',
		handler : function() {
			mainPanel.push({
						title : 'Step 1',
						items : [StepOne]
					})
		}
	}]
}

var IntroVideoFrom3 = {
	xtype : 'panel',
	width : 600,
	layout : {
		type : 'hbox',
		align : 'top'
	},
	style : 'border:1px solid #eeeeee; padding:20px; border-top:5px solid #eeeeee; margin-top:10px; font-family:euromode; background:#ffffff',
	items : [{
		xtype : 'panel',
		width : 320,
		html : '<p class="iv_step">STEP 3</p><p class="iv_info">BOOK INSPECTION ONLINE</p><p class="iv_link">ibuyirent.com.au</p>'
	}, {
		xtype : 'button',
		width : 240,
		height:160,
		html : '<img src="images/iv_video_btn.png" />',
		style : 'padding:0; background-color:#ffffff; border:0; border:10px solid #eeeeee;',
		handler : function() {
			mainPanel.push({
						title : 'Step 1',
						items : [StepOne]
					})
		}
	}]
}

var IntroVideo = {
	xtype : 'panel',
	layout : {
		type : 'vbox',
		align : 'middle'
	},
	items : [pre_logoImage, IntroVideoFrom, IntroVideoFrom2, IntroVideoFrom3]
}