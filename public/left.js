const Left = ({handler, states}) => {

    return (
        <>
            <div id="left">
            <h3>
            <button className="button" onClick={()=>handler("left","1")}>+</button>  
            Left: {states.left}
            <button className="button" onClick={()=>handler("left","-1")}>-</button>
            </h3>
            <br></br>
            header: {states.header}, left: {states.left}, main: {states.main}, right: {states.right}, footer: {states.footer}
            </div>
        </>
    );
};