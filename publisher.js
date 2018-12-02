
export class Publisher {

  mb = null

  constructor(bus) {
    mb = bus
  }

  publish(topicName, msg) {
    this.mb.publish(topicName, msg)
  }

}
