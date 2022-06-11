const Header = ({handler, states}) => {
    
    return (
        <>
            <div id="header">
            <h3>
            <button className="button" onClick={()=>handler("header","1")}>+</button> 
            Header: {states.header}
            <button className="button" onClick={()=>handler("header","-1")}>-</button>
            </h3>
            <br></br>
            header: {states.header}, left: {states.left}, main: {states.main}, right: {states.right}, footer: {states.footer}
            </div>
        </>
    );
};