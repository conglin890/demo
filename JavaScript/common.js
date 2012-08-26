/*
 @authors Sean <conglin.pro@gmail.com>
*/

var console = function(content) {
        var html = '';

        html = '<div class="out"><div class="left">reslt</div><div class="right">' + content + '</div><div class="clear"></div></div>';
        if($('#console .out').length > 1){
            $('#console .out').eq(0).before(html);
        } else{
            $('#console').html(html);
        }
    }