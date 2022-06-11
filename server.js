import express from 'express';
import { createClient } from 'redis';

const app = express();

var client = createClient();
await client.connect();

await client.mSet(["header", "0", "left", "0", "main", "0", "right", "0", "footer", "0"]);

app.use(express.static('public'));

const data = async () => {
    const values = await client.mGet(["header", "left", "main", "right", "footer"]);
    const data = {
        "header": values[0],
        "left": values[1],
        "main": values[2],
        "right": values[3],
        "footer": values[4]
    };
    return data;
}

const update = async (key, value) => {
    await client.set(key, value);
    const values = await client.mGet(["header", "left", "main", "right", "footer"]);
    const data = {
        "header": values[0],
        "left": values[1],
        "main": values[2],
        "right": values[3],
        "footer": values[4]
    };
    return data;
}

app.get('/data', (req, res) => {
    data()
        .then((values) => {
            res.send(values);
        });
});

app.get('/update/:key/:value', (req, res) => {
    update(req.params.key, req.params.value)
        .then((values) => {
            res.send(values);
        });
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})