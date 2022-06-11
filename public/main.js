const Main = ({handler, states}) => {

    return (
        <>
            <div id="main">
            <h3>
            <button className="button" onClick={()=>handler("main","1")}>+</button>  
            Main: {states.main}
            <button className="button" onClick={()=>handler("main","-1")}>-</button>
            </h3>
            <br></br>
            header: {states.header}, left: {states.left}, main: {states.main}, right: {states.right}, footer: {states.footer}
            </div>
        </>
    );
};