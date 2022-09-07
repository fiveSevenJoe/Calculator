let display = document.querySelector("#display")
let btn = Array.from(document.querySelectorAll(".btn"))


btn.map(btn => {
    btn.addEventListener("click", (e) =>{
        
        switch(e.target.innerText){
            case 'C': 
               display.innerText = "";
                 break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }

                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch{
                   display.innerText = "Doubt It!";
                    }
                        break;
                     

                default:
                display.innerText += e.target.innerText
        }
        
    })
})