
const update = (section, value) => {
    return new Promise((resolve, reject) => {
        var url = `/update/${section}/${value}`;
        superagent
            .get(url)
            .end((err, res) => {
                err? reject(null) : resolve(JSON.parse(res.text));
            });
    });
};

const read = () => {
    return new Promise((resolve, reject) => {
        var url = "/data";
        superagent
            .get(url)
            .end((err, res) => {
                err? reject(null) : resolve(JSON.parse(res.text));
            })
    });
}

const App = () => {
    
    const [states, setStates] = React.useState({
        header: 0,
        left: 0,
        main: 0,
        right: 0,
        footer: 0
    });

    React.useEffect(() => {
        read()
            .then(data => {
                setStates(data);
            })
    },[]);

    const handler = (section, value) => {
        const newValue = String(Number(states[section]) + Number(value));
        update(section, newValue)
            .then(newStates => {
                setStates(newStates);
            });
    };

    return (
        <>
            <div id="container">
                <Header handler={handler} states={states}></Header>
                <Left handler={handler} states={states}></Left>
                <Main handler={handler} states={states}></Main>
                <Right handler={handler} states={states}></Right>
                <Footer handler={handler} states={states}></Footer>
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);