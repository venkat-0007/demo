function calc(num){
    document.calcForm.textview.value = document.calcForm.textview.value + num;      
}
function equal()  {  
    var exp = document.calcForm.textview.value;  
    if(exp)  
    {  
      document.calcForm.textview.value = eval(exp)  
    }  
}  
function backspace()  
{  
    var exp = document.calcForm.textview.value;  
    document.calcForm.textview.value = exp.substring(0, exp.length - 1); 
}  