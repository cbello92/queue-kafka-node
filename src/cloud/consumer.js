const kafka = require('./kafkaCloudConnect');

const consumerKafka = async () => {
    try {
        const consumer = kafka.consumer({ groupId: process.env.TOPIC_NAME_CLOUD });

        await consumer.connect()
        await consumer.subscribe({ topic: process.env.TOPIC_NAME_CLOUD, fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    topic,
                    value: JSON.parse(message.value),
                })
            },
        });
    } catch (error) {
        console.log('error', error)
    }
}

consumerKafka();