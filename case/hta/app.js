// Global var;
var global_url = 'http://www.ibuyirent.com.au';
var global_url2 = 'http://www.howtoapply.com.au';
var setapplicationid = '';
var address = '';
var property_Id = null;

var child_info = '';
var pet_info = '';

var upload_view = {
	'upload100_file': false,
	'upload_file_income': false,
	'upload_file_employmen': false,
	'student_file': false,
	'refr2_file': false,
	'refr1_file': false
};

var date_picker = {
	xtype: 'datepicker',
	id: 'datepack'
};

// eorror
var out_time = 6000;
var net_wrong = 'net';
var server_wrong = 'PLEASE FILL IN EACH FIELD BEFORE CLICKING NEXT';

var logoImage = {
	xype: 'panel',
	width: '100%',
	style: 'background:#ffffff',
	items: [{
		xtype: 'panel',
		layout: {
			type: 'vbox',
			align: 'center'
		},
		items: [{
			xtype: 'image',
			src: 'images/logo.png',
			height: 34,
			width: 200
		}],
		style: 'padding:15px 0; '
	}]
}

var iv_logoImage = {
	xype: 'panel',
	width: 580,
	style: 'background:#ffffff; border-bottom:3px solid #41dbfc;',
	items: [{
		xtype: 'panel',
		layout: {
			type: 'vbox',
			align: 'center'
		},
		items: [{
			xtype: 'image',
			src: 'images/logo.png',
			height: 34,
			width: 200
		}],
		style: 'padding:15px 0; '
	}]
}

var pre_logoImage = {
	xype: 'panel',
	width: '100%',
	items: [{
		xtype: 'panel',
		layout: {
			type: 'vbox',
			align: 'center'
		},
		items: [{
			xtype: 'image',
			src: 'images/logo.png',
			height: 34,
			width: 200
		}],
		style: 'padding:15px 0; '
	}]
}

/* home */
var textOne = new Ext.Panel({
	width: '100%',
	height: 80,
	html: 'Australia’s number one innovative online <br /> application system for rental properties.',
	style: 'font-family:Harabara; font-size:21px; color:#949494; padding:10px 0; text-align:center; background:#ffffff '
});

var mainPanel;

Ext.application({
	name: 'HowToApply',
	controllers: ['Home', 'PreApplicationPage', 'Bookinspection', 'Onlinebookingsystem', 'Leasedetails', 'Personaldetails', 'Addressdetails', 'Previouspropertydetails2', 'Currentlyemployed', 'Selfemployeddetails', 'Studentdetails', 'Unemployeddetails', 'References', 'Uploadfile', 'Kin', 'Student3', 'Child', 'Pets'],
	models: ['PreApplicationPage2', 'Personaldetails', 'Leasedetails', 'Addressdetails', 'Addressdetails2', 'Previouspropertydetails2', 'Addressdetails3', 'Currentlyemployed', 'Selfemployeddetails', 'Selfemployeddetails2', 'Studentdetails', 'Unemployeddetails', 'References', 'References2', 'Kin', 'Student3', 'Child', 'Pets'],
	views: ['Home', 'StatusUpdater', 'IntroVideo', 'StepOne', 'Facebook', 'PreApplicationPage', 'PreApplicationPage2', 'Forgotid', 'Confirmation', 'Tenancyapplicationfront', 'Tenancyapplicationform', 'Upload', 'Leasedetails', 'Propertyhistory', 'Addressdetails', 'Addressdetails2', 'Previouspropertydetails', 'Previouspropertydetails2', 'Addressdetails3', 'Termsofagreement', 'Employmentinformation', 'Currentlyemployed', 'Uploadproofofincome', 'References', 'References2', 'Selfemployeddetails', 'Selfemployeddetails2', 'Studentdetails', 'Unemployeddetails', 'Unemployeddetails', 'Inspectionbooked', 'Onlinebookingsystem', 'Bookinspection', 'Personaldetails', 'Uploadfile', 'Children', 'Pets', 'Uploadproofofemployment', 'Student2', 'Kin', 'Student3', 'Student4', 'Rentalhistory','Houselist'],
	launch: function() {
		mainPanel = Ext.create('Ext.NavigationView', {
			fullscreen: true,
			id: 'mainpanel',
			border: 0,
			navigationBar: {
				style: 'font-size:14px;'
			},
			items: [{
				title: 'How To Apply',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: Home
				
			}]

		});

		Ext.Viewport.add(date_picker);



		Ext.getCmp('datepack').setHidden(true);

	}

});