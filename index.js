
import { MessageBus } from './messageBus'
import { Publisher } from './publisher'
import { Subscriber } from './subscriber'

const main = () => {
  const bus = new MessageBus()
  const sub1 = new Subscriber(bus)
  const pub1 = new Publisher(bus)

  bus.registerSubscriber(sub1)
  bus.registerPublisher(pub1)

  sub1.subscribe('cookies')

  pub1.publish('cookies', 'Fresh Cookies!')
}

main()
