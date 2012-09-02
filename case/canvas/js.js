var ahome_link = 'http://www.google.com';
var services_link = 'http://www.yahoo.com';
var enga_link = 'http://www.msn.com';
var about_link = 'http://www.amazon.com'
var cont_link = 'http://www.ebay.com';
var cli_link = 'http://www.baidu.com';

var client_link = 'http://www.baidu.com';
var fb_link = 'http://www.baidu.com';
var tw_link = 'http://www.baidu.com';
var tu_link = 'http://www.baidu.com';
var ig_link = 'http://www.baidu.com';

var widget_obj = {};
var logo_widget_obj = {}
var nav_widget_obj = {}
var panel;
var logo_panel;
var fspeed = null; // ????
var cspeed = 160; // ????
var fangle = 10; // ????
var fengAnimation = null;
var cheAnimation = null;
var canvaobja;
var cc = null;
var fc = null;
var canvasobja;
var lstae = 'no';
var lightAnimation = null;
var sound = null;
var bthsound = null;
var nav_canvas;
var nab_obj;
var nava = 1;
var navb = 1;
var leftpx = 0;
var logoA = null;

var logo_html_obj;
var logo_canvas_obj;
var che_point_order = 0;
var che_point = new Array({
	'x': 453,
	'y': 4
}, {
	'x': 425,
	'y': 25
}, {
	'x': 391,
	'y': 60
}, {
	'x': 364,
	'y': 88
}, {
	'x': 322,
	'y': 116
}, {
	'x': 287,
	'y': 123
}, {
	'x': 250,
	'y': 114
}, {
	'x': 230,
	'y': 100
}, {
	'x': 198,
	'y': 75
}, {
	'x': 163,
	'y': 70
}, {
	'x': 141,
	'y': 71
}, {
	'x': 146,
	'y': 94
}, {
	'x': 186,
	'y': 96
}, {
	'x': 213,
	'y': 114
}, {
	'x': 243,
	'y': 122
}, {
	'x': 263,
	'y': 113
}, {
	'x': 293,
	'y': 109
}, {
	'x': 328,
	'y': 110
}, {
	'x': 356,
	'y': 126
}, {
	'x': -100,
	'y': -100
}, {
	'x': -100,
	'y': -100
}, {
	'x': 412,
	'y': 127
}, {
	'x': 421,
	'y': 95
}, {
	'x': 428,
	'y': 64
}, {
	'x': 440,
	'y': 39
}, {
	'x': 460,
	'y': 30
}, {
	'x': 473,
	'y': 6
});

// ???????
var change_btn_che = new Image();
change_btn_che.src = 'images/change_btn_che.png';

var change_btn_lun = new Image();
change_btn_lun.src = 'images/change_btn_lun.png';

var stop_btn_on = new Image();
stop_btn_on.src = 'images/stop_btn_on.png';

var stop_btn_off = new Image();
stop_btn_off.src = 'images/stop_btn_off.png';

var btn_light_no = new Image();
btn_light_no.src = 'images/btn_light_no.png';

var btn_light_red = new Image();
btn_light_red.src = 'images/btn_light_red.png';

var btn_light_green = new Image();
btn_light_green.src = 'images/btn_light_green.png';

var level_img = new Image();
level_img.src = 'images/level.png';

var choose_btn_img = new Image();
choose_btn_img.src = 'images/choose_btn.png';

var music_btn_off = new Image();
music_btn_off.src = 'images/music_btn_off.png';

var music_btn_on = new Image();
music_btn_on.src = 'images/music_btn_on.png';

var logo_img = new Image();
logo_img.src = 'images/logo.png';

var fengche_img = new Image();
fengche_img.src = 'images/fenche.png';

var che_img = new Image();
che_img.src = 'images/che.png';

var che_img2 = new Image();
che_img2.src = 'images/che2.png';

var che_img3 = new Image();
che_img3.src = 'images/che3.png';

var che_img4 = new Image();
che_img4.src = 'images/che4.png';

var che_img5 = new Image();
che_img5.src = 'images/che5.png';

var che_img6 = new Image();
che_img6.src = 'images/che6.png';

var che_img7 = new Image();
che_img7.src = 'images/che7.png';

var che_img8 = new Image();
che_img8.src = 'images/che8.png';

var che_img9 = new Image();
che_img9.src = 'images/che9.png';

var che_img10 = new Image();
che_img10.src = 'images/che10.png';

var che_img11 = new Image();
che_img11.src = 'images/che11.png';

var che_img12 = new Image();
che_img12.src = 'images/che12.png';

var che_img13 = new Image();
che_img13.src = 'images/che13.png';

var che_img14 = new Image();
che_img14.src = 'images/che14.png';

var che_img15 = new Image();
che_img15.src = 'images/che15.png';

var che_img16 = new Image();
che_img16.src = 'images/che16.png';

var che_img17 = new Image();
che_img17.src = 'images/che17.png';

var che_img18 = new Image();
che_img18.src = 'images/che18.png';

var che_img19 = new Image();
che_img19.src = 'images/che19.png';

var che_img20 = new Image();
che_img20.src = 'images/che20.png';

var che_img21 = new Image();
che_img21.src = 'images/che21.png';

var che_img22 = new Image();
che_img22.src = 'images/che22.png';

var nav1 = new Image();
nav1.src = 'images/nav1.png';

var nav2 = new Image();
nav2.src = 'images/nav2.png';

