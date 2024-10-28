import { Box, Image } from "@chakra-ui/react";
import useTransactionData from "~/hooks/useTransactions";
import { Transaction } from "~/types";

const storageBaseURL = "https://firebasestorage.googleapis.com/v0/b/personal-finance-app-f7b63.appspot.com/o/transactionCategoryImages%2F";

const formatCategoryToImageUrl = (category: string): string => {
    // Format the category to match storage format
    const formattedCategory = category.replace(/\s+/g, "").toLowerCase() + ".jpg";
    return `${storageBaseURL}${formattedCategory}?alt=media`; // Append URL params as needed
};

const TransactionImg = ({ transaction }: { transaction: Transaction }) => {
    const imageUrl = transaction.transactionImg || formatCategoryToImageUrl(transaction.transactionCategory);

    return (
        <Box>
            <Image
                src={imageUrl}
                alt={`${transaction.transactionCategory} Image`}
                boxSize="2.5rem"
                objectFit="cover"
                borderRadius="full"
                fallbackSrc="assets/urban-services-hub.jpg"
            />
        </Box >
    )
}

export default TransactionImg;