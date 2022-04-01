const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: '1',
    brokers: ['localhost:9092'],
})

module.exports = kafka;