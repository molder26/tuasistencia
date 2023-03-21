import React from 'react'
import { useParams } from 'react-router-dom'

export default function QrScanner() {
    let {employeeId, stateId}= useParams();

  return (

    <div>{employeeId}</div>
  )
}
