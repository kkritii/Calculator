function equal(){
    document.getElementById('textview1').value=0;
    var exp = document.form.textview.value;		
	if (exp) {
		document.form.textview1.value=eval(exp);
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