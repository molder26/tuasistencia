import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Stack } from '@mui/material';

export default function Perfil() {
    const { user, isAuthenticated } = useAuth0();
    const idUser = isAuthenticated && (user?.sub);
    console.log(idUser);
    return (
        <>
            {
                isAuthenticated && (
                    <Stack direction="row" spacing={2}>
                        <Stack>
                            <img src={user?.picture} alt={"imagen de usuario logueado"} style={{ width: "50px", height: "50px", border: "1px solid black", borderRadius: "9999%" }} />
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
