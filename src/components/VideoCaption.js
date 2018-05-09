import React from 'react'
import moment from 'moment'
import momentDurationSetup from 'moment-duration-format'
import Text from 'components/Text'
import v from 'vudu'
import { styles as s, colors } from 'stylesheet'

const localClasses = v({
  listItem: {
    '@composes': [s.flex, s.alignTop],
    padding: '25px 0',
    borderTop: `1px solid ${colors.green}`,
    cursor: 'pointer',
    ':first-child': {
      borderTop: '0',
    }
  },
  copy: {
    '@composes': [s.green],
  },
  time: {
    minWidth: '158px',
  },
})

momentDurationSetup(moment)

const VideoCaption = ({ body, end, onClick, playedSeconds, start }) => {

  const startDuration = moment.duration(start)
  const endDuration = moment.duration(end)
  const startSeconds = startDuration.asSeconds()
  const active = startSeconds <= playedSeconds && playedSeconds < endDuration.asSeconds()
  const captionStartTime = `[${startDuration.format('hh:mm:ss', { trim: false })}]`

  return (
    <li
      className={localClasses.listItem}
      style={{ opacity: active ? 1 : 0.5 }}
      onClick={() => onClick(startSeconds)}
    >
      <div className={localClasses.time}>
        <Text classes={localClasses.copy}>{captionStartTime}</Text>
      </div>
      <div className={localClasses.body}>
        <Text classes={localClasses.copy}>{body}</Text>
      </div>
    </li>
  )
}

export default VideoCaption
