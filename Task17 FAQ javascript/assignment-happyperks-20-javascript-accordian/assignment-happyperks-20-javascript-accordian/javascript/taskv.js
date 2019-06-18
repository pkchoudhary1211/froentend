var quiz =[
    {que : "what is the capital of india?", ans: "c" ,a : "surat" , b : "goa" , c : "delhi", d : "pune" },
    {que : "what is the capital of gujrat?",ans:"a",a : "gandhinagar" , b : "bhopal" , c : "culcatta", d : "daman"},
    {que : "what is the capital of maharastra?",ans:"b",a : "vapi" , b : "mumbai" , c : "pune", d : "kochin"},
    {que : "what is the capital of karnataka?",ans:"d",a : "landon" , b : "bejing" , c : "bhopal", d : "bengluru"}
   
];

var response = [];
 
document.getElementById("ques").innerHTML=quiz[0].que;
document.getElementById("next").setAttribute("data-id",1);
document.getElementById("l1").innerHTML=quiz[0].a;
    document.getElementById("l2").innerHTML=quiz[0].b;
    document.getElementById("l3").innerHTML=quiz[0].c;
    document.getElementById("l4").innerHTML=quiz[0].d;


document.getElementById("next").addEventListener("click", function(event){
//debugger;
  event.preventDefault();
    
    
    var i = document.getElementById("next").getAttribute("data-id");
     var radios = document.getElementsByName('city');

    var isSelected = 0;
    for (var j = 0, length = radios.length; j < length; j++) {
    if (radios[j].checked) {
        // do whatever you want with the checked radio
        if(radios[j].value == quiz[i-1].ans ){
            quiz[i-1].mark =1;
        }
        else{
            quiz[i-1].mark =0;
        }
        radios[j].checked = false;
        isSelected =1
        // only one radio can be logically checked, don't check the rest
        break;
        }
        
    }
    if(isSelected == 0){
        document.getElementById("res").innerHTML="please give the answer ";
    }
    else{
    var g=parseInt(i);
    if(g == quiz.length)
     {   var tot =0;
        for (var j = 0, length = quiz.length; j < length; j++) {
        tot+=quiz[j].mark;
        }
        document.getElementById("res").innerHTML="result id " + tot;
    }
    else{
    
   
    
    console.log(i);
    document.getElementById("ques").innerHTML=quiz[i].que;
     document.getElementById("l1").innerHTML=quiz[i].a;
    document.getElementById("l2").innerHTML=quiz[i].b;
    document.getElementById("l3").innerHTML=quiz[i].c;
    document.getElementById("l4").innerHTML=quiz[i].d;
    
    
            i=parseInt(i)+1;
        
    }
    
    
    document.getElementById("next").setAttribute("data-id",i);
    
    
    console.log("did"+i);
    }
});









