 document.addEventListener("DOMContentLoaded",()=>{
        let task="";
        const olOne=document.getElementById("taskToComplete");
        const olTwo=document.getElementById("taskCompleted");
        const button= document.getElementById("submit");
        button.addEventListener('click',e =>{
                const li=document.createElement("li");
                task=document.getElementById("text").value;
                olOne.appendChild(li);
                li.innerText=task+'\n';
                li.classList.add('li');

                let buttonDone=document.createElement('button');
                buttonDone.textContent="Task Done!";
                li.appendChild(buttonDone);
                buttonDone.classList.add('submit2');
                                
                buttonDone.addEventListener('click',e=>{
                        olOne.removeChild(li); 
                        olTwo.append(li);
                        li.classList.add('li2');
                        li.textContent=task+'\n';
                })  
        })
        
        

 })

