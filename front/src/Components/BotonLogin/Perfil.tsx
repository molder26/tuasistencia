import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';

export default function Perfil() {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            {
                isAuthenticated && (
                    <Stack>
                        <img src={user?.picture} alt={"imagen de usuario logueado"} />
                        <p>{user?.name}</p>
                    </Stack>
                )
            }
        </>
    )
}
