
let str= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
   let object={};
    for(let i=0;i<26;i++){
        object[str[i]]=1+i;
        
    }
        
        for( let key in object){
            console.log(key+"-"+object[key]);
        }