function equal(){
    document.getElementById('textview1').value=0;
    var exp = document.form.textview.value;	
    var rootIdx = exp.search("√");
    if (rootIdx >= 0) {
        brokenExp = exp.split("√");
        if (brokenExp[0] === "") {
            document.form.textview1.value = Math.sqrt(eval(brokenExp[1]));
        } else {
            document.form.textview1.value = eval(brokenExp[0]) * Math.sqrt(eval(brokenExp[1]));
        }
    }
    else if (exp) {
        document.form.textview1.value=eval(exp);

    }
    else{
       document.form.textview1.value ='ERR'; 
    }
}
function back(){
    document.form.textview1.value=0;
    var exp = document.form.textview.value;		
	document.form.textview.value=exp.substring(0,exp.length-1);
}
function clr(){
    document.getElementById('textview').value='';
    document.getElementById('textview1').value=0;
}