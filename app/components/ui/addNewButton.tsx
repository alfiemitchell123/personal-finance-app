import { Button } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface AddNewButtonProps {
    btnTag: string;
    onClick: () => void;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({ btnTag }) => {
    return (
        <Button
            alignItems="center"
            gap={theme.spacing[300]}
            variant="primary"
            textStyle="preset4bold"
            padding={theme.spacing[200]}
            height="100%"
        >
            + Add New {btnTag}
        </Button>
    );
}

export default AddNewButton;