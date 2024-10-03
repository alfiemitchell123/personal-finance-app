import { Flex, Text } from "@chakra-ui/react";
import ProfileImg from "../profile/profileImg";
import useUserData from "~/hooks/useUserData";
import theme from "~/theme";

const TransactionsListItem = () => {
    const { userData } = useUserData();

    return (
        <Flex
            justify="space-between"
            align="center"
        >
            <Flex
                align="center"
                gap={theme.spacing[200]}
                flex="1 0 0"
            >
                <ProfileImg />
                <Text textStyle="preset4bold">{userData?.displayName}</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align="flex-end"
                gap={theme.spacing[100]}
            >
                <Text
                    textStyle="preset4bold"
                    color="secondary.green"
                    textAlign="right">
                    $75.50
                </Text>
                <Text
                    textStyle="preset5"
                    color="grey.500"
                >
                    19 Aug 2024
                </Text>
            </Flex>
        </Flex>
    )
}

export default TransactionsListItem;