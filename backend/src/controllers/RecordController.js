const Record = require("../models/Record");

module.exports = {
    async index(request, response) {
        const records = await Record.find();
        return response.json(records);
    }
};