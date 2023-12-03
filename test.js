let btn=document.querySelector('form');
btn.addEventListener('click',(e)=>{
    let Name1 = document.getElementById('name').value;
    let password = document.getElementById('pwd').value
    e.preventDefault();
    console.log(Name1,password);
})