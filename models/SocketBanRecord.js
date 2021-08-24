const mongoose = require('mongoose');

const SocketBanRecord = new mongoose.Schema({
    ip: {
        required: true,
        type: String
    },
    createdAt: { 
        type: Date, 
        default: Date.now,
        expires: 1800
    }
})

module.exports = mongoose.model('SocketBanRecord', SocketBanRecord, 'socketBanRecords')