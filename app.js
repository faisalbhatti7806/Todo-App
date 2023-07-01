let input = document.querySelector(".entered-list");
let addList = document.querySelector(".add-list") ;
let task = document.querySelector(".task");

// add btn disable

input.addEventListener('keyup',  () =>{
if(input.value.trim != 0){
    addList.classList.add('active')
}else{
    addList.classList.remove('active')
}
})

// add new item to list

addList.addEventListener('click', ()=> {
    if(input.value.trim !=0){
        let newitem = document.createElement('div');
        newitem.classList.add('item');
        newitem.innerHTML=`
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
        </div>
        `
        task.appendChild(newitem);
        input.value='';
    }else{
        alert('Please enter a task');
    }
})

// delete item

task.addEventListener('click', (e)=>{
  if(e.target.classList.contains("fa-trash-can")){
    e.target.parentElement.parentElement.remove();
  }  
})

//edit item

task.addEventListener('click', (e)=>{
    if(e.target.classList.contains("fa-pen-to-square")){
      e.target.parentElement.parentElement.classList.toggle('completed');
    }  
  })