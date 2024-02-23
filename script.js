 let disp=document.querySelector(".display")
         function insertNumber(input){
        if(disp.innerHTML=="NaN" || disp.innerHTML=="undefined" || disp.innerHTML=="0"){
            disp.innerHTML=""   
            disp.innerHTML=disp.innerHTML+input

        } 
        else{
            disp.innerHTML=disp.innerHTML+input

        }  
         
         } 
        
         function operation(oper){
            if(disp.innerHTML=="NaN" || disp.innerHTML=="undefined"){
             disp.innerHTML=""   
             disp.innerHTML=disp.innerHTML + oper
            }
            else{
                disp.innerHTML=disp.innerHTML + oper
            }
         }

         function calculate(){
             try{
             disp.innerHTML=eval(disp.innerHTML);
             }
             catch(error){
                 disp.innerHTML="NaN"
             }
            
            
         } 
function clearDisplay(){
    disp.innerHTML=""
}         

function plusMinus(){
    if(disp.innerHTML=="NaN" || disp.innerHTML=="undefined"){
        disp.innerHTML=""
        disp.innerHTML=`(-${disp.innerHTML})`

    }
    else{ disp.innerHTML=`(-${disp.innerHTML})`}
       
       
    
}

function deleteLineByLine(){
    let l=disp.innerHTML.length;
    if(disp.innerHTML=="NaN" || disp.innerHTML=="undefined"){
        disp.innerHTML=""
    }
    else{
    disp.innerHTML=disp.innerHTML.substring(0,l-1)
    }
}


