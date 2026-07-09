let input = document.getElementById('favchap');
let button = document.querySelector('button');
let list = document.getElementById("list");


button.addEventListener('click', ()=>{
    if (input.value.trim() !== '') {
        
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        
        deleteButton.textContent = '❌'
        deleteButton.addEventListener('click', ()=>{
            list.removeChild(li);
            input.focus();
        })
        
        li.append(deleteButton)
        
        list.append(li)
        input.value = '';
        input.focus();
    }
})



