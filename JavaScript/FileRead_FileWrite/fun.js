/*

 @authors Sean <conglin.pro@gmail.com>

*/

//open file
var openFile = function() {
        var file_input = $('#file');
        file_input.click();
    }

    //read file
var readFile = function(file_obj) {
    // var text = ''
    //  for (i in document.getElementById('file')){
    //     //console.log(i)
    //     text+='-----'+i;


    //  }

    //  window.console.log(text)

    //  alert(text)
    //  
    //  
//     var file_upl = document.getElementById('file');
// file_upl.select();
// alert(document.selection.createRange().text)
// alert(file_obj)

        if (file_obj) {
            var read = new FileReader();
            read.onload = function(e) {
                //console.log(e.target.result);
                console(e.target.result);
                clearFile();
            }

            console.log($("#file").val())
            read.readAsText($("#file").val(), 'UTF-8');
        }
    }

    //clear file input value
var clearFile = function() {
        var file_input = $("#file");
        file_input.after(file_input.clone().val(""));
        file_input.remove();
    }


    //window.open('data:x-application/text,111','newwing');
    //document.execCommand("Bold",false,"")

function saveAsFun(blob, filename) {
    var URL = window.URL || window.webkitURL || window;
    var type = blob.type;
    var force_saveable_type = 'application/octet-stream';
    if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开
        var slice = blob.slice || blob.webkitSlice || blob.mozSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
    }

    var url = URL.createObjectURL(blob);
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = url;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
    URL.revokeObjectURL(url);
}

var saveAs = function() {

    }