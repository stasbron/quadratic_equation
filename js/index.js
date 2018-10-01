var a = Number(prompt("Enter value of a but not 0"));
var b = Number(prompt("Enter value of b"));
var c = Number(prompt("Enter value of c"));
if (a===0){
    document.write("this is not quadratic equation. 'a' should != 0");
}
else{
    var result = quadratic_equation(a,b,c);
    document.write(result);
}
    function quadratic_equation(a,b,c){
   var d = (b**2) - (4 * a * c);
   var result;
    if (d < 0){
        result = "there is no way to solve an equation because d<0";
    }else if (d > 0){
        var x1 = (- b - Math.sqrt(d)) / (2 * a);
        result = "x1= " + x1;
        var x2 = (-b + Math.sqrt(d)) / (2 * a);
         result += "<br>x2= " + x2
    }else if (d === 0){
        var x = (-b) / (2 * a);
        result = "d=0 that is why you can find only 1 root<br>x= " + x;
    }   
    return result;
}
   
    
    
