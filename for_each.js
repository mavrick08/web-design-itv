
    const num = [100,200,45,9,16,3];
    let val = "";
    num.forEach(myFunc);
    document.getElementById('data').innerHTML = val;
    function myFunc(value,index,array)
    {
     val+=value+"<br>";   
    }