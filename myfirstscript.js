function myfunc(){
    document.getElementById('p1').innerHTML = "I have changed the content";
}


function func2(){
    console.log("I am getting printed in console");
}

function func3(){
    alert('Hello I am acting as an alert');
}

function my_func_variable()
{
    let number1;
    number1 = 100;
    alert(number1);
}


function my_func_variable1(){
    let num1,num2,num3,total;
    num1 = 10;
    num2 = 20;
    num3 = 30;

    total = num1 + num2 + num3;
    alert(total);
}


function my_func_str(){
    var fname,lname;
    fname = "good";
    lname = "coder";

    // alert(fname+" "+lname);
    console.log(fname+" "+lname);
    
}

function const_price(){
    const p1 = 30;   //single line comment
    const p2 = 40;   /*  multi line comment */
    let total = p1 + p2;
    alert(total)
}


function demo_example(){
    //let name = "punit";
    //let name = "demo";

    var name = "punit";
    var name = "demo";
    alert(name);
}

function my_arr(){
    var cars = ["Maruti","Tata","BMW","Ford","Tata"];
    console.log(cars[2]);
}

function person_data(){
    let data = {fname:"steve",lname:"jobs",age:52};
    console.log(data);
}

function my_para_func(num1,num2){
    let res = num1*num2;
    alert(res);
}