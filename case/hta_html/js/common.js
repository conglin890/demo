$(function() {

			/* site public lever */

			$('#js-progress-bar').each(function() {
				var curr = $(this).find('li.ui-progress-bar-curr'), bar = $(this)
						.children('div.ui-progress-bar-rule');
				var w = curr.offset().left - $(this).offset().left;
				bar.animate({
							width : w + 13
						}, 500);
			});

			$('span.js-clikeNext').click(function() {
						$(this).next('input:submit').click();
					});

			$('input.js-file').kendoUpload();//

			$('input.icon-calendar').datepicker();
			$('input.icon-birthCalendar').datepicker({
						changeYear : true,
						yearRange : '1900:',
						defaultDate : '-27y'
					});

		});

var selectTime = function() {
	// 分隔时间段
	var filed = $('#time .col:last').index();
	for (i = 0; i <= filed; i++) {
		$('#time .col').eq(i).find('span').each(function() {
					if ($(this).html().indexOf('PM') > -1) {
						$(this).before('<hr />');
						return false;
					}
				})
	}
	$('.animate_box_div').css('top',
			'-' + $('#date .col .selected').index() * 230 + 'px');

	$('#date').find('span').click(function() {
				$('#date').find('span').removeClass('selected');
				$(this).addClass('selected');
				$('#date').find('input').val($(this).html());
				$('.animate_box_div').animate({
							'top' : '-' + $(this).index() * 230 + 'px'
						}, "slow");
			})

	$('#time').find('span').click(function() {
				$('#time').find('span').removeClass('selected');
				$(this).addClass('selected');
				$('#time').find('input').val($(this).html());
			})
}

var selectNumber = function() {
	var html = '';

	$('#select-applicantsNum').change(function() {
		$('.ui-rating span').removeClass('ui-rating-on');
		html = '';
		for (var i = 0; i < $(this).val(); i++) {
			$('.ui-rating span').eq(i).addClass('ui-rating-on');

			if (0 == i) {
				html += '<div class="form-row fn-clear"><span class="ui-people-index">A'
						+ (i + 1)
						+ '</span><div class="fn-left"> \
        	<label class="form-row-cell"><span>First Name</span><input type="text" class="input"></label> \
        	<label class="form-row-cell"><span>Last Name</span><input type="text" class="input"></label> \
            <label class="form-row-cell"><span>Mobile</span> <input type="text" class="input"> </label> \
			</div><div style="display:none;" class="fn-left"><label class="form-row-cell"><span>Application ID/Applicant ID</span> \
            <input type="text" class="input" style="display:none;"></label> \
                <label class="form-row-cell"> \
                        <span>Password</span> \
                        <input type="text" class="input" style="display:none;"/> \
                    </label>  \
                <div class="wrap-fogotID"><a  href="###">FORGOT YOUR APPLICANT ID?</a></div> \
            </div></div>';

			} else {
				html += '<div class="form-row fn-clear"><span class="ui-people-index">A'
						+ (i + 1)
						+ '</span><div class="fn-left"> \
            	<label class="form-row-cell"><span>First Name</span><input type="text" class="input"></label> \
            	<label class="form-row-cell"><span>Last Name</span><input type="text" class="input"></label> \
                <label class="form-row-cell"><span>Mobile</span> <input type="text" class="input"> </label> \
				</div><div style="display:none;" class="fn-left"><label class="form-row-cell"><span>Applicant ID</span> \
                <input type="text" class="input" style="display:none;" ></label><div class="wrap-fogotID"><a href="###">FORGOT YOUR APPLICANT ID?</a></div> \
                </div></div>';
			}

			$('.list-applicant-details').html(html);
			haveID();
			forgotID();
		}
	})
	$('.ui-rating span').mousedown(function() {
		html = '';
		$('.ui-rating span').removeClass('ui-rating-on');
		for (var i = 0; i <= $(this).index(); i++) {
			$('.ui-rating span').eq(i).addClass('ui-rating-on');
			html += '<div class="form-row fn-clear"><span class="ui-people-index">A'
					+ (i + 1)
					+ '</span><div class="fn-left"> \
        	<label class="form-row-cell"><span>First Name</span><input type="text" class="input"></label> \
        	<label class="form-row-cell"><span>Last Name</span><input type="text" class="input"></label> \
            <label class="form-row-cell"><span>Mobile</span> <input type="text" class="input"> </label> \
			</div><div style="display:none;" class="fn-left"><label class="form-row-cell"><span>Application ID/Applicant ID</span> \
            <input type="text" class="input" style="display:none;"></label> \
                <label class="form-row-cell"> \
                        <span>Password</span> \
                        <input type="text" class="input" style="display:none;"/> \
                    </label>  \
                <div class="wrap-fogotID"><a  href="###">FORGOT YOUR APPLICANT ID?</a></div> \
            </div></div>';
			$('.list-applicant-details').html(html);
		}
		$('#select-applicantsNum').val($(this).index() + 1);
		haveID();
		forgotID();
	})

}

