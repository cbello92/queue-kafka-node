const kafka = require("./kafkaCloudConnect")

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

const usersValues = [
  {fullname: 'Camilo Bello', age: 29},
  {fullname: 'Miguel Bello', age: 58},
]

producerKafka(process.env.TOPIC_NAME_CLOUD, { value: JSON.stringify(usersValues) });