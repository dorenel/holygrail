const Footer = ({handler, states}) => {

    return (
        <>
            <div id="footer">
            <h3>
            <button className="button" onClick={()=>handler("footer","1")}>+</button>
            Footer: {states.footer}
            <button className="button" onClick={()=>handler("footer","-1")}>-</button>
            </h3>
            <br></br>
            header: {states.header}, left: {states.left}, main: {states.main}, right: {states.right}, footer: {states.footer}
            </div>
        </>
    );
};