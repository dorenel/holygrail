const Right = ({handler, states}) => {

    return (
        <>
            <div id="right">
            <h3>
            <button className="button" onClick={()=>handler("right","1")}>+</button>
            Right: {states.right}
            <button className="button" onClick={()=>handler("right","-1")}>-</button>
            </h3>
            <br></br>
            header: {states.header}, left: {states.left}, main: {states.main}, right: {states.right}, footer: {states.footer}
            </div>
        </>
    );
};