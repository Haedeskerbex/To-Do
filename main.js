 document.addEventListener("DOMContentLoaded",()=>{
        let task="";
        let flag=false;
        const olOne=document.getElementById("taskToComplete");
        const olTwo=document.getElementById("taskCompleted");
        const li=document.createElement("li")
        const button= document.getElementById("submit");
        button.addEventListener('click',e =>{
                task=document.getElementById("text").value;
                olOne.append(li);
                li.innerText=task;
                flag=true;

                if(flag==true){
                        let button=document.createElement('button');
                        button.textContent="Task Done!";
                        document.querySelector(".main2").append(button);
                        button.classList.add('submit2');
             
                    
                }
        })
        

 })