var nav3 = new Image();
nav3.src = 'images/nav3.png';

var nav4 = new Image();
nav4.src = 'images/nav4.png';

var num = new Image();
num.src = "images/num.png";

var num1 = new Image();
num1.src = "images/1.png";

var num2 = new Image();
num2.src = "images/2.png";

var num3 = new Image();
num3.src = "images/3.png";

var num4 = new Image();
num4.src = "images/4.png";

var num5 = new Image();
num5.src = "images/5.png";

var num6 = new Image();
num6.src = "images/6.png";

var num7 = new Image();
num7.src = "images/7.png";

var num8 = new Image();
num8.src = "images/8.png";

var num9 = new Image();
num9.src = "images/9.png";

var num0 = new Image();
num0.src = "images/0.png";

nava = nav2;

function getAngleDegree(x0, y0, x1, y1) {
	var dX = x1 - x0;
	var dY = y1 - y0;
	var r = Math.sqrt(dX * dX + dY * dY);
	var sin = dY / r;
	var cos = dX / r;

	var rawArcSin = Math.asin(sin);
	var rawArcCos = Math.acos(cos);

	// ???
	var theta = 0;

	if (cos >= 0) {
		if (sin >= 0) {
			theta = rawArcSin;
		} else {
			theta = 2 * Math.PI + rawArcSin;
		}
	} else {
		if (sin >= 0) {
			theta = rawArcCos;
		} else {
			theta = Math.PI - rawArcSin;
		}
	}

	theta = 360 * theta / (2 * Math.PI)
	return theta;
}

var logoAnimation = function() {

		if (leftpx < 1280) {
			leftpx += 1;
		} else {
			leftpx = -784;
		}

		document.getElementById('nav').style.left = leftpx + 'px';

		logoA = setTimeout(logoAnimation, 33);

	}

var loadImage = function(canvas_obj) {
		for (i in widget_obj) {
			if (widget_obj[i].src != null) {
				if (widget_obj[i].state != null) {
					canvas_obj.drawImage(widget_obj[i].src[widget_obj[i].state], widget_obj[i].x, widget_obj[i].y);
				} else {
					canvas_obj.drawImage(widget_obj[i].src, widget_obj[i].x, widget_obj[i].y);
				}

			}
		}

	}

var c_loadImage = function(canvas_obj, du) {
		for (i in widget_obj) {
			if (widget_obj[i].src != null) {
				if (widget_obj[i].state != null) {
					canvas_obj.drawImage(widget_obj[i].src[widget_obj[i].state], widget_obj[i].x, widget_obj[i].y);
				} else {
					if (widget_obj[i].id == 'choose_btn') {
						canvas_obj.save();
						if (du != void 0) {
							cd = du;
						}

						canvas_obj.pointRotate(widget_obj['choose_btn'].x, widget_obj['choose_btn'].y, 61, 61, (cd - 360 - 30));
						canvas_obj.drawImage(widget_obj[i].src, widget_obj[i].x, widget_obj[i].y);
						canvas_obj.restore();

					} else {
						canvas_obj.drawImage(widget_obj[i].src, widget_obj[i].x, widget_obj[i].y);
					}
				}

			}
		}

	}

var logoLoadImage = function(canvas_obj) {
		for (i in logo_widget_obj) {
			if (logo_widget_obj[i].src != null) {
				if (logo_widget_obj[i].state != null) {
					canvas_obj.drawImage(
					logo_widget_obj[i].src[logo_widget_obj[i].state], logo_widget_obj[i].x, logo_widget_obj[i].y);
				} else {
					canvas_obj.drawImage(logo_widget_obj[i].src, logo_widget_obj[i].x, logo_widget_obj[i].y);
				}

			}
		}
	}

