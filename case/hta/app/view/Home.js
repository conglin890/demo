Ext.define('HowToApply.view.Home', {
			extend : 'Ext.Panel'
		});

var Home = [logoImage, {
	xtype : 'button',
	padding : '10 10 10 10',
	margin : '10 10 10 10',
	cls : 'home_btn',
	html : ' <div class="home_btn_box" style="padding-left:30px;"><div class="home_btn_left" ><img src="images/intro_video_btn.png"/></div><div class="home_btn_right"><div class="home_title">Book Inspection</div><div class="home_text">Please make sure an <br /> inspection has  been booked by <br /> one applicant before  move on</div> </div></div>',
	handler : function() {
		mainPanel.push({
					title : 'Book Inspection',
					scrollable : {
						direction : 'vertical',
						directionLock : true
					},
					items : [Bookinspection]
				})
				
				
				
					
	}
}, {
	xtype : 'button',
	id : 'pap_home_btn',
	padding : '10 10 10 10',
	margin : '10 10 10 10',
	cls : 'home_btn',
	html : '<div class="home_btn_box"><div class="home_btn_left"><img src="images/apply_online.png"/></div><div class="home_btn_right"><div class="home_title">Apply Online</div><div class="home_text">Choose this icon to login <br /> and open your application.</div> </div></div>'
}, {
	xtype : 'button',
	padding : '10 10 10 10',
	margin : '10 10 10 10',
	cls : 'home_btn',
	html : '<div class="home_btn_box"><div class="home_btn_left"><img src="images/status_updater_btn.png"/></div><div class="home_btn_right"><div class="home_title">Status Updater</div><div class="home_text">Select for an overview of our <br /> status updater process.</div> </div></div>',
	handler : function() {
		mainPanel.push({
					title : 'Status Updater',
					scrollable : {
						direction : 'vertical',
						directionLock : true
					},
					items : [StatusUpdater]
				})
				
				
					
	}
}]
