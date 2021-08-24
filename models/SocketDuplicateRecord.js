const mongoose = require('mongoose');

const SocketDuplicateRecord = new mongoose.Schema({
    ip: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('SocketDuplicateRecord', SocketDuplicateRecord, 'socketDuplicateRecords')