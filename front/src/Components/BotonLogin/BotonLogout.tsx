import { Button } from '@mui/material'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function BotonLogout() {
  const { logout } = useAuth0();
  return (
    <Button style={{ color: "black" }} onClick={() => logout()}>
      Logout
    </Button>
  )
}
