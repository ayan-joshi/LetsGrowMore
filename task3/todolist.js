const input = document.getElementById("input");
const add = document.getElementById("add");
const todo = document.getElementById("todo");


add.onclick= ()=>{
    if(!input.value){
        return;
    }
    
    let addTodo = document.createElement("p");

    let task = document.createElement("input");
    task.classList.add("task");
    task.value = input.value;
    task.setAttribute("readonly", true);
    addTodo.appendChild(task);


    let com = document.createElement("button");
    com.classList.add("complete");
    com.innerHTML = "&#x2714;";
    addTodo.appendChild(com);

    com.onclick = ()=>{
        task.classList.toggle("toggle");
    }
    




    let edi = document.createElement("button");
    edi.classList.add("edit");
    edi.classList.add("fa");
    edi.innerHTML = "&#xf044";
    addTodo.appendChild(edi);

    edi.onclick = ()=>{
        if(task.attributes= "readonly"){
            task.removeAttribute("readonly");
            com.remove();
            close.remove();
            edi.remove();
            task.classList.add("taskup");

            let update = document.createElement("button");
                update.classList.add("update");
                update.innerHTML = "update";
                addTodo.appendChild(update);

                update.onclick = ()=>{
                    task.setAttribute("readonly", true);
                    update.remove();
                    task.classList.remove("taskup");

                    


                    let close = document.createElement("button");
                        close.classList.add("close");
                        close.innerHTML = "&#x274C;";
                        addTodo.appendChild(close);

                        close.onclick = ()=>{
                            addTodo.remove();
                        }
                }

            
        }
        
    }


    let close = document.createElement("button");
    close.classList.add("close");
    close.innerHTML = "&#x274C;";
    addTodo.appendChild(close);

    close.onclick = ()=>{
        addTodo.remove();
    }

    todo.appendChild(addTodo);
    input.value = "";

}