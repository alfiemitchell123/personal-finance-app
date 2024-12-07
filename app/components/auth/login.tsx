import React, { useState } from 'react';
import { Navigate } from '@remix-run/react';
import { doSignInWithEmailAndPassword } from '~/firebase/auth';
import { useAuth } from '~/contexts/authContext/authProvider';
import { doCreateUserWithEmailAndPassword } from '~/firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '~/firebase/firebase';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Image,
    Heading,
    Text,
    VStack,
    useToast,
} from '@chakra-ui/react';
import { Eye, EyeSlash } from "@phosphor-icons/react";
import InputField from '../ui/inputField';
import ClientOnly from '../ClientOnly';
import theme from '~/theme';

const Login = () => {
    const { user } = useAuth();
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const toast = useToast();

    const togglePasswordVisibility = () => {
        setPasswordIsVisible((prev) => !prev);
    };

    const toggleForm = () => setIsSigningUp((prev) => !prev);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!isSigningUp) {
            // Handle login
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                toast({
                    title: "Sign In Error",
                    description: "Failed to sign in. Please check your credentials.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                setErrorMessage('Failed to sign in');
            }
        } else {
            // Handle sign-up
            try {
                const userCredential = await doCreateUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                // Create a user document in Firestore
                await setDoc(doc(db, "users", user.uid), {
                    displayName: name || "User",
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
            }
        }
        setIsLoading(false);
    };

    if (user) {
        return <Navigate to='/' replace />;
    }

    return (
        <ClientOnly>
            <Flex
                width={{
                    lg: "90rem",
                    sm: "auto"
                }}
                height="100vh"
                align="flex-start"
                bg="beige.100"
                direction={{
                    lg: "row",
                    sm: "column"
                }}
            >
                <Flex
                    display={{
                        lg: "none",
                        sm: "flex"
                    }}
                    padding={theme.spacing[300]}
                    direction="column"
                    justify="center"
                    align="center"
                    gap={theme.spacing[500]}
                    alignSelf="stretch"
                    borderRadius="0 0 0.5rem 0.5rem"
                    bg="grey.900"
                >
                    <Image src="assets/logoFull.svg" alt="Finance" />
                </Flex>
                <Flex
                    display={{
                        lg: "flex",
                        sm: "none"
                    }}
                    maxWidth="37.5rem"
                    padding={theme.spacing[250]}
                    align="center"
                    gap="0.5rem"
                    flex="1 0 0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        bgImage="url(assets/illustration-authentication.svg)"
                        bgColor="grey.900"
                        bgPosition="top center"
                        bgRepeat="no-repeat"
                        borderRadius="0.75rem"
                        // padding={theme.spacing[500]}
                        direction="column"
                        justify="space-between"
                        align="flex-start"
                        flex="1 0 0"
                        alignSelf="stretch"
                    >
                        <Image src="assets/logoFull.svg" alt="Finance" padding={theme.spacing[500]} />
                        <Flex
                            bg="linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(32,31,36,1) 24%, rgba(32,31,36,0.7049413515406162) 57%, rgba(32,31,36,0.4360337885154062) 77%, rgba(0,212,255,0) 100%)"
                            backdropFilter="blur(0.4px)"
                            width="100%"
                            borderRadius="0.75rem"
                            padding={theme.spacing[500]}
                        >
                            <Flex
                                direction="column"
                                color="white"
                                align="flex-start"
                                gap={theme.spacing[300]}
                            >
                                <Text textStyle="preset1">
                                    Keep track of your money
                                    and save for your future
                                </Text>
                                <Text textStyle="preset4">
                                    Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    p={theme.spacing[400]}
                    direction="column"
                    justify="center"
                    align="center"
                    gap={theme.spacing[500]}
                    flex="1 0 0"
                    alignSelf="stretch"
                >
                    <Flex
                        maxW="35rem"
                        width="100%"
                        p={theme.spacing[400]}
                        direction="column"
                        align="flex-start"
                        alignSelf="stretch"
                        mx="auto"
                        gap={theme.spacing[400]}
                        bg="white"
                        borderRadius={theme.spacing[150]}
                    >
                        <Heading textStyle="preset1">{isSigningUp ? "Sign Up" : "Login"}</Heading>
                        <form
                            style={{
                                display: "flex",
                                width: "100%",
                                flexDirection: "column",
                                gap: `${theme.spacing[400]}`
                            }}
                            onSubmit={handleSubmit}
                        >
                            <Flex
                                width="100%"
                                direction="column"
                                gap={theme.spacing[200]}
                            >
                                {isSigningUp && (
                                    <InputField
                                        id="name"
                                        type="text"
                                        isRequired={true}
                                        label="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                )}
                                <InputField
                                    id="email"
                                    type="email"
                                    isRequired={true}
                                    label="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputField
                                    id="password"
                                    type={passwordIsVisible ? "text" : "password"}
                                    isRequired={true}
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    icon={passwordIsVisible ? Eye : EyeSlash}
                                    onIconClick={togglePasswordVisibility}
                                    helperText={isSigningUp ? "Passwords must be at least 8 characters" : ""}
                                />
                            </Flex>
                            <Button
                                width="100%"
                                height="3.3125rem"
                                type="submit"
                                variant="primary"
                                isLoading={isLoading}
                            >
                                {isSigningUp ? "Create Account" : "Login"}
                            </Button>

                            <Flex
                                direction="column"
                                mx="auto"
                                gap="0.5rem"
                            >
                                <Flex gap={theme.spacing[100]}>
                                    <Text
                                        textStyle="preset4"
                                        color="grey.500"
                                    >
                                        {isSigningUp ? "Already have an account?" : "Need to create an account?"}
                                    </Text>
                                    <Text
                                        textStyle="preset4bold"
                                        color="grey.900"
                                        textDecoration="underline"
                                        onClick={toggleForm}
                                        cursor="pointer"
                                    >
                                        {isSigningUp ? "Login" : "Sign Up"}
                                    </Text>
                                </Flex>
                            </Flex>
                        </form>
                        {errorMessage && <Box color="red.500">{errorMessage}</Box>}
                    </Flex>
                </Flex>
            </Flex>
        </ClientOnly>
    )
}

export default Login;