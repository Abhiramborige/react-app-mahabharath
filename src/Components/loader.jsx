import { Component } from "react";
import "../styles/extras.scss"
import { theme } from "./themeChanger";

// https://www.w3schools.com/howto/howto_css_loader.asp
class Loader extends Component{
    componentDidMount(){
        let loader=document.querySelectorAll(".loader");
        loader.forEach((load)=>{
            if(theme===true){
                load.style.border="10px solid white";
                load.style.borderTop="10px solid orange";
            }
            else{
                load.style.border="10px solid pink";
                load.style.borderTop="10px solid blue";
            }
        })
    }
    render(){
        return ( 
            <div className="loader"></div>
         );
    }
}

export default Loader;