const producerKafka = require("./producer");


producerKafka('testing-kafka', { value: 'Hello world from NodeJS + Kafka' });