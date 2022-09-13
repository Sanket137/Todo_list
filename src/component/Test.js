import React,{useState} from "react";
import "./Test.css"

const Test = () => {

    const[text,setText] =useState("Light Mode")
    const[toggleBtn,setToggle] = useState(true)

    const toggler = () => {

        toggleBtn 
        ? setText("Dark Mode") 
        : setText("Light Mode")

        
        setToggle(!toggleBtn)
    }



  return (
    <div>
      {/* <div className="input-group">
        <span className="input-group-text"><i class="bi bi-check"></i></span>
        <div type="text" className="form-control">Hello World</div>
        <span className="input-group-text"><i class="bi bi-pencil-square"></i></span>
        <span className="input-group-text"><i class="bi bi-trash"></i></span>
      </div> */}

      <div>
        <h1>{text}</h1>
        
        {
            toggleBtn 
            ? <span onClick={toggler} className="btn btn-primary"><i class="bi bi-toggle-off"></i></span>
            : <span onClick={toggler} className="btn btn-dark"><i class="bi bi-toggle-on"></i></span>
        }
        
        
      </div>
    </div>
  );
};

export default Test;
