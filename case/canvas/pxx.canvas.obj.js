/*!
 * PxxCanvas JavaScript Library (Bate) v0.0.1 
 * http://xxx.com/
 *
 * Copyright 2012, Cong Lin
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://xxx.org/license
 *
 * Date: 
 */
 


 

function PxxCanvas(id, canvasobj, htmlobj){
	this.id = id;
	this.canvasobj = canvasobj;
	this.htmlobj = htmlobj;
	//this.event = false;  //是否包含事件行为	
	
	/*常规属性*/
	this.x = null ;
	this.y = null ;
	this.width = null;
	this.height = null;
	this.text = null;
	this.src = null; //images对象
	this.state = null ; //状态识别
	this.d = null; //临时

	
	/*可选属性*/
	var fillStyle = null;
	var lineWidth = null;
	var strokeStyle = null;
	
	/*事件*/
	this.click = null;
	this.drag = null;  //鼠标拖动事件
	this.mousedown = null;
	this.mouseup = null;
	this.touchmove = null;
	
	
	/*私有函数*/
	//属性设定选择
	var selectAttr = function(name, value){
		switch (name) {
			
			//填充颜色
			case 'fillStyle':
				fillStyle = value;
				break;
				
			//填充颜色
			case 'lineWidth':
				lineWidth = value;
				break;
				
			//填充颜色
			case 'strokeStyle':
				strokeStyle = value;
				break;

			default:
				break;
		}
	}
	
	var getRadian = function(angle){
		var radian = angle*Math.PI/180;
		return radian;
	}
	
	
	
	
	
	
	this.centerRotate = function(x, y, center_x, center_y, angle){	
		canvasobj.translate(x+center_x, y+center_y);
		canvasobj.rotate(getRadian(angle));
		canvasobj.translate(-center_x, -(y+center_y));
	}
	
	this.pointRotate = function(x, y, center_x, center_y, angle){	
		canvasobj.translate(x+center_x, y+center_y);
		canvasobj.rotate(getRadian(angle));
		canvasobj.translate(-(x+center_x), -(y+center_y));
	}
	
		/*
	 * 鼠标是否在对象上
	 */
	 
	this.isObj = function(event){
		if (this.x < (event.pageX - htmlobj.offsetLeft) && (event.pageX - htmlobj.offsetLeft) < (this.x + this.width) && this.y-30 < (event.pageY - htmlobj.offsetTop) && (event.pageY - htmlobj.offsetTop ) < (this.y + this.height)) {
			
		
			return true;
		} 
	 }
	
	
	/*
 	 * @param：obj 属性对象集合
 	 * @example: 批量设定对象属性
     */	
	this.setAttr = function(obj){
		for (name in obj){
			selectAttr(name, obj[name]);
		}
		
		//设定绘图属性
		fillStyle != null ? this.canvasobj.fillStyle = fillStyle :'';
		lineWidth != null ? this.canvasobj.lineWidth = lineWidth-0.5 :'';
		strokeStyle != null ? this.canvasobj.strokeStyle = strokeStyle :'';
	}
	
	

	 
	 
	 
	
	/**
	 * @param: start 开始坐标 {'x':0,'y':0}
	 * @param: end  结束坐标 {'x':0,'y':0}
	 * @param: space 间距 默认为1
	 * @param: grain 点长度  默认为1 
	 * @example: 绘制虚线
	 */
	 this.drawDotted = function(start, end, space, grain ){
	 	this.canvasobj.moveTo(start.x, start.y);
	 	
	 	space = (void 0 == space ? 1 : space);
	 	grain = (void 0 == grain ? 1 : grain);
	 	
	 	//纵向
	 	if(start.x == end.x){
			for( ;start.y < end.y ; start.y+=(space+grain) ){
				this.canvasobj.lineTo(start.x, start.y+space);
				this.canvasobj.moveTo(start.x, start.y+space+grain)
			}	 		
	 	}
	 	
	 	//横向
	 	if(start.y == end.y){		
	 		for( ;start.x < end.x ; start.x+=(space+grain) ){
				this.canvasobj.lineTo(start.x+space, start.y);
				this.canvasobj.moveTo(start.x+space+grain, start.y);
			}	 		
	 	}
	 	
	 	this.canvasobj.stroke();
	 }
	 
	 
	 /*
	  * 原生操作
	  */
	 /**
	  * fillRect()扩展
	  */
	this.fillRect = function(x, y, weight, height){
		x = (void 0 == x ? this.x : x);
	  	y = (void 0 == y ? this.y : y);
	  	weight = (void 0 == weight ? this.weight : weight);
	  	height = (void 0 == height ? this.height : height);
	  	this.canvasobj.fillRect(x, y, weight, height);
	}
	
	/**
	 * fillText()扩展
	 **/
	 this.fillText = function(text, x, y, fontstyle, algin){
	 	fontstyle = (void 0 == fontstyle ? '' : fontstyle);
	 	algin = (void 0 == algin ? '' : algin);
	 	this.canvasobj.save();
	 	this.canvasobj.font = fontstyle;
	 	this.canvasobj.textAlign = algin;
	 	this.canvasobj.fillText(text, x, y);
	 	this.canvasobj.restore();
	}
	
	/**
	 * drawImage()扩展
	 **/
	 this.drawImage = function(image, x, y){
	 	this.canvasobj.drawImage(image, x, y);
	 }
	 
	 
	 this.save = function(){
	 	this.canvasobj.save();
	 }
	 
	 
	  this.restore = function(){
	 	this.canvasobj.restore();
	 }
}


	
/*静态函数*/
/*
 * @param：fun 需要执行的方法
 * @example 页面载入后执行
 * @static 
 */
