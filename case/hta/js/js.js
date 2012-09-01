/* web sql */
var db = window.openDatabase('hta_db', '1.0', 'hta_db', 1 * 1024 * 1024);
var date_save_Obj = new Object();


// create table
db.transaction(function(tx) {
	tx.executeSql("CREATE TABLE book_date (id integer primary key autoincrement, date TEXT, time TEXT)",[], function(result) {}, function(tx, error) {});
})

//db.transaction(function(tx) {
//	tx.executeSql("CREATE TABLE pre_application (id integer primary key autoincrement, frist_name TEXT, last_name TEXT, mobile TEXT)",[], function(result) {}, function(tx, error) {});
//})


var pap_select_pro = function(obj) {
	num_pro = obj.getId() - 1;
	for (var i in Ext.ComponentQuery.query('#pap_pro > button')) {
		var setobj = Ext.ComponentQuery.query('#pap_pro > button')[i];
		if (i <= num_pro) {
			setobj.setIconCls('pro_on');
		} else {
			setobj.setIconCls('pro_off');
		}
	}
	//num_pro = num_pro + 1;

	Ext.ComponentQuery.query('#pro_num')[0].setValue(null);
}

var child_select_pro = function(obj) {
	num_child = obj.getId().slice(-1) - 1;
	for (var i in Ext.ComponentQuery.query('#child > button')) {
		var setobj = Ext.ComponentQuery.query('#child > button')[i];
		if (i <= num_child) {
			setobj.setIconCls('child_on');
		} else {
			setobj.setIconCls('child_off');
		}
	}

	Ext.ComponentQuery.query('#child_num')[0].setValue(null);
	child_panel_show();
	
	
}

var pet_select_pro = function(obj) {
	num_pet = obj.getId().slice(-1) - 1;
	for (var i in Ext.ComponentQuery.query('#pet > button')) {
		var setobj = Ext.ComponentQuery.query('#pet > button')[i];
		if (i <= num_pet) {
			setobj.setIconCls('pet_on');
		} else {
			setobj.setIconCls('pet_off');
		}
	}
	// num_pet = num_pet + 1;

	Ext.ComponentQuery.query('#pet_num')[0].setValue(null);

	pet_panel_show();
}


var child_panel_show  = function(){
	

	
	var num = Ext.getCmp('child_num').getValue() == null ? Ext.ComponentQuery.query('#child > button[iconCls="child_on"]').length:Ext.getCmp('child_num').getValue();
		
	mainPanel.push({
				title : 'Number Of Child',
				scrollable : {
					direction : 'vertical',
					directionLock : true
				},
				items : [Children]
			});
	
	
	Ext.getCmp('children_form').setRecord(child_model);
				for (var i = 0; i < 10; i++) {
								Ext.ComponentQuery.query('#children_form > panel')[i].setHidden(false);
				}
							
				for(var i=num ; i <10; i++ ){
							Ext.ComponentQuery.query('#children_form > panel')[i].setHidden(true);					
				}
	
}

var pet_panel_show = function() {
	var petItems = new Array();


	var num = Ext.getCmp('pet_num').getValue() == null ? Ext.ComponentQuery.query('#pet > button[iconCls="pet_on"]').length:Ext.getCmp('pet_num').getValue();
		
	mainPanel.push({
				title : 'Number Of Pets',
				scrollable : {
					direction : 'vertical',
					directionLock : true
				},
				items : [Pets]
			});
	
	
	
	Ext.getCmp('pets_form').setRecord(pets_model);
				for (var i = 0; i < 10; i++) {
								Ext.ComponentQuery.query('#pets_form > panel[cls="top_box"]')[i].setHidden(false);
				}
							
				for(var i=num ; i <10; i++ ){
							Ext.ComponentQuery.query('#pets_form > panel[cls="top_box"]')[i].setHidden(true);					
				}


}

var checkNav = function() {
	if (window.navigator.onLine != true) {
		alert('error');
	}
}

var getDate = function(text) {

	var month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
			"Aug", "Spt", "Oct", "Nov", "Dec");
	var week = new Array("Sunday", "Monday", "Tuseday", "Wednesday",
			"Thursday", "Friday", "Saturday");

	text = text.substr(0, 10) + ' 00:00:00';
	text = new Date(text);

	var dateText = week[text.getDay()] + ',' + text.getDate() + ' '
			+ month[text.getMonth()];
	return dateText;

}

var gettime = function(text) {
	var text = text.substr(11, 5);

	if (Number(text.substr(0, 2)) > '12') {
		text = '0' + (Number(text.substr(0, 2)) - 12).toString()
				+ text.substr(2, 3) + ' PM';
	} else {
		text += 'AM';
	}
	return text;

}