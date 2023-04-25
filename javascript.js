const toggleBtn = document.getElementById("chk") 
 const body = document.body 
 const header = document.getElementById("head") 
  
 toggleBtn.addEventListener("click", function() { 
     body.classList.toggle("dark-mode") 
     header.classList.toggle("dark-mode-header") 
 } ) 
  
 const chk = document.getElementById('chk') 
  
 chk.addEventListener('changer', () => { 
     document.body.classList.toggle('dark') 
 })