import { Button, Tooltip } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface AddNewButtonProps {
    btnTag: string;
    onClick: () => void;
    maxCount?: number;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({ btnTag, onClick, maxCount = 0 }) => {
    return (
        <Tooltip
            label={maxCount >= 8 ? "Remove existing budgets to add more." : ""}
            bg="grey.500"
            hasArrow
            placement="left"
        >
            <Button
                alignItems="center"
                gap={theme.spacing[300]}
                variant="primary"
                textStyle="preset4bold"
                padding={theme.spacing[200]}
                height="100%"
                onClick={onClick}
                isDisabled={maxCount >= 8}
                _hover={{
                    bg: maxCount < 8 ? "grey.500" : "grey.900",
                }}
            >
                {maxCount < 8 ? `+ Add New ${btnTag}` : "Max Limit Reached"}
            </Button>
        </Tooltip>
    );
}

export default AddNewButton;