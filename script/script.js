const cardNumber=document.querySelector('.sp1');
const expire=document.querySelector('.sp2');
const cvv=document.querySelector('.sp3');
const inpCard=document.querySelector('#cartnumber');
const inpExpire=document.querySelector('#date');
const inpCvv=document.querySelector('#cvv');
const btn=document.querySelector('#btn');

const cart=document.querySelector('.cart');
let reg=/^\d+$/;

inpCard.addEventListener('input',(e)=>{
        let val=e.target.value;
        if(reg.test(val) && val.length<=16 ){
             
           cardNumber.innerHTML=val.toString()
           .replace(/\d{4}(?=.)/g, "$& ");;
      
       
                
        }if(val.length>16){
            inpCard.disabled=true; 
           
       }
});
inpExpire.addEventListener('input',(e)=>{
        let val1=e.target.value;
      
        // if (val1.length == 2) {
        //     val1 += " / ";
          
        // }
       expire.innerHTML=val1.toString().replace(/\d{2}(?=.)/g, "$&/ ");
   
         
       
       if(val1.length==4){
        inpExpire.disabled=true;      
   }
       
});
inpCvv.addEventListener('input',(e)=>{
        let val2=e.target.value;
       if(val2.length==3 && reg.test(val2)){
        cvv.textContent=val2;
       }if(val2.length>2){
            inpCvv.disabled=true; 
       }
      
       
});

inpCard.addEventListener("click",shaking)
function shaking(){
    cart.classList.toggle('shake');
}

  
 
    