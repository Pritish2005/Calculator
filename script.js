let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try{
                string=eval(string);
                if(string=='Infinity'){
                    string="Undefined Bro"
                }
                document.querySelector('input').value=string;
                // if(isNaN(string)){
                //     throw new Error("Invalid Syntax");
                // }
            } catch(error){
                var err="IDK Bro";
                document.querySelector('input').value=err;
            }
        }
        else if(e.target.innerHTML == 'C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            // if(!string.empty()){
            //     string="";
            //     document.querySelector('input').value=string;
            // }
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
