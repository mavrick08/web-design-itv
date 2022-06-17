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
    console.table(data);
}

function my_para_func(num1,num2){
    let res = num1*num2;
    alert(res);
}

function loop_example(){
    for(let i=1; i < 11;i++)
    {
        console.log(i);
    }
}

function loop_example_array()
{
    var cars = ["Maruti","Tata","BMW","Ford","Tata"];
    let cars_length = cars.length;
    for (let i=0; i<cars_length;i++)
    {
        console.log(cars[i]);
    }
}

function loop_example_object(){
    let data = {fname:"steve",lname:"jobs",age:52};
    for (let i in data){
        console.table(i,data[i]);
    }
}


function loop_example_while(){
    let i = 1;
    while(i<=10)
    {
        console.log(i);
        i++;
    }
}

function loop_break_statement(){
    for(let i=1; i<=10;i++){
        if(i == 7)
        {
            break;
        }
        console.log(i);
    }

}

function loop_continue_example(){
    for(let i=1;i<=10;i++)
    {
        if(i==5)
        {
            continue;
        }

        console.log(i);
    }
}

function condition_example()
{
    let age = 18;
    let inp_age = 15;
    if(inp_age > age)
    {
        alert("Eligible to Vote");
    }
    else
    {
        alert("Not Eligible to Vote");
    }

}


function test(){
    let num=0;
    while(num<10){
        
        if(num==5){
            continue;
            num++;
        }
    console.log(num);
    }
}


function multi_condition()
{
    let age = 18;
    let inp_age = 21;
    let country = "INDIA";

    if(inp_age>age && country=="india")
    {
        alert('Eligible to Vote');
    }
    else
    {
        alert('Not Eligible to Vote');
    }
}

function if_elseif_else()
{
    let time = 18;

    if(time>=6 && time<=12)
    {
        alert("Good Morning");
    }

    else if(time>12 && time<=15)
    {
        alert('Good AfterNoon');
    }

    else if(time>15 && time<=19)
    {
        alert('Good Evening');
    }
    
    else if(time>19 && time<=24)
    {
        alert('Good Night');
    }

    else
    {
        alert('Sorry Cannot Wish');
    }

}

function join_method_example(){
    const fruits = ['apple','grapes','mango'];
    let new_fruits = fruits.join(":");
    alert(new_fruits); 
}

function pop_example(){
    const fruits = ['apple','grapes','mango'];
    let new_fruits = fruits.pop();
    alert(new_fruits);
    alert(fruits);
}

function push_example(){
    const fruits = ['apple','grapes','mango'];
    fruits.push("Watermelon");
    alert(fruits);
}

function change_value_via_index(){
    const fruits = ['apple','grapes','mango'];
    fruits[1] = "kiwi"
    alert(fruits);
}

function delete_value(){
    const fruits = ['apple','grapes','mango'];
    delete fruits[0];
    alert(fruits);
}


function concat_array()
{
    var arr1 = ["Maharashtra","Punjab","Goa"];
    var arr2 = ["Mumbai","Chandigarh","Panji"];
    var arr3 = arr1.concat(arr2);
    alert(arr3);

}


function sort_array(){
    var arr1 = ["Maharashtra","Punjab","Goa"];
    arr1.sort();
    alert(arr1);
}

function sort_number(){
    var arr2 = [100,23,59,67,33];
    arr2.sort((a,b)=>a-b);
    alert(arr2);
}


