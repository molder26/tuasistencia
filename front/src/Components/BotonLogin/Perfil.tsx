import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';

export default function Perfil() {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            {
                isAuthenticated && (
                    <Stack direction="row" spacing={2}>
                        <Stack>
                            <img src={user?.picture} alt={"imagen de usuario logueado"} style={{ width: "60px", height: "60px", border: "1px solid black", borderRadius: "9999%" }} />
                        </Stack>
                        <Stack>
                            <p>{user?.name}</p>
                        </Stack>

                    </Stack>
                )
            }
        </>
    )
}
