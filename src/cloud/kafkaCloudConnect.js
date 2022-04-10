const { config } = require('dotenv');
const { Kafka } = require('kafkajs');

config();

const kafkaCloud = new Kafka({
    brokers: process.env.BROKERS_CLOUD.split(","),
    ssl: true,
    logLevel: 2,
    sasl: {
        mechanism: process.env.SASL_MECHANISM,
        username: process.env.SASL_USERNAME,
        password: process.env.SASL_PASSWORD,
    }
})

module.exports = kafkaCloud;