PxxCanvas.ready = function (fun){
	window.onload = function(){
		fun();
	}
}



/*
 * @param：id Canvas元素id名
 * @return: obj HTML对象
 * @static 
 */
PxxCanvas.getHtmlObj = function (id){
	var obj = document.getElementById(id);
	return obj;
}

/*
 * @param：id Canvas元素id名
 * @return: obj Canvas对象
 * @static 
 */	
PxxCanvas.getCanvasObj = function (id){
	var obj = PxxCanvas.getHtmlObj(id) 
	return obj.getContext('2d')
}

/*
 * 注册mousedown事件
 * 
 */

PxxCanvas.mousedown = function(htmlObj, clickObj){

	htmlObj.onmousedown = function(event){
		for (i in clickObj){
			if(clickObj[i].mousedown != null && clickObj[i].isObj(event) == true){
				clickObj[i].mousedown();
			}
		}
	}
}


PxxCanvas.mouseup = function(htmlObj, clickObj){

	htmlObj.onmouseup = function(event){
		for (i in clickObj){
			if(clickObj[i].mouseup != null && clickObj[i].isObj(event) == true){
				clickObj[i].mouseup();
			}
		}
	}
}




/*
 * 注册click事件
 * 
 */

PxxCanvas.click = function(htmlObj, clickObj){

	htmlObj.onclick = function(event){
		for (i in clickObj){
			if(clickObj[i].click != null && clickObj[i].isObj(event) == true){
				clickObj[i].click();
			}
		}
	}
}

PxxCanvas.touchmove = function(htmlObj, clickObj){
	htmlObj.ontouchmove = function(event){
		for (i in clickObj){
			if(clickObj[i].touchmove != null && clickObj[i].isObj(event) == true){
				clickObj[i].touchmove();
			}
		}
	}
	
}


/*
 * 注册拖动事件
 * 
 */

PxxCanvas.drag = function(htmlObj, clickObj){	
	
	htmlObj.onmousemove = function(event){
		for (i in clickObj){
			if(clickObj[i].drag != null && clickObj[i].isObj(event) == true){
				this.style.cursor = 'pointer';
			}
		}
	}
	
	htmlObj.onmousedown = function(event){
		for (i in clickObj){
			if(clickObj[i].drag != null && clickObj[i].isObj(event) == true){
				fun = clickObj[i].drag
				htmlObj.onmousemove = function(event){
					htmlObj.style.cursor = 'move';
					fun(event);
				}
			}
		}
	}
	
	htmlObj.onmouseup = function(){
		this.style.cursor = 'pointer';
		htmlObj.onmousemove = function(event){			
		}
	}
	
}

