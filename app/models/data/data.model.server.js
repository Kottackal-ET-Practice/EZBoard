var mongoose  = require("mongoose");

module.exports = function() {

    var DataSchema = new mongoose.Schema(
        {
            username: {type: String},
            data : {
                firstName: {type: String},
                lastName: {type: String},
                email: {type: String},
                projects: [
                {       
                    address: {type: String},
                    city: {type: String},
                    state: {type: String},
                    zipCode: {type: String},
                    country: {type: String},
                    nameplate: {type: Number},
                    installDate: {type: Date},
                    walletAddress: {type: String},
                    documentation: {type: String},
                    deviceID: {type: String}
                }],
                bounty: {
                    email: {type: String},
                    walletAddress: {type: String}
                }
            }
        }, {collection: "data"});

    var DataModel = mongoose.model('DataModel', DataSchema);

    var api = {
        createData: createData
    };
    return api;

    function createData(data) {
        return DataModel.create(data);
        console.log('success');
    }
}