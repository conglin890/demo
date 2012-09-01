Ext.define('HowToApply.view.Facebook', {
			extend : 'Ext.Panel'
		});

var Facebook = {
	xtype : 'panel',
	items : [logoImage, {
		xtype : 'panel',
		margin : '10 10 10 10',
		html : '<p class="fb_font">Please join us!</p><p class="fb_font2">JOIN US OUR SOCOAL MEDIA NETWORKS.</p><div class="fb_img"><img src="images/facebook_icon.png" /><img src="images/twitter_icon.png" /><img src="images/in_icon.png" /></div>',
		style : 'background:#ffffff; margin:10px auto; padding:10px;'
	}, {
		xtype : 'panel',
		margin : '10 10 10 10',
		style : ' margin:10px auto; padding:10px;',
		items : [{
			xtype : 'panel',
			html : '<p class="fb_font">Feedback<p><p class="fb_font2">YOUR FEEDBACK WOULD BE APPRECIATED</p>'
		}, {
			xtype : 'textfield',
			name : 'name',
			placeHolder : 'name',
			style : 'margin-top:10px; border:1px solid #cccccc; border-radius: 5px; box-shadow: 0px 0px 5px rgba(220,220,220,0.8) inset;'
		}, {
			xtype : 'emailfield',
			name : 'mail',
			placeHolder : 'mail',
			style : 'margin-top:10px; border:1px solid #cccccc; border-radius: 5px; box-shadow: 0px 0px 5px rgba(220,220,220,0.8) inset;'
		}, {
			xtype : 'textareafield',
			name : 'mail',
			placeHolder : 'any questions?',
			style : 'margin-top:10px; border:1px solid #cccccc; border-radius: 5px; box-shadow: 0px 0px 5px rgba(220,220,220,0.8) inset;'
		}, {
			xtype : 'button',
			text : 'Submit',
			cls : "bigNext",
			ui : 'action',
			style : 'margin-top:10px;'
		}]
	}]
}