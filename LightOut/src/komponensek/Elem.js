
function Elem(props){
    function katt(){
        props.katt(props.index)
    }
    return(
        <div className="elem" onClick={katt} style={{backgroundColor: `${props.ertek}`}}>
            <p></p>
        </div>
    )
}
export default Elem