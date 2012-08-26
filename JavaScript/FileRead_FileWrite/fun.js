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
        if (file_obj) {
            
            var read = new FileReader();
            read.onload = function(e) {
                //console.log(e.target.result);
                console(e.target.result);
                clearFile();
            }
            read.readAsText(file_obj,'UTF-8');
        }
    }

    //clear file input value
var clearFile = function() {
        var file_input = $("#file");
        file_input.after(file_input.clone().val(""));
        file_input.remove();
    }