var on_Off = function(obj) {
	obj.parent().parent().find('div').removeClass('ui-switch-off');
	if ('ui-switch' == obj.attr('class')) {
		obj.addClass('ui-switch-on');
		obj.parent().parent().find('div').eq(0).addClass('ui-switch-off');
	} else {
		obj.removeClass('ui-switch-on');
		obj.parent().parent().find('div').eq(1).addClass('ui-switch-off');
	}
}

var forgotID = function() {
	$('.wrap-fogotID a').bind('mouseup', function() {
				$('#wrap-forgotId').css('display', 'block');
				$("#wrap-forgotId").position({
							of : $(this),
							my : 'top center',
							at : 'bottom center',
							offset : '30 100'
						});
				$('body').unbind();
				$('body').bind('mousedown', function() {
							$('#wrap-forgotId').css('display', 'none');
						})
			})

	$('#wrap-forgotId').bind('mousedown', function(e) {
				e.stopPropagation();
	})
}

var haveID = function() {
	$('.ui-people-index').bind('click', function() {
				if ('ui-people-index' == $(this).attr('class')) {
					$(this).addClass('ui-people-index-on');
					$(this).parent().find('div').eq(0).css('display', 'none');
					$(this).parent().find('div').eq(1).css('display', 'block');
					$(this).parent().find('div').eq(0).find('input').css('display', 'none');
					$(this).parent().find('div').eq(1).find('input').css('display', 'block');
				} else {
					$(this).removeClass('ui-people-index-on');
					$(this).parent().find('div').eq(1).css('display', 'none');
					$(this).parent().find('div').eq(0).css('display', 'block');
					$(this).parent().find('div').eq(1).find('input').css('display', 'none');
					$(this).parent().find('div').eq(0).find('input').css('display', 'block');
				}
			})
}

var addMore = function() {
	$('#addmore').click(function() {
		$(this)
				.parent()
				.before('<div class="form-row fn-clear"><div class="form-row-cell form-row-cell-len2"> \
								<input type="text" class="input-short-side"> <input type="text" class="input-short"></div></div>');
	})

	$('#aaddmore').click(function() {
		$(this)
				.parent()
				.before(' <div class="form-row fn-clear"><label class="form-row-cell form-row-cell-len4"><input type="text" class="input"></label></div>');
	})
}

var step_8_3 = function() {

	/*
	 * 
	 * addBox = function(obj){ var add_box_parent = obj.parent().parent(); var
	 * add_box = obj.parent().parent().next('div');
	 * add_box.find('label').find('input').val(add_box_parent.find('label').find('select').eq(0).val() + ' ' +
	 * add_box_parent.find('label').find('input').val() + ' ' +
	 * (add_box_parent.find('label').find('select').eq(1).val() == '- select
	 * -'?'':add_box_parent.find('label').find('select').eq(1).val()))
	 *  }
	 * 
	 * $('.addbox label select').change(function(){ addBox($(this)) })
	 * 
	 * $('.addbox label input').keydown(function(){ addBox($(this)) })
	 */

	$('#currentProperty-year').change(function() {
				var v = $(this).val();
				var btn = $('#control-previousProperty');
				lock_switch(btn);
				if (v == '0') {
					if (!btn.hasClass('ui-switch-on')) {
						on_Off(btn);
					}
					$('#previous-property-detail').show();

				} else {
					if (btn.hasClass('ui-switch-on')) {
						on_Off(btn);
					}
					$('#previous-property-detail').hide();

				}
			}).change();

	// agree privacy
	$('#agree').click(showPrivacyDialog)
	$('#privacy-dialog-btn').click(function() {
				$('#agree').find(':checkbox').attr('checked', 'checked');
				hidePrivacyDialog();
			});

	$('#privacy-dialog-btn-no').click(function() {
				$('#agree').find(':checkbox').removeAttr('checked');
				hidePrivacyDialog();
			});

	$('#control-nextPage').click(function(e) {
				if ($('#agree').find(':checkbox').is(':checked') == false) {
					e.preventDefault();
					showPrivacyDialog();
				} else {
					$(this).closest('form').submit();
				}
			});
}

var step_4_5 = function() {
	

	$('input[type="text"]').click(function() {
				$(this).removeClass('noval');
			})
	$('.btn').click(function() {
	 	        var ryal = true;
				if ($('.list-applicant-details .form-row').find('input[type="text"]').val() == '' ) {
					$('.list-applicant-details').find('input[type="text"]').each(function() {				
								if ($(this).val() == '' && $(this).css('display') != 'none') {							
									$(this).addClass('noval');	
									ryal = false;							
								}
							});
			
						
								return ryal;	
							
					
						
							
				} 				
			})
}

function lock_switch($obj) {
	$obj.removeAttr('onclick').attr('title', 'Locked');
}

function unLock_switch($obj) {
	$obj.attr('onclick', 'on_Off($(this))').attr('title', 'Normal');
}