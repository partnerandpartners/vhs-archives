import React from 'react'
import moment from 'moment'
import momentDurationSetup from 'moment-duration-format'
import Text from 'components/Text'
import Play from 'components/icons/Play'
import Pause from 'components/icons/Pause'
import v from 'vudu'
import { styles as s, colors } from 'stylesheet'

momentDurationSetup(moment)

const formatSeconds = seconds => moment.duration(seconds, 'seconds').format('hh:mm:ss', { trim: true, stopTrim: 'mm:ss' })

const localClasses = v({
  controls: {
    '@composes': [s.flex, s.alignCenter],
    width: '100%',
    borderTop: `4px solid ${colors.black}`,
    borderBottom: `4px solid ${colors.black}`,
    padding: '10px 40px',
  },
  action: {
    '@composes': [s.flex, s.alignCenter],
    width: '75px',
  },
  button: {
    '@composes': [s.flex],
  },
  timeline: {
    '@composes': [s.grow1, s.alignCenter, s.flex, s.relative],
  },
  duration: {
    borderTop: `4px solid ${colors.black}`,
    width: '100%',
  },
  playedSeconds: {
    '@composes': [s.absolute],
    borderRight: `4px solid ${colors.black}`,
    height: '35px',
  },
  time: {
    '@composes': [s.flex, s.alignCenter, s.justifyEnd],
    paddingLeft: '20px',
    minWidth: '125px',
  },
  timeText: {
    fontWeight: 'normal',
  },
})

const VideoPlayerControls = props => {
  const { duration, onClick, playing, progress: { played, playedSeconds } } = props

  const playedSecondsFormatted = formatSeconds(playedSeconds)
  const durationSecondsFormatted = formatSeconds(duration)

  return (
    <div className={localClasses.controls}>
      <div className={localClasses.action}>
        <button className={localClasses.button} onClick={onClick}>
          {playing ? <Pause /> : <Play />}
        </button>
      </div>
      <div className={localClasses.timeline}>
        <div className={localClasses.duration} />
        <div className={localClasses.playedSeconds} style={{ width: `${100 * played}%` }} />
      </div>
      <div className={localClasses.time}>
        <Text classes={localClasses.timeText}>
          {`${playedSecondsFormatted}/${durationSecondsFormatted}`}
        </Text>
      </div>
    </div>
  )
}

export default VideoPlayerControls
