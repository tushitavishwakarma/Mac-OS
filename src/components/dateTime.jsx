import React, { useEffect, useState } from 'react'

const getFormattedDateTime = () => {
  const now = new Date()

  const weekday = now
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toLowerCase()

  const month = now
    .toLocaleDateString('en-US', { month: 'short' })
    .toLowerCase()

  const day = now.getDate()
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return `${weekday} ${month} ${day} ${time}`
}

const DateTime = () => {
  const [dateTime, setDateTime] = useState(() => getFormattedDateTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getFormattedDateTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <span>{dateTime}</span>
}

export default DateTime
