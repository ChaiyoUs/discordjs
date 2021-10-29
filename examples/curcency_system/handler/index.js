const { crearDB } = require('megadb');
const money = new crearDB('money');
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

module.exports = async (client) => {

    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    client.random = (min = 0, max = 0) => {
        let num = Math.random() * (max - min) + min;
  
        return Math.floor(num);
    };

    client.format = (number) => {
        var formatter = new Intl.NumberFormat('en-US', {
            currency: 'USD',
        });

        return formatter.format(number);
    }

    client.get = async (id) => {
        if (!money.has(id)) { money.set(id, 0)};

        return await money.get(id);
    };

    client.add = async (id, amount) => {
        if (!money.has(id)) { money.set(id, 0)};

        money.add(id, amount);
    };

    client.remove = async (id, amount) => {
        if (!money.has(id)) { money.set(id, 0)};

        money.subtract(id, amount);
    };

    client.set = async (id, amount) => {
        if (!money.has(id)) { money.set(id, 0)};

        money.set(id, amount);
    };
}