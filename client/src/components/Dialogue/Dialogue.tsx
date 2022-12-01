import React, { useMemo, useState } from 'react'
import { animated, useTransition } from 'react-spring'

import './styles.css'

type Message = {
  message: string,
  speed?: "slow" | "medium" | "fast"
}

type Dialogue = {
  messages: string[]
}

/* ANIMATED DIALOGUE COMPONENT
    - Dialogue renders a Message component, which is animated with react-spring
*/
const Message = ({message} : Message) => {
  const items = useMemo(() => 
    message.split("").map((letter, index) => ({
      item: letter,
      key: `${letter}${index}`
    })), [message])

  const transitions = useTransition(items, 
    {
      keys: (item) => item.key,
      config: {duration: 200, mass: 1, friction: 18},
      trail:  35,
      from:  { display:  "none"  },
      enter:  { display:  ""  }
  })

  return (
    <div className="message">
      {
        transitions((style, item, key) => (
          <animated.span
            key={key.key}
            style={style}
          >
            {item.item}
          </animated.span>
        ))
      }
    </div>
  )
}

const Dialogue = ({messages}: Dialogue) => {
  const [messageIndex, setMessageIndex] = useState(0)
  const nextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prevIndex => prevIndex + 1)
    } else {
      setMessageIndex(0)
    }
  }

  return (
    <div className="dialogue__container">
      <p className="dialogue-title">Title</p>
      <Message
        message={messages[messageIndex]}
      />
      <div 
        className="dialogue-footer"
        onClick={nextMessage}
      >
        Next
      </div>
    </div>
  )
}

export default Dialogue