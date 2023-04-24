import { Button, Stack } from '@mui/material'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function BotonLogout() {
  const { logout } = useAuth0();
  return (
    <Stack direction="row" justifyItems="end" width={210} alignItems="center" >
      <Button style={{ color: "black", marginLeft: "50px", border: "2px solid black", height: "50px" }} onClick={() => logout()}>
        Cerrar Sesion
      </Button>
    </Stack>
  )
}