var setObj = function(canvas_obj, html_obj) {

		var change_btn = new PxxCanvas('change_btn', canvas_obj, html_obj);
		change_btn.src = {
			'che': change_btn_che,
			'lun': change_btn_lun
		};
		change_btn.state = 'lun';
		change_btn.x = 35;
		change_btn.width = 75;
		change_btn.height = 173;
		change_btn.y = 35;

		widget_obj[change_btn.id] = change_btn;

		var chebtn = new PxxCanvas('chebtn', canvas_obj, html_obj);
		chebtn.x = 35;
		chebtn.y = 145;
		chebtn.width = 75;
		chebtn.height = 80;
		chebtn.click = function() {

			if ('on' == widget_obj['stop_btn'].state) {

				if (widget_obj['change_btn'].state == 'lun') {
					sound.pause();
					widget_obj['change_btn'].state = 'che';
					canvas_obj.clearRect(35, 35, 75, 173);

					if ('on' == widget_obj['music_btn'].state) {
						if (btnsound != null) {

							btnsound.src = 'music/Switch_Click.mp3';
							btnsound.play();
						}

						sound.src = 'music/RollerCoaster.mp3';
						sound.play();
					}

					cspeed = 2 * fspeed;
					window.clearTimeout(fengAnimation);
					cheAnimation = setTimeout(cAnimation, cspeed);

					canvas_obj.drawImage(
					widget_obj['change_btn'].src[widget_obj['change_btn'].state], 35, 35);

				}
			}
		}

		widget_obj['chebtn'] = chebtn;

		var lunbtn = new PxxCanvas('lunbtn', canvas_obj, html_obj);
		lunbtn.x = 35;
		lunbtn.y = 35;
		lunbtn.width = 75;
		lunbtn.height = 80;
		lunbtn.click = function() {

			if (widget_obj['change_btn'].state != 'lun') {

				if ('on' == widget_obj['stop_btn'].state) {
					sound.pause();
					widget_obj['change_btn'].state = 'lun';
					canvas_obj.clearRect(35, 35, 75, 173);

					if ('on' == widget_obj['music_btn'].state) {

						if (btnsound != null) {
							btnsound.src = 'music/Switch_Click.mp3';
							btnsound.play();

						}

						sound.src = 'music/FerrisWheel_Carnival.mp3';
						sound.play();

					}

					canvas_obj.drawImage(
					widget_obj['change_btn'].src[widget_obj['change_btn'].state], 35, 35);
					fspeed = cspeed / 2
					window.clearTimeout(cheAnimation);
					cheAnimation = setTimeout(fAnimation, fspeed);

				}

			}

		}
		widget_obj['lunbtn'] = lunbtn;

		var stop_btn = new PxxCanvas('stop_btn', canvas_obj, html_obj);
		stop_btn.src = {
			'on': stop_btn_on,
			'off': stop_btn_off
		};
		stop_btn.state = 'on';
		stop_btn.width = 174;
		stop_btn.height = 173;
		stop_btn.x = 425;
		stop_btn.y = 35;
		stop_btn.click = function() {

			sound.pause();
			widget_obj['stop_btn'].state = ('on' == widget_obj['stop_btn'].state ? 'off' : 'on');
			canvas_obj.clearRect(425, 35, 174, 173);
			canvas_obj.drawImage(
			widget_obj['stop_btn'].src[widget_obj['stop_btn'].state], 425, 35);
			if ('on' == widget_obj['music_btn'].state) {

				if (btnsound != null) {

					btnsound.src = 'music/Switch_Click.mp3';
					btnsound.play();
				}

			}

			if ('on' == widget_obj['stop_btn'].state) {

				canvasobja.clearRect(110, 0, 70, 240);
				canvasobja.drawImage(
				widget_obj['btn_light'].src[widget_obj['btn_light'].state], widget_obj['btn_light'].x, widget_obj['btn_light'].y);

				if (widget_obj['change_btn'].state == 'che') {
					window.clearTimeout(fengAnimation);

					cheAnimation = setTimeout(cAnimation, cspeed);
					if ('on' == widget_obj['music_btn'].state) {
						sound.src = 'music/RollerCoaster.mp3';
						sound.play();
					}
				} else {

					if ('on' == widget_obj['music_btn'].state) {
						sound.src = 'music/FerrisWheel_Carnival.mp3';
						sound.play();
					}

					window.clearTimeout(cheAnimation);
					fengAnimation = setTimeout(fAnimation, fspeed);
				}
			} else {

				canvasobja.clearRect(110, 0, 70, 240);
				canvasobja.drawImage(widget_obj['btn_light'].src['no'], widget_obj['btn_light'].x, widget_obj['btn_light'].y);

				if ('on' == widget_obj['music_btn'].state && widget_obj['change_btn'].state == 'che') {

					if (btnsound != null) {

						btnsound.src = 'music/RollerCoaster_Stop.mp3';
						btnsound.play();
					}

				}

				if (lightAnimation != null) {
					window.clearTimeout(lightAnimation);
				}

				if (cheAnimation != null) {
					window.clearTimeout(cheAnimation);
				}

				window.clearTimeout(fengAnimation);
			}

			if ('off' == widget_obj['stop_btn'].state) {

				window.clearTimeout(cheAnimation);
				window.clearTimeout(fengAnimation);
				window.clearTimeout(fengAnimation);
			}

		}
		widget_obj[stop_btn.id] = stop_btn;

		var btn_light = new PxxCanvas('btn_light', canvas_obj, html_obj);
		btn_light.state = 'no';
		btn_light.src = {
			'no': btn_light_no,
			'red': btn_light_red,
			'green': btn_light_green
		};
		btn_light.x = 120;
		btn_light.y = 20;
		widget_obj[btn_light.id] = btn_light;

		var level = new PxxCanvas('level', canvas_obj, html_obj);
		level.src = level_img;
		level.x = 260;
		level.y = 10;
		widget_obj[level.id] = level;

		var choose_btn = new PxxCanvas('choose_btn', canvas_obj, html_obj);
		choose_btn.src = choose_btn_img;
		choose_btn.x = 180;
		choose_btn.y = 70;
		choose_btn.width = 225;
		choose_btn.height = 159;
		choose_btn.touchmove = function() {
			if ('on' == widget_obj['stop_btn'].state) {
				cd = getAngleDegree(cx, cy, event.pageX - html_obj.offsetLeft, event.pageY - html_obj.offsetTop);
				if (cd > 0 && cd < 30) {
					canvas_obj.clearRect(0, 0, 700, 240);
					c_loadImage(panel);
				}
				if (cd > 330 && cd < 360) {

					canvas_obj.clearRect(0, 0, 700, 240);
					c_loadImage(panel);
				}

				if (widget_obj['change_btn'].state == 'lun') {

					fc = cd;
					cc = cd;

					if (cd < 30 && cd > 20) {
						fspeed = 96;
						btn_light.state = 'green';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num0, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num0, 250, 8);

					}
					if (cd < 20 && cd > 10) {
						fspeed = 84;
						btn_light.state = 'green';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num2, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num8, 230, 8);
						canvas_obj.drawImage(num0, 250, 8);

					}
					if (cd < 10 && cd > 0) {
						fspeed = 72;
						btn_light.state = 'green';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num3, 187, 8);
						canvas_obj.drawImage(num7, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 360 && cd > 350) {
						fspeed = 60;
						btn_light.state = 'green';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num4, 187, 8);
						canvas_obj.drawImage(num5, 207, 8);

						canvas_obj.drawImage(num5, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 350 && cd > 340) {
						fspeed = 48;
						btn_light.state = 'green';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num6, 187, 8);
						canvas_obj.drawImage(num1, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 350 && cd > 345) {
						fspeed = 36;
						btn_light.state = 'red';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);
						lightAnimation = setTimeout(lAnimation, 50);

						canvas_obj.drawImage(num7, 187, 8);
						canvas_obj.drawImage(num5, 207, 8);

						canvas_obj.drawImage(num1, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 355 && cd > 345) {
						fspeed = 24;
						btn_light.state = 'red';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);
						lightAnimation = setTimeout(lAnimation, 50);

						canvas_obj.drawImage(num8, 187, 8);
						canvas_obj.drawImage(num6, 207, 8);

						canvas_obj.drawImage(num2, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 345 && cd > 330) {
						fspeed = 12;
						btn_light.state = 'red';
						window.clearTimeout(fengAnimation);
						fengAnimation = setTimeout(fAnimation, fspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num9, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num9, 230, 8);
						canvas_obj.drawImage(num9, 250, 8);

					}
				}

				if (widget_obj['change_btn'].state == 'che') {
					cc = cd;
					fc = cd;
					if (cd < 30 && cd > 20) {
						cspeed = 160;
						btn_light.state = 'green';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num0, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num0, 250, 8);

					}
					if (cd < 20 && cd > 10) {
						cspeed = 175;
						btn_light.state = 'green';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);
						canvas_obj.drawImage(num2, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num8, 230, 8);
						canvas_obj.drawImage(num0, 250, 8);

					}
					if (cd < 10 && cd > 0) {
						cspeed = 150;
						btn_light.state = 'green';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num3, 187, 8);
						canvas_obj.drawImage(num7, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 360 && cd > 350) {
						cspeed = 125;
						btn_light.state = 'green';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num4, 187, 8);
						canvas_obj.drawImage(num5, 207, 8);

						canvas_obj.drawImage(num5, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 350 && cd > 345) {
						cspeed = 75;
						btn_light.state = 'red';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);
						lightAnimation = setTimeout(lAnimation, 50);

						canvas_obj.drawImage(num6, 187, 8);
						canvas_obj.drawImage(num1, 207, 8);

						canvas_obj.drawImage(num0, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 355 && cd > 345) {
						cspeed = 50;
						btn_light.state = 'red';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);
						lightAnimation = setTimeout(lAnimation, 50);
						canvas_obj.drawImage(num8, 187, 8);
						canvas_obj.drawImage(num6, 207, 8);

						canvas_obj.drawImage(num2, 230, 8);
						canvas_obj.drawImage(num2, 250, 8);

					}
					if (cd < 345 && cd > 330) {
						cspeed = 25;
						btn_light.state = 'red';
						window.clearTimeout(cheAnimation);
						cheAnimation = setTimeout(cAnimation, cspeed);
						window.clearTimeout(lightAnimation);

						canvas_obj.drawImage(num9, 187, 8);
						canvas_obj.drawImage(num9, 207, 8);

						canvas_obj.drawImage(num9, 230, 8);
						canvas_obj.drawImage(num9, 250, 8);

					}

				}
			}
		}
		choose_btn.mousedown = function(event) {

			if ('on' == widget_obj['stop_btn'].state) {

				cx = 245;
				cy = 130;

				sx = 365;
				sy = 190;
				document.getElementById('bo').onmousemove = function(event) {

					cd = getAngleDegree(cx, cy, event.pageX - html_obj.offsetLeft, event.pageY - html_obj.offsetTop);
					if (cd > 0 && cd < 30) {
						canvas_obj.clearRect(0, 0, 700, 240);
						c_loadImage(panel);
					}
					if (cd > 330 && cd < 360) {

						canvas_obj.clearRect(0, 0, 700, 240);
						c_loadImage(panel);
					}

					if ('on' == widget_obj['music_btn'].state) {

						if (btnsound != null) {

							btnsound.src = 'music/PowerUp.mp3';
							btnsound.play();
						}

					}

					if (widget_obj['change_btn'].state == 'lun') {

						fc = cd;
						cc = cd;

						if (cd < 30 && cd > 20) {
							fspeed = 96;
							btn_light.state = 'green';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num0, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num0, 250, 8);

						}
						if (cd < 20 && cd > 10) {
							fspeed = 84;
							btn_light.state = 'green';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num2, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num8, 230, 8);
							canvas_obj.drawImage(num0, 250, 8);

						}
						if (cd < 10 && cd > 0) {
							fspeed = 72;
							btn_light.state = 'green';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num3, 187, 8);
							canvas_obj.drawImage(num7, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 360 && cd > 350) {
							fspeed = 60;
							btn_light.state = 'green';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num4, 187, 8);
							canvas_obj.drawImage(num5, 207, 8);

							canvas_obj.drawImage(num5, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 350 && cd > 340) {
							fspeed = 48;
							btn_light.state = 'green';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num6, 187, 8);
							canvas_obj.drawImage(num1, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 350 && cd > 345) {
							fspeed = 36;
							btn_light.state = 'red';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);
							lightAnimation = setTimeout(lAnimation, 50);

							canvas_obj.drawImage(num7, 187, 8);
							canvas_obj.drawImage(num5, 207, 8);

							canvas_obj.drawImage(num1, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 355 && cd > 345) {
							fspeed = 24;
							btn_light.state = 'red';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);
							lightAnimation = setTimeout(lAnimation, 50);

							canvas_obj.drawImage(num8, 187, 8);
							canvas_obj.drawImage(num6, 207, 8);

							canvas_obj.drawImage(num2, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 345 && cd > 330) {
							fspeed = 12;
							btn_light.state = 'red';
							window.clearTimeout(fengAnimation);
							fengAnimation = setTimeout(fAnimation, fspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num9, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num9, 230, 8);
							canvas_obj.drawImage(num9, 250, 8);

						}
					}

					if (widget_obj['change_btn'].state == 'che') {
						cc = cd;
						fc = cd;
						if (cd < 30 && cd > 20) {
							cspeed = 160;
							btn_light.state = 'green';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num0, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num0, 250, 8);

						}
						if (cd < 20 && cd > 10) {
							cspeed = 175;
							btn_light.state = 'green';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);
							canvas_obj.drawImage(num2, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num8, 230, 8);
							canvas_obj.drawImage(num0, 250, 8);

						}
						if (cd < 10 && cd > 0) {
							cspeed = 150;
							btn_light.state = 'green';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num3, 187, 8);
							canvas_obj.drawImage(num7, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 360 && cd > 350) {
							cspeed = 125;
							btn_light.state = 'green';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num4, 187, 8);
							canvas_obj.drawImage(num5, 207, 8);

							canvas_obj.drawImage(num5, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 350 && cd > 345) {
							cspeed = 75;
							btn_light.state = 'red';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);
							lightAnimation = setTimeout(lAnimation, 50);

							canvas_obj.drawImage(num6, 187, 8);
							canvas_obj.drawImage(num1, 207, 8);

							canvas_obj.drawImage(num0, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 355 && cd > 345) {
							cspeed = 50;
							btn_light.state = 'red';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);
							lightAnimation = setTimeout(lAnimation, 50);
							canvas_obj.drawImage(num8, 187, 8);
							canvas_obj.drawImage(num6, 207, 8);

							canvas_obj.drawImage(num2, 230, 8);
							canvas_obj.drawImage(num2, 250, 8);

						}
						if (cd < 345 && cd > 330) {
							cspeed = 25;
							btn_light.state = 'red';
							window.clearTimeout(cheAnimation);
							cheAnimation = setTimeout(cAnimation, cspeed);
							window.clearTimeout(lightAnimation);

							canvas_obj.drawImage(num9, 187, 8);
							canvas_obj.drawImage(num9, 207, 8);

							canvas_obj.drawImage(num9, 230, 8);
							canvas_obj.drawImage(num9, 250, 8);

						}

					}
				}
			}
		}

		document.getElementById('bo').onmouseup = function() {
			document.getElementById('bo').onmousemove = function() {};
		}

		widget_obj[choose_btn.id] = choose_btn;

		var music_btn = new PxxCanvas('music_btn', canvas_obj, html_obj);
		music_btn.state = 'on';
		music_btn.src = {
			'on': music_btn_on,
			'off': music_btn_off
		};
		music_btn.x = 610;
		music_btn.y = 60;
		music_btn.width = 82;
		music_btn.height = 146;
		// music_btn.click = function(){
		//
		// //
		// // if('on' == widget_obj['stop_btn'].state){
		// //
		// // if('on' == widget_obj['music_btn'].state){
		// // btnsound.src = 'music/Switch_Click.mp3';
		// // btnsound.play();
		// // sound.pause();
		// //
		// //
		// // } else{
		// // sound.src = 'music/FerrisWheel_Carnival.mp3';
		// // widget_obj['change_btn'].state == 'lun'? sound.src =
		// 'music/FerrisWheel_Carnival.mp3':sound.src = 'music/RollerCoaster.mp3';
		// // sound.play();
		// // }
		// //
		// // widget_obj['music_btn'].state = ('on' == widget_obj['music_btn'].state
		// ? 'off' : 'on');
		// // if( cc != null || fc != null){
		// // if(cc != null && widget_obj['change_btn'].state == 'che'){
		// //
		// // canvas_obj.clearRect(596 ,43 , 75, 173);
		// //
		// canvas_obj.drawImage(widget_obj['music_btn'].src[widget_obj['music_btn'].state],
		// widget_obj['music_btn'].x, widget_obj['music_btn'].y);
		// // } else if(fc != null && widget_obj['change_btn'].state == 'lun'){
		// //
		// // canvas_obj.clearRect(596 ,43 , 75, 173);
		// //
		// canvas_obj.drawImage(widget_obj['music_btn'].src[widget_obj['music_btn'].state],
		// widget_obj['music_btn'].x, widget_obj['music_btn'].y);
		// // } else {
		// //
		// // canvas_obj.clearRect(596 ,43 , 75, 173);
		// //
		// canvas_obj.drawImage(widget_obj['music_btn'].src[widget_obj['music_btn'].state],
		// widget_obj['music_btn'].x, widget_obj['music_btn'].y);
		// // }
		// //
		// // } else {
		// // canvas_obj.clearRect(596 ,43 , 95, 173);
		// //
		// canvas_obj.drawImage(widget_obj['music_btn'].src[widget_obj['music_btn'].state],
		// widget_obj['music_btn'].x, widget_obj['music_btn'].y);
		// //
		// //
		// // }
		// // }
		// }
		widget_obj[music_btn.id] = music_btn;

		var music_on = new PxxCanvas('music_on', canvas_obj, html_obj);
		music_on.x = 610;
		music_on.y = 60;
		music_on.width = 82;
		music_on.height = 90;
		music_on.click = function() {
			if ('on' == widget_obj['stop_btn'].state) {
				if (widget_obj['music_btn'].state != 'on') {
					widget_obj['music_btn'].state = 'on'
					widget_obj['change_btn'].state == 'lun' ? sound.src = 'music/FerrisWheel_Carnival.mp3' : sound.src = 'music/RollerCoaster.mp3';

					sound.play();
					canvas_obj.clearRect(596, 43, 95, 173);
					canvas_obj.drawImage(
					widget_obj['music_btn'].src[widget_obj['music_btn'].state], widget_obj['music_btn'].x, widget_obj['music_btn'].y);

				}
			}

		}

		widget_obj['music_on'] = music_on;

		var music_off = new PxxCanvas('music_off', canvas_obj, html_obj);
		music_off.x = 610;
		music_off.y = 180;
		music_off.width = 82;
		music_off.height = 70;
		music_off.click = function() {
			if ('on' == widget_obj['stop_btn'].state) {
				if (widget_obj['music_btn'].state != 'off') {
					widget_obj['music_btn'].state = 'off';

					sound.pause();
					canvas_obj.clearRect(596, 43, 95, 173);
					canvas_obj.drawImage(
					widget_obj['music_btn'].src[widget_obj['music_btn'].state], widget_obj['music_btn'].x, widget_obj['music_btn'].y);

				}
			}

		}

		widget_obj['music_off'] = music_off;

		var numobj = new PxxCanvas('numobj', canvas_obj, html_obj);
		numobj.x = 180;
		numobj.y = 10;
		numobj.src = num;
		widget_obj['numobj'] = numobj;
	}

var setLogoObj = function(canvas_obj, html_obj) {

		var che = new PxxCanvas('che', canvas_obj, html_obj);
		che.src = che_img22;
		che.y = 6;
		che.x = 473;
		logo_widget_obj[che.id] = che;

		var fengche = new PxxCanvas('fengche', canvas_obj, html_obj);
		fengche.src = fengche_img;
		fengche.y = 20;
		fengche.x = 0;
		logo_widget_obj[fengche.id] = fengche;

		var logo_bg = new PxxCanvas('logo_bg', canvas_obj, html_obj);
		logo_bg.src = logo_img;
		logo_bg.y = 20;
		logo_bg.x = 6;
		logo_widget_obj[logo_bg.id] = logo_bg;
	}

var fAnimation = function() {
		logo_canvas_obj.clearRect(0, 0, 500, 370);
		for (i in logo_widget_obj) {
			if (logo_widget_obj[i].src != null) {
				if (logo_widget_obj[i].id == 'fengche') {
					logo_panel.save();
					logo_panel.centerRotate(logo_widget_obj[i].x, logo_widget_obj[i].y, 71, 71, fangle);
					logo_panel.drawImage(logo_widget_obj[i].src, logo_widget_obj[i].x, logo_widget_obj[i].y);
					logo_panel.restore();
					fangle += 10;
				} else {
					logo_panel.drawImage(logo_widget_obj[i].src, logo_widget_obj[i].x, logo_widget_obj[i].y);
				}
			}
		}
		fengAnimation = setTimeout(fAnimation, fspeed);
	}

