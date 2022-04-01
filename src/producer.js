const kafka = require("./kafkaConnect")

const producerKafka = async (nameTopic, bodyTopic) => {
    try {
        const producer = kafka.producer()
        
        await producer.connect()
        await producer.send({
          topic: nameTopic,
          messages: [
            bodyTopic,
          ],
        })
        
        console.log(`topic generated`, nameTopic, bodyTopic)

        await producer.disconnect()
    } catch (error) {
        console.log('error', error)
    }
}

producerKafka('test-topic', { value: 'Hello world from NodeJS + Kafka' });

module.exports = producerKafka;