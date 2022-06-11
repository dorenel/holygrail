import { createClient } from 'redis';

var client = createClient();

//client.on('error', (err) => console.log('redis client error, err'));

await client.connect();

await client.set("my_key", "Hello World!");
const value = await client.get("my_key");
console.log(value);

await client.mSet(["header", "0", "left", "0", "main", "0", "right", "0", "footer", "0"]);
const values = await client.mGet(["header", "left", "main", "right", "footer"]);
console.log(values);

client.quit();