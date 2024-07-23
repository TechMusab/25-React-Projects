import { useContext } from "react";
import { Context } from "../store/store";
const Button=({code,index})=>{
    let {handlecolor}=useContext(Context);
return <button onClick={()=>handlecolor(index)}  className="mybtn">
   { code}
</button>
}
export default Button;