import React from 'react'
import VideoCaption from 'components/VideoCaption'
import v from 'vudu'
import { colors } from 'stylesheet'

const localClasses = v({
  list: {
    borderTop: `4px solid ${colors.green}`,
    margin: '40px 80px 0',
  },
})

const VideoCaptions = ({ captions, onClick, playedSeconds }) => {

  const videoCaptions = captions.map((caption, index) => (
    <VideoCaption key={index} playedSeconds={playedSeconds} onClick={onClick} {...caption} />
  ))

  return (
    <ul className={localClasses.list}>
      {videoCaptions}
    </ul>
  )
}

export default VideoCaptions
