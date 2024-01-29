import { useState, useEffect } from "react";

const Test =  () =>{
    const[text,setText] = useState ('hello');
    const [windowwidth, setwindowwidth] = useState(window.innerWidth)

    const handleclick = ()  =>{
        setText('john');
    }
    const handleclickTwo = ()  =>{
        setText('jane');
    }

   const change = useEffect(()=>{
        console.log('text berubah')
    },[text]);

    const widthhandler = () =>{
        setwindowwidth(window.innerWidth)
    };

    
    

    useEffect (() =>{
        window.addEventListener('resize',widthhandler);
    },[]);
  if(window.innerWidth <= 300){
    return console.log('inner width 300')
  };

return(
    <div>
        {windowwidth}
        
 <p>{text}</p>

 <button onClick={handleclick}>clicke me</button>
 <button onClick={handleclickTwo}>clicke me</button>
 </div>
);
}
export default Test