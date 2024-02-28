let todolist=[{item:'Like' , duedate:'12/2/2014'}];
display();

function addtodo()
{
  let inputElement=document.querySelector('#main-input');

  let dateElement=document.querySelector('#todo-date');

  let todoitem=inputElement.value;
  let tododate=dateElement.value;

  todolist.push({item:todoitem ,duedate:tododate});

  
  // console.log(todolist);
  inputElement.value='';
  dateElement.value='';
  display();
}

function display()
{
  let diselement=document.querySelector('.todo-item');
  let newhtml='';
  diselement.innerText='';
  for(let i=0;i<todolist.length;i++)
  {
    let item=todolist[i].item;
    let duedate=todolist[i].duedate;
    newhtml+=`
    
      <span>${item}</span>
      <span>${duedate}</span>
      <button  class="js-del-btn"onclick="todolist.splice(${i},1);display()">Delete</button>
    
    `;
  }
  diselement.innerHTML=newhtml;
}
