import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
    return <div>Error Page Not Found. {error.status}</div>
}
