import { useContext } from "react";
import { Context } from "../store/store";
const Show = () => {
    let {bgColor,bgColorhead} = useContext(Context);
      return (
    <div className="show" style={{backgroundColor:bgColor}}>
      <h1>{bgColorhead}</h1>
      <p>{bgColor}</p>
    </div>
  );
};
export default Show;
