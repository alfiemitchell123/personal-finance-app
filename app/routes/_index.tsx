import { Box, Button, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useAuth } from "~/contexts/authContext";
import { doSignOut } from "~/firebase/auth";
import { Navigate } from "@remix-run/react";

export default function Home() {
  const { currentUser, userLoggedIn } = useAuth() || { userLoggedIn: false };
  console.log(userLoggedIn);

  return (
    <Box fontFamily="sans-serif" p={0}>

      {/* {userLoggedIn
        ?
        <>
          <Heading>Welcome, {currentUser?.displayName || currentUser?.email}!</Heading>
          <Button onClick={() => { doSignOut().then(() => { <Navigate to={'/login'} /> }) }}>Sign Out</Button>
        </>
        :
        <>
          <Box>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </Box>
        </>
      } */}
    </Box>
  );
}
