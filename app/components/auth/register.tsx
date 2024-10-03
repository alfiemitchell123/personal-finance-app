import React, { useState } from 'react';
import { Navigate } from '@remix-run/react';
import { useAuth } from '~/contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '~/firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '~/firebase/firebase';
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

const Register = () => {
    const { userLoggedIn } = useAuth() || { userLoggedIn: false };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setIsRegistering(true);
        try {
            const userCredential = await doCreateUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Create a user document in Firestore
            await setDoc(doc(db, "users", user.uid), {
                income: 0,
                expenses: 0,
                currentBalance: 0,
                displayName: "User",
            })

            console.log("Registration sucessful.");
            toast({
                title: "Registration Successful",
                description: "You have successfully registered.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Registration Error",
                description: "Failed to register. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            setErrorMessage("Failed to register. Please try again.");
        } finally {
            setIsRegistering(false);
        }
    };

    if (userLoggedIn) {
        return <Navigate to='/' replace />;
    }

    return (
        <ClientOnly>
            <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
                <Heading mb={4}>Register</Heading>
                <form onSubmit={handleSubmit} action="submit">
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
                        <FormControl id="confirmPassword" isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="teal"
                            isLoading={isRegistering}
                        >
                            Register
                        </Button>
                        {errorMessage && <Box color="red.500">{errorMessage}</Box>}
                    </VStack>
                </form>
            </Box>
        </ClientOnly>
    )
}

export default Register;