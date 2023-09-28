const opt = document.querySelectorAll(".opt");
const submit= document.getElementById("btn");

submit.addEventListener("click",()=>{
    // for(var i=0; i<opt.length; i++){
    //         // if(opt[i].innerHTML="1.opt 1"){
    //         //     console.log("success");
    //         // }
            
    //     }
    submit.innerHTML="CLEAR SUBMIT"
    submit.style.backgroundColor="lightgreen"
    submit.style.color="gray"
    opt[0].style.backgroundColor="green";
}
)

for(var i=0; i<opt.length; i++){
    console.log(i);
    opt[i].addEventListener("click",()=>{
        console.log("hello");
    })
}