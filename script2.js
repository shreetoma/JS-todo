var pending=0;
var completed=0;

function addElement(){
    
    var input = document.getElementById("element").value;
    
   
    if(input == 0){
        alert("Please enter some value");
    }
    else{
        var li= document.createElement("li");
        //li.id=counter;
        //++counter;
       li.className="col-md-12"
         var text= document.createTextNode(input);
    //li.appendChild(text);
        var label= document.createElement("label");
        label.classList.add("col-md-7","customed");
        var btn= document.createElement("button");
        //btn.setAttribute("value","Delete");
       btn.innerText="Delete";
        btn.className="edit";
        btn.classList.add("btn","btn-default","col-md-2");
        btn.onclick=del;
        
        var check= document.createElement("input");
        check.type="checkbox";
        check.innerText="Complete";
        check.classList.add("col-md-1","pull-right");
        var label1 =document.createElement("label");
        label1.className="col-md-2";
        label1.innerText="Complete";
        check.onchange=cmplt;
        
        
        //check.setAttribute("type","checkbox");
        label.appendChild(text);
        li.appendChild(label);
        li.appendChild(btn);
        li.appendChild(check);
        li.appendChild(label1);
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("element").value =" ";
    pendingTask();
   
}

var del=function delteTask()
{
   // 
    //console.log(this.parentElement);
    var list=this.parentElement;
    console.log(list.parentElement);
    document.getElementById(list.parentElement.id).removeChild(list);

    alert("Delete Function Called");
    pendingTask();
    completedTask();
}
var cmplt=function completeTask(){
    alert("Task Completed");
    var list1=this.parentElement;
    /*if (list1.hasChildNodes()) {
        list1.removeChild(list1.childNodes[3]);
        list1.removeChild(list1.childNodes[2]);
    }*/
    var lsit2 =list1.childNodes;

    for(var i=0;i< lsit2.length;i++)
    {
        if(lsit2[i].type=="checkbox")
        {
            list1.removeChild(lsit2[i]);
        }

    }


    list1.removeChild(list1.lastChild);



    document.getElementById("taskscompleted").appendChild(list1);
    pendingTask();
    completedTask();

}
function pendingTask(){
    pending=(document.getElementById("tasks").getElementsByTagName("li").length);
    document.getElementById("pendingtask").innerHTML=pending;
}
function completedTask(){
    completed=(document.getElementById("taskscompleted").getElementsByTagName("li").length);
    document.getElementById("completedtask").innerHTML=completed;
}
/*function taskDefault(){
    alert("Hello Shreetoma!!.. Start ur todo..");
 document.getElementById("pendingtask").innerHTML=pending;
document.getElementById("completedtask").innerHTML=completed;
}*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(today);
    h=checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 3600000);
    storage();
   
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
function logIn(){
    location.href="/index17.html";
    console.log("Hello");
   // localStorage.name="shree";
    if(document.getElementById("userName").value=="Shree" && document.getElementById("pwd").value=="1234"){
localStorage.name=document.getElementById("userName").value;
console.log("Welcome back" + localStorage.name);
    //document.getElementById("store").innerHTML= "Welcome back" + localStorage.name;
}
    else{
        alert("Wrong user ID");
    }
}
function storage(){
     document.getElementById("store").innerHTML= "Welcome back   " + localStorage.name;
}
function weather (){
    var url = 'http://api.apixu.com/v1/current.json?key=23319fb777b04d468cc173118173112&q=Pune'
    fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
        
        console.log(data.current);
       
        //console.log(document.getElementById("weatherUl").hasChildNodes);
        
        var u=document.createElement("li");
        var location= document.createElement("span");
        var condition= document.createElement("span");
        var condition1= document.createElement("span");
        var temp= document.createElement("span");
        var humidity= document.createElement("span");
        var label2=document.createElement("label");
        location.innerText=data.current;
        condition.innerText=data.current.condition.text;
        condition1.innerText=data.current.condition.icon;
        temp.innerText=data.current.temp_c;
        humidity.innerText=data.current.humidity;
        u.appendChild(condition);
         u.appendChild(condition1);
         u.appendChild(temp);
         u.appendChild(humidity);
        document.getElementById("weather").appendChild(u);
        
    
    })
  
  .catch(function(error) {
        
    console.log(error);
  });  
}