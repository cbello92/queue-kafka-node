const { config } = require('dotenv');
const { Kafka } = require('kafkajs');

config();

const kafkaLocal = new Kafka({
    clientId: '1',
    brokers: process.env.BROKERS_LOCAL.split(",")
})

module.exports = kafkaLocal;