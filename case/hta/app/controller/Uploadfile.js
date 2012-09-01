Ext.define('HowToApply.controller.Uploadfile', {
			extend : 'Ext.app.Controller',
			config : {
				refs : {
					Uploadfile_btn : '#Uploadfile img'
				},

				control : {
					Uploadfile_btn : {
						tap : 'Uploadfile_fun'
					}
				}
			},

			Uploadfile_fun : function(obj) {
				
			
				var pictureSource; // 图片来源
				var destinationType; // 设置返回值的格式

				//等待PhoneGap连接设备
				document.addEventListener("deviceready", onDeviceReady, false);

				// PhoneGap准备就绪，可以使用！
				function onDeviceReady() {
					pictureSource = navigator.camera.PictureSourceType;
					destinationType = navigator.camera.DestinationType;
				}

				// 当成功获得一张照片的Base64编码数据后被调用
				function onPhotoDataSuccess(imageData) {
					//alert(imageData)
                    obj.setSrc( imageData )
				}

				// 当有错误发生时触发此函数
				function onFail(mesage) {
					alert(mesage)
				}

          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit:true});
           
         
				
				
			}

		});