function formValidation(){
    let user=document.getElementById('username').value;
    let pass=document.getElementById('password').value;
    let cpass=document.getElementById('cpass').value;
    let mnum=document.getElementById('mnum').value;
    let email=document.getElementById('email').value;
    console.log(user,pass,cpass,mnum,email);
    if(user=="")
    {
        document.getElementById('username').innerHTML="please fill out the field";
        return false;
    }
    if((user.length<7)||(user.length>15))
    {
        document.getElementById('username').innerHTML="please enter the charecter between 7to 15"
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById('username').innerHTML="please enter the string"
        return false;
    }
    if(pass=="")
    {
        document.getElementById('password').innerHTML="password can be an empty";
        return false;
    }
    if((pass.length>5) && (pass.length<10))
    {
      document.getElementById('password').innerHTML="the password length"
    }
    if(pass!=cpass)
    {
        document.getElementById('password').innerHTML="password is not matching"  
    }
    if(num="")
    {
        document.getElementById('mnum').innerHTML="number  cant be empty"
    }
    if(isNaN(mnum))
    {
        document.getElementById('mnum').innerHTML="String are not allowed"
    }
    if((num.length<0)||(num.length>=10))
    {
        document.getElementById('mnum').innerHTML="the length of the number should be 10 digit";
    }

}