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
     var pending=(document.getElementById("tasks").getElementsByTagName("li").length);
    document.getElementById("pendingtask").innerHTML=pending;
}
function completedTask(){
    var completed=(document.getElementById("taskscompleted").getElementsByTagName("li").length);
    document.getElementById("completedtask").innerHTML=completed;
}