function Pass(){
    var a=document.getElementById("Passw");
    if(a.value==="abcd")
    {
        alert("Correct!");
        return true;
    }
    else
    {
        alert("Incorrect!");
        return false;
    }
}
