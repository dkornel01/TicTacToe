import Elem from "./Elem";
import "./jatekter.css"

function Jatekter(props){
    function katt(index) {
        props.katt(index);
    }
    return(
        <div className="jatekter">
        {props.list.map((elem,index)=>{
            return <Elem ertek={elem} index={index} key={index} katt={katt}  />
        })}
        </div>
    )
}
export default Jatekter