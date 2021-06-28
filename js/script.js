//// USER OBJECT

var user={};



//variables

var btn =document.querySelector(".btn")
var form =document.querySelector(".form")
var userName=document.querySelector("#your__name")
var mail=document.querySelector("#your__email")
var phone=document.querySelector("#your__phone")
var password=document.querySelector("#your__password")




////regexp

 var regName=/^[A-Za-z.]{3,15}$/g;
 var regEmail=/^[A-z\d]{3,20}@[A-z\d]{3,8}[.][a-z]{2,6}$/g
 var regPassword=/^([A-z]|[0-9]|[\D]){6,15}$/g
 var regPhone=/^(0{1}[\d]{8})$|(\(\+374\)){1}[0-9]{8}$/g



 //// validate-required

phone.required=true
mail.required=true
userName.required=true
password.required=true



////variables inputs


var ok = document.querySelector("#ok1")
var erorMessage=document.querySelector("#eror1")
var eror= document.querySelector("#message1")
var namevalue=document.querySelector("#your__name").value
var eror2= document.querySelector("#message2")
var ok2 = document.querySelector("#ok2")
var erorMessag2=document.querySelector("#eror2")
var erorMessage3=document.querySelector("#eror3")
var eror3= document.querySelector("#message3")
var ok3=document.querySelector("#ok3")
var erorMessage4=document.querySelector("#eror4")
var eror4= document.querySelector("#message4")
var ok4=document.querySelector("#ok4")



///smbimt function

btn.addEventListener("click",()=>{
   if(regName.test(userName.value) && regEmail.test(mail.value) && regPassword.test(password.value) && regPhone.test(phone.value)){
      user.name=userName.value;
      user.email=mail.value;
      user.password=password.value;
      user.phone=phone.value
      btn.style.background="green"
      alert (`Congratulations on registering!`) 
     return form.setAttribute("action","action/index.html");


   }else{
     alert("please enter  in form")
     btn.style.background="red"
      
      

   }
})


//inputs --blur function



// name  blur


userName.addEventListener("blur",()=>{
    if(userName.value===""|| regName.test(namevalue) || userName.length===0 || !(regName.test(userName.value))){    
        ok.style.visibility="hidden"
       eror.style.visibility="visible"
       userName.style.border="3px solid red"
       erorMessage.style.visibility="visible"
       userName.style.color="red"
       eror.innerHTML="ERROR : please enter corect name"
       
       

  }  else {   
     eror.style.visibility="hidden"
    erorMessage.style.visibility="hidden"
     ok.style.visibility="visible"
     userName.style.border="3px solid green"  
     userName.style.color="black" 
     !(regName.test(userName.value))===true    
  }
})


//email   blur

mail.addEventListener("blur",()=>{
    if(mail.value==="" ||mail.length===0 || !(regEmail.test(mail.value))){
      ok2.style.visibility="hidden"
      eror2.style.visibility="visible"
      mail.style.border="3px solid red"
      erorMessag2.style.visibility="visible"
      eror2.innerHTML="ERROR : please enter corect email"
      email.style.color="red"
   
  
       

  } else {
   eror2.style.visibility="hidden"
   erorMessag2.style.visibility="hidden"
    ok2.style.visibility="visible"
    mail.style.border="3px solid green"
    !(regEmail.test(mail.value))===true
  mail.style.color="black"
    
  }
})



//password blur


password.addEventListener("blur",()=>{
   if(password.value==="" ||password.length===0  ||!(regPassword.test(password.value))){
     ok3.style.visibility="hidden"
     erorMessage3.style.visibility="visible"
    password.style.border="3px solid red"
     eror3.style.visibility="visible"
     eror3.innerHTML="ERROR : please enter corect password"
     password.style.color="red"

 } else {
  eror3.style.visibility="hidden"
  erorMessage3.style.visibility="hidden"
   ok3.style.visibility="visible"
  password.style.border="3px solid green"
  !(regPassword.test(password.value))===true
  password.style.color="black"
   
 }
})



///phone--blur

phone.addEventListener("blur",()=>{
   if(phone.value==="" ||phone.length===0 || !(regPhone.test(phone.value))){
     ok4.style.visibility="hidden"
     erorMessage4.style.visibility="visible"
    phone.style.border="3px solid red"
     eror4.style.visibility="visible"
     eror4.innerHTML="ERROR : please enter corect number"
     phone.style.color="red"

 } else {
  eror4.style.visibility="hidden"
  erorMessage4.style.visibility="hidden"
   ok4.style.visibility="visible"
 phone.style.border="3px solid green"
 !(regPhone.test(phone.value))===true
 phone.style.color="black"

 }
})


