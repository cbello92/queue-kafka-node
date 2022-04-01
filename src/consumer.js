const kafka = require('./kafkaConnect');

const consumerKafka = async () => {
    try {
        const consumer = kafka.consumer({ groupId: 'test-kafka-group' });

        await consumer.connect()
        await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        });
    } catch (error) {
        console.log('error', error)
    }
}

consumerKafka();

module.exports = consumerKafka;