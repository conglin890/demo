Ext.define('HowToApply.controller.Onlinebookingsystem', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			InspectionDate_select: '#InspectionDate selectfield',
			InspectionDate_btn2: '#BookInspection_btn2'
		},
		control: {
			InspectionDate_select: {
				change: 'InspectionDate_select_fun'
			},
			InspectionDate_btn2: {
				tap: 'InspectionDate_btn_fun'
			}
		}
	},
	InspectionDate_select_fun: function(obj) {
		var nowDate = obj.getValue()

		db.transaction(function(tx) {
			tx.executeSql('SELECT time FROM book_date WHERE date="' + nowDate + '"', [], function(tx, result) {
				var obj = eval("([" + result.rows.item(0)['time'] + "])");
				Ext.ComponentQuery.query('#InspectionTime selectfield')[0].setOptions(obj)

			}, null);
		})

		Ext.ComponentQuery.query('#InspectionTime selectfield')[0].setOptions(date_save_Obj[obj.getValue()])

	},
	InspectionDate_btn_fun: function() {
		mainPanel.push({
			title: 'Inspection Booked',
			scrollable: {
				direction: 'vertical',
				directionLock: true
			},
			items: [Inspectionbooked]
		})



	}

});