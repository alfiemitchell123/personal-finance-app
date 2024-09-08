import React, { useState } from 'react';
import { Navigate } from '@remix-run/react';
import { doSignInWithEmailAndPassword } from '~/firebase/auth';
import { useAuth } from '~/contexts/authContext';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    VStack,
    useToast
} from '@chakra-ui/react';
import ClientOnly from '../ClientOnly';

const Login = () => {
    const { userLoggedIn } = useAuth() || { userLoggedIn: false };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                toast({
                    title: "Sign In Successful",
                    description: "You have successfully signed in.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            } catch (error) {
                toast({
                    title: "Sign In Error",
                    description: "Failed to sign in. Please check your credentials.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                setErrorMessage('Failed to sign in');
                console.error("Failed to sign in");
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    if (userLoggedIn) {
        console.log("User logged in.");
        return <Navigate to='/' replace />;
    }

    return (
        <ClientOnly>
            <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
                <Heading mb={4}>Sign In</Heading>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            variant="primary"
                            isLoading={isSigningIn}
                        >
                            Sign In
                        </Button>
                        {errorMessage && <Box color="red.500">{errorMessage}</Box>}
                    </VStack>
                </form>
            </Box>
        </ClientOnly>
    )
}

export default Login;