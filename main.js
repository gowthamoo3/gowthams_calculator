let result;
let typedExpression;
function getResult()
{
    typedExpression =document.getElementById("caldisplay").value
    console.log("Typed Expression  "+typedExpression);
    if(typedExpression)
    result=eval(typedExpression);
    document.getElementById("caldisplay").value=result;
    console.log("Result "+result);
}

function appendString(string)
{
    document.getElementById("caldisplay").value=document.getElementById("caldisplay").value+string
}

function clearKeys()
{
document.getElementById("caldisplay").value="";
}