var cAnimation = function() {
		logo_canvas_obj.clearRect(0, 0, 500, 370);

		if (che_point[che_point_order].x == 453 && che_point[che_point_order].y == 4) {
			logo_widget_obj['che'].src = che_img;
		}

		if (che_point[che_point_order].x == 425 && che_point[che_point_order].y == 25) {
			logo_widget_obj['che'].src = che_img2;
		}

		if (che_point[che_point_order].x == 322 && che_point[che_point_order].y == 116) {
			logo_widget_obj['che'].src = che_img3;
		}

		if (che_point[che_point_order].x == 287 && che_point[che_point_order].y == 123) {
			logo_widget_obj['che'].src = che_img4;
		}

		if (che_point[che_point_order].x == 250 && che_point[che_point_order].y == 114) {
			logo_widget_obj['che'].src = che_img5;
		}

		if (che_point[che_point_order].x == 230 && che_point[che_point_order].y == 100) {
			logo_widget_obj['che'].src = che_img6;
		}

		if (che_point[che_point_order].x == 198 && che_point[che_point_order].y == 75) {
			logo_widget_obj['che'].src = che_img7;
		}

		if (che_point[che_point_order].x == 163 && che_point[che_point_order].y == 70) {
			logo_widget_obj['che'].src = che_img8;
		}

		if (che_point[che_point_order].x == 141 && che_point[che_point_order].y == 71) {
			logo_widget_obj['che'].src = che_img9;
		}

		if (che_point[che_point_order].x == 146 && che_point[che_point_order].y == 94) {
			logo_widget_obj['che'].src = che_img10;
		}

		if (che_point[che_point_order].x == 186 && che_point[che_point_order].y == 96) {
			logo_widget_obj['che'].src = che_img11;
		}

		if (che_point[che_point_order].x == 243 && che_point[che_point_order].y == 122) {
			logo_widget_obj['che'].src = che_img12;
		}

		if (che_point[che_point_order].x == 263 && che_point[che_point_order].y == 113) {
			logo_widget_obj['che'].src = che_img13;
		}

		if (che_point[che_point_order].x == 293 && che_point[che_point_order].y == 109) {
			logo_widget_obj['che'].src = che_img14;
		}

		if (che_point[che_point_order].x == 328 && che_point[che_point_order].y == 110) {
			logo_widget_obj['che'].src = che_img15;
		}

		if (che_point[che_point_order].x == 356 && che_point[che_point_order].y == 126) {
			logo_widget_obj['che'].src = che_img16;
		}

		if (che_point[che_point_order].x == 412 && che_point[che_point_order].y == 127) {
			logo_widget_obj['che'].src = che_img17;
		}

		if (che_point[che_point_order].x == 428 && che_point[che_point_order].y == 64) {
			logo_widget_obj['che'].src = che_img18;
		}

		if (che_point[che_point_order].x == 440 && che_point[che_point_order].y == 39) {
			logo_widget_obj['che'].src = che_img20;
		}

		if (che_point[che_point_order].x == 460 && che_point[che_point_order].y == 30) {
			logo_widget_obj['che'].src = che_img21;
		}

		if (che_point[che_point_order].x == 473 && che_point[che_point_order].y == 6) {
			logo_widget_obj['che'].src = che_img22;
		}

		logo_widget_obj['che'].x = che_point[che_point_order].x;
		logo_widget_obj['che'].y = che_point[che_point_order].y;

		for (i in logo_widget_obj) {
			if (logo_widget_obj[i].src != null) {

				if (che_point_order > 10) {
					if (logo_widget_obj[i].id != 'che') {
						logo_panel.drawImage(logo_widget_obj[i].src, logo_widget_obj[i].x, logo_widget_obj[i].y);
					}

					logo_panel.drawImage(logo_widget_obj['che'].src, logo_widget_obj['che'].x, logo_widget_obj['che'].y);

				} else {
					logo_panel.drawImage(logo_widget_obj[i].src, logo_widget_obj[i].x, logo_widget_obj[i].y);
				}

			}
		}
		che_point_order = (che_point_order + 1) == che_point.length ? 0 : che_point_order + 1;
		cheAnimation = setTimeout(cAnimation, cspeed);
	}

var set_nav_obj = function() {
		/*
		 * var ahome = new PxxCanvas('home', nav_canvas, nav_obj); ahome.x = 81;
		 * ahome.y =23; ahome.width = 40; ahome.height = 17; ahome.click =
		 * function(){ window.location.href= ahome_link; } nav_widget_obj['home'] =
		 * ahome;
		 *
		 *
		 * var services = new PxxCanvas('services', nav_canvas, nav_obj); services.x =
		 * 139; services.y =20; services.width = 70; services.height = 19;
		 * services.click = function(){ window.location.href= services_link; }
		 * nav_widget_obj['services'] = services;
		 *
		 *
		 * var enga = new PxxCanvas('enga', nav_canvas, nav_obj); enga.x = 227;
		 * enga.y =23; enga.width = 110; enga.height = 20; enga.click = function(){
		 * window.location.href= enga_link; } nav_widget_obj['enga'] = enga;
		 *
		 *
		 * var about = new PxxCanvas('about', nav_canvas, nav_obj); about.x = 352;
		 * about.y =23; about.width = 72; about.height = 20; about.click =
		 * function(){ window.location.href= about_link; } nav_widget_obj['about'] =
		 * about;
		 *
		 * var cont = new PxxCanvas('cont', nav_canvas, nav_obj); cont.x = 441;
		 * cont.y =23; cont.width = 86; cont.height = 21; cont.click = function(){
		 * window.location.href= cont_link; } nav_widget_obj['cont'] = cont;
		 *
		 * var cli= new PxxCanvas('cli', nav_canvas, nav_obj); cli.x = 441; cli.y
		 * =23; cli.width = 86; cli.height = 21; cli.click = function(){
		 * window.location.href= cli_link; } nav_widget_obj['cli'] = cli;
		 */
	}

var lAnimation = function() {
		canvasobja.clearRect(110, 0, 70, 240);
		// widget_obj['btn_light']
		lstae = (lstae == 'no' ? 'red' : 'no');
		canvasobja.drawImage(widget_obj['btn_light'].src[lstae], widget_obj['btn_light'].x, widget_obj['btn_light'].y);
		lightAnimation = setTimeout(lAnimation, 50);
	}

var nAnimation = function() {

		// nav_canvas.clearRect(0 ,0 , 1000, 100);
		var navimg = document.getElementById("navImg");

		var ua = navigator.userAgent.toLowerCase();
		var ip = ua.match(/iPad/i);

		{
			if (navb == 4) {
				navimg.src = "images/nav4.png";
				navb = 1;

			} else if (navb == 3) {

				navimg.src = "images/nav2.png";
				navb += 1;

			} else if (navb == 2) {

				navimg.src = "images/nav3.png";
				navb += 1;

			} else if (navb == 1) {

				navimg.src = "images/nav1.png";
				navb += 1;

			}

			navAnimation = setTimeout(nAnimation, 100);
		}
	}

PxxCanvas.ready(function() {



	var flashvar = "ahome_link=" + ahome_link + "&services_link=" + services_link + "&enga_link=" + enga_link + "&about_link=" + about_link + "&cont_link=" + cont_link + "&cli_link=" + cli_link + "&client_link=" + client_link + "&fb_link=" + fb_link + "&tw_link=" + tw_link + "&tu_link=" + tu_link + "&ig_link=" + ig_link;


	if (document.all && window.external || (navigator.userAgent.indexOf("Firefox") != -1) || (navigator.userAgent.indexOf('Opera') >= 0)) {



		document.getElementById('box2').style.display = 'none';
		document.getElementById('nav').style.display = 'none';


		var patam = {
			wmode: 'transparent'
		};
		swfobject.embedSWF("CrazyMouse.swf?flashvar=" + flashvar, "flash", "1280", "800", "9.0.0", "expressInstall.swf", '', patam);
		document.getElementById('bo').style.overflow = 'auto';


	
		document.getElementById("fb").setAttribute("href", fb_link);
		document.getElementById("tw").setAttribute("href", tw_link);
		document.getElementById("tu").setAttribute("href", tu_link);
		document.getElementById("ig").setAttribute("href", ig_link);

	} else {

		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/iPad/i) == "ipad") {
			btnsound = null;
		} else {
			btnsound = PxxCanvas.getHtmlObj('btnsound');
		}

		document.getElementById('box4').style.display = 'none';
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);


		document.getElementById('fb').href = fb_link;
		document.getElementById('tw').href = tw_link;
		document.getElementById('tu').href = tu_link;
		document.getElementById('ig').href = ig_link;



		var html_obj = PxxCanvas.getHtmlObj('panel');
		var canvas_obj = PxxCanvas.getCanvasObj('panel');
		canvasobja = PxxCanvas.getCanvasObj('panel');
		sound = PxxCanvas.getHtmlObj('sound');

		// nav_obj = PxxCanvas.getHtmlObj('nav');
		// nav_canvas = PxxCanvas.getCanvasObj('nav');
		logo_html_obj = PxxCanvas.getHtmlObj('logo_panel');
		logo_canvas_obj = PxxCanvas.getCanvasObj('logo_panel');

		setObj(canvas_obj, html_obj);

		var ua = navigator.userAgent.toLowerCase();
		var s;
		s = ua.match(/iPad/i);

		if (s == "ipad") {
			widget_obj['music_btn'].state = 'off';
		}

		setLogoObj(logo_canvas_obj, logo_html_obj);
		// set_nav_obj();
		panel = new PxxCanvas('panel', canvas_obj, html_obj);
		logo_panel = new PxxCanvas('logo_panel', logo_canvas_obj, logo_html_obj);

		loadImage(panel);
		logoLoadImage(logo_panel);
		fengAnimation = setTimeout(fAnimation, fspeed);
		PxxCanvas.click(html_obj, widget_obj);
		// PxxCanvas.click(nav_obj,nav_widget_obj);
		PxxCanvas.mousedown(html_obj, widget_obj);
		PxxCanvas.mouseup(html_obj, widget_obj);
		PxxCanvas.touchmove(html_obj, widget_obj);
		fspeed = 96;

		navAnimation = setTimeout(nAnimation, 100);

		logoA = setTimeout(logoAnimation, 33);
		sound.play();
	}

	// var html_obj = PxxCanvas.getHtmlObj('panel');
	// var canvas_obj = PxxCanvas.getCanvasObj('panel');
	// canvasobja = PxxCanvas.getCanvasObj('panel');
	// sound = PxxCanvas.getHtmlObj('sound');
	// btnsound = PxxCanvas.getHtmlObj('btnsound');
	//	
	//	
	// nav_obj = PxxCanvas.getHtmlObj('nav');
	// nav_canvas = PxxCanvas.getCanvasObj('nav');
	//	
	// logo_html_obj = PxxCanvas.getHtmlObj('logo_panel');
	// logo_canvas_obj = PxxCanvas.getCanvasObj('logo_panel');
	//	
	// setObj(canvas_obj, html_obj);
	//	
	// var ua = navigator.userAgent.toLowerCase();
	// var s;
	// s = ua.match(/iPad/i);
	//	
	// if(s=="ipad"){
	// widget_obj['music_btn'].state = 'off';
	// }
	//	
	//	
	//	
	// setLogoObj(logo_canvas_obj, logo_html_obj );
	// set_nav_obj();
	// panel = new PxxCanvas('panel', canvas_obj, html_obj);
	// logo_panel = new PxxCanvas('logo_panel', logo_canvas_obj,
	// logo_html_obj);
	//	
	// loadImage(panel);
	// logoLoadImage(logo_panel);
	// fengAnimation = setTimeout(fAnimation, fspeed);
	// PxxCanvas.click(html_obj, widget_obj);
	// PxxCanvas.click(nav_obj,nav_widget_obj);
	// PxxCanvas.mousedown(html_obj, widget_obj);
	// PxxCanvas.mouseup(html_obj, widget_obj);
	// PxxCanvas.touchmove(html_obj, widget_obj);
	// fspeed = 96;
	// navAnimation = setTimeout(nAnimation, 50);
	//			
	//	
	//			
	//	
	// logoA = setTimeout(logoAnimation, 33);
	// sound.play();
})