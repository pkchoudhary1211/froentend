function f1nm(){
   
 
   var nm=document.getElementById("nameip").value;
    var pat = /^[a-zA-Z]+$/;
    var res=pat.test(nm);
    console.log(nm);
    if(nm == ""){
        document.getElementById("lbnm").innerHTML="Enter your name";
         document.getElementById("lbnm").style.color = "red";
        
        }
     else if(res==false){
        
    
            document.getElementById("lbnm").innerHTML="Enter alphabets only";
             document.getElementById("lbnm").style.color = "red";
       
    }
    else{
         document.getElementById("lbnm").innerHTML="";
    }
}

function f2emailnm(){
     var nm=document.getElementById("emailip").value;
    var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var res=pat.test(nm);
    console.log(nm);
    if(nm == ""){
        document.getElementById("lbemail").innerHTML="Enter your email";
         document.getElementById("lbemail").style.color = "red";
        
        }
     else if(res==false){
        
    
            document.getElementById("lbemail").innerHTML="Enter valid email only";
             document.getElementById("lbemail").style.color = "red";
       
    }
    else{
         document.getElementById("lbemail").innerHTML="";
    }
}

function f2pass(){
     var nm=document.getElementById("passip").value;
    var pat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var res=pat.test(nm);
    console.log(nm);
    if(nm == ""){
        document.getElementById("f2pass").innerHTML="Enter your password";
         document.getElementById("f2pass").style.color = "red";
        
        }
     else if(res==false){
            document.getElementById("f2pass").innerHTML="Enter valid password only";
             document.getElementById("f2pass").style.color = "red";
       
    }
    else{
         document.getElementById("f2pass").innerHTML="";
    }
}

function f2rpass(){
    debugger;
       var nm=document.getElementById("rpassip").value;
     var nm2=document.getElementById("passip").value;
    var pat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var res=pat.test(nm);
    console.log(nm);
    if(nm == ""){
        document.getElementById("f2rpass").innerHTML="Enter your  rpassword";
         document.getElementById("f2rpass").style.color = "red";
        
        }
     else if(nm != nm2){
            document.getElementById("f2rpass").innerHTML="Enter valid password only";
             document.getElementById("f2rpass").style.color = "red";
       
    }
    else{
         document.getElementById("f2rpass").innerHTML="";
    }
}