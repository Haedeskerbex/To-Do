 document.addEventListener("DOMContentLoaded",()=>{
        let task="";
        const olOne=document.getElementById("taskToComplete");
        const olTwo=document.getElementById("taskCompleted");
        const button= document.getElementById("submit");
        const text=document.getElementById('text');

        button.addEventListener('click',e =>{
                if(text.value.trim()==""){
                        alert("Enter a task!");
                }
                else{
                const li=document.createElement("li");
                task=text.value.trim();
                text.value="";
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
                }
        })


        text.addEventListener('keypress',(e)=>{
                if(e.key=='Enter'){
                e.preventDefault();
                button.click();
                }
        })
})

