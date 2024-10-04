import { Box, Image } from "@chakra-ui/react";
import useTransactionData from "~/hooks/useTransactions";
import { Transaction } from "~/types";

const TransactionImg = ({ transaction }: { transaction: Transaction }) => {
    return (
        <Box>
            {transaction.transactionImg ? (
                <Image
                    src={transaction.transactionImg}
                    alt="Transaction Image"
                    boxSize="2.5rem"
                    objectFit="cover"
                    borderRadius="full"
                />
            ) : (
                <Image
                    src="assets/urban-services-hub.jpg"
                    alt="Profile Image"
                    boxSize="2.5rem"
                    objectFit="cover"
                    borderRadius="full"
                />
            )}
        </Box >
    )
}

export default TransactionImg;