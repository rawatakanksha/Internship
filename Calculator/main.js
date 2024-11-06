const numValBtn=document.querySelectorAll("button[data-type=operand]");
const output=document.getElementById("output");
const divide=document.getElementById("divide");
const mul=document.getElementById("multiply");
const equals=document.getElementById("equal")

const operand=document.querySelectorAll("button[data-type=operator]")
let buttons= document.querySelectorAll('.btnDisplay ')
let is_operator=false;
let opDisplay='';
let ex;
function display(e){   
        e.preventDefault();
             console.log("valueee")  
             
             if(e.target.innerHTML == "="){
                console.log("equal",typeof(opDisplay));     
               if(opDisplay.includes('x')){
                opDisplay=opDisplay.replace("x","*")
            }
                else if(opDisplay.includes('÷')){
                opDisplay=opDisplay.replace("÷",'/')
                if(opDisplay.includes('/0')){
                    output.value="error "
                    return;
                }
                
            }
                
                opDisplay= eval(opDisplay);
                
                console.log("equal",opDisplay);
                output.value=opDisplay;}
            //  }
             else if(e.target.innerHTML=='Del'){
                    opDisplay=''
                    output.value=opDisplay;
                 }

                 
                  
             else if(e.target.innerHTML=='AC'){
                    // opDisplay=opDisplay.slice(0,-1);
                    // output.value=opDisplay;
                    
                    // opDisplay=opDisplay.substring(0, opDisplay.length-1)
                    // output.value=opDisplay;

                    console.log('removeee',output.value)

                    if (opDisplay.length === 0) {
                        console.log('Nothing to remove!');
                        return;
                    }
                   let display=opDisplay.split("")                   
                    display.pop();
                    console.log(display);
                      opDisplay=display.join("");
                    output.value=opDisplay;
                    console.log('accccc',opDisplay)    
                    }

            //  else if(e.target.innerHTML==='÷'){
            //     opDisplay=opDisplay+e.target.textContent;   
            //  output.value=opDisplay
            //     let divOP=opDisplay.split("")
            //     console.log("dddiiivvv",divOP);
               
                
            //     if(divOP[divOP.length-1]=='0'){
            //         alert("error")
            //     }
            //     else{
            //         divOP
            //     }
            //  }

             else {               
             opDisplay=opDisplay+e.target.textContent;
            //    output.value+=e.target.value;     
             output.value=opDisplay
            console.log('displayyy',opDisplay);}
        
}

Array.from(buttons).forEach((btn)=>{
     btn.addEventListener('click',display)
})





