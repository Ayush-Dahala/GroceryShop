"strict-mode"

const btn=document.querySelector(".btn");
const name=Boolean(document.querySelector(".name").value);
console.log(name)
const email=Boolean(document.querySelector(".email").value);
const password=Boolean(document.querySelector(".password").value);
const phone=(document.getElementById("phone").value);

const confirmPassword=Boolean(document.querySelector(".confirmPassword").value);


btn.addEventListener('click',()=>{
    console.log(phone);
})