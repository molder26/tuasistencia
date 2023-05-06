import { Button, Stack } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { useAppDispatch } from '../../app/hooks';
import { resetUser } from '../../store/slices/user/userSlice';

export default function BotonLogout() {
  const dispatch = useAppDispatch();
  const { logout } = useAuth0();
  const logoutReset = () => {
    logout();
    dispatch(resetUser())
  }


  return (
    <Stack direction="row" justifyItems="end" width={210} alignItems="center" >
      <Button style={{ color: "black", marginLeft: "50px", border: "2px solid black", height: "30px", padding: "18px", width: "50px" }} onClick={() => logoutReset()}>
        <span style={{ fontSize: "11px" }}> Cerrar Sesion</span>
      </Button>
    </Stack>
  )
}
