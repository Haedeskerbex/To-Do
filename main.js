 document.addEventListener("DOMContentLoaded",()=>{
        let task="";
        let flag=false;
        const olOne=document.getElementById("taskToComplete");
        const olTwo=document.getElementById("taskCompleted");
        const button= document.getElementById("submit");
        button.addEventListener('click',e =>{
                const li=document.createElement("li");
                task=document.getElementById("text").value;
                olOne.append(li);
                li.innerText=task+'\n';
                li.classList.add('li');
                flag=true;

                let button=document.createElement('button');
                button.textContent="Task Done!";
                li.append(button);
                button.classList.add('submit2');
                                
                
        })
        submit2.addEventListener('click',e=>{
                
        })
        

 })

