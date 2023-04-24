import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

export default function BotonLogin() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button style={{ color: "black" }} onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
}
