
export class Subscriber {

  mb = null

  constructor(bus) {
    mb = bus
  }

  subscribe(topicName, callback) {
    this.mb.subscribe(topicName, callback)
  }

}
