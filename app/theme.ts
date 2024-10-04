// app/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        sm: "0em",
        md: "48em",
        lg: "62em",
    },
    colors: {
        beige: {
            100: "#F8F4F0",
            500: "#98908B",
        },
        grey: {
            100: "#F2F2F2",
            300: "#B3B3B3",
            500: "#696868",
            900: "#201F24",
        },
        secondary: {
            green: "#277C78",
            yellow: "#F2CDAC",
            cyan: "#82C9D7",
            navy: "#626070",
            red: "#C94736",
            purple: "#826CB0",
        },
        other: {
            purple: "#AF81BA",
            turqouise: "#597C7C",
            brown: "#93674F",
            magenta: "#934F6F",
            blue: "#3F82B2",
            navyGrey: "#97A0AC",
            armyGreen: "#7F9161",
            gold: "#CAB361",
            orange: "#BE6C49",
            white: "#FFFFFF"
        }
    },
    global: {
        "html, body": {
            fontFamily: "Public Sans",
            fontWeight: "normal",
            lineHeight: "120%",
        },
    },
    textStyles: {
        preset1: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "120%",
            letterSpacing: "0px",
        },
        preset2: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "120%",
            letterSpacing: "0px",
        },
        preset3: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0px",
        },
        preset4: {
            fontFamily: "Public Sans",
            fontWeight: "regular",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0px",
        },
        preset4bold: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0px",
        },
        preset5: {
            fontFamily: "Public Sans",
            fontWeight: "regular",
            fontSize: "12px",
            lineHeight: "150%",
            letterSpacing: "0px",
        },
        preset5bold: {
            fontFamily: "Public Sans",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "150%",
            letterSpacing: "0px",
        },
    },
    spacing: {
        500: "40px",
        400: "32px",
        300: "24px",
        250: "20px",
        200: "16px",
        150: "12px",
        100: "8px",
        50: "4px",
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: "8px",
            },
            variants: {
                primary: {
                    bg: "grey.900",
                    color: "white",
                    _hover: {
                        bg: "grey.500",
                    },
                    _loading: {
                        bg: "grey.900",
                        color: "white",
                        _hover: {
                            bg: "grey.900",
                        },
                    },
                },
                secondary: {
                    bg: "beige.100",
                    color: "grey.900",
                    _hover: {
                        bg: "white",
                        border: "1px solid",
                        borderColor: "beige.500",
                        boxSizing: "border-box",
                    },
                },
                tertiary: {
                    bg: "white",
                    color: "grey.500",
                    svg: {
                        color: "grey.500",
                        width: "0.75em",
                        height: "0.75em",
                    },
                    _hover: {
                        color: "grey.900",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        svg: {
                            color: "grey.900",
                        },
                    },
                    iconSpacing: '0.5rem',
                },
                destroy: {
                    bg: "secondary.red",
                    color: "white",
                    _hover: {
                        opacity: "0.75"
                    },
                },
            },
        },
    },
});

export default theme;