
export class MessageBus {

  topics = {}

  publishers = []

  subscribers = []

  registerSubscriber(subscriber) {
    console.log('registering the subscriber')
    this.subscribe.push(subscriber)
    console.log(`subscribers is now: ${JSON.stringify(this.subscribers)}`)
  }

  registerPublisher(publisher) {
    console.log('registering the publisher')
    this.subscribe.push(publisher)
    console.log(`publisher is now: ${JSON.stringify(this.publishers)}`)
  }

  subscribe(topicName, callback) {
    const topic = this.topics[topicName]
    topic.subscribers.push(subscribers.find(subscriberName))
  }

}
