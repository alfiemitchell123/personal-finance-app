import { ModalCloseButton, IconButton } from "@chakra-ui/react";
import { XCircle } from "phosphor-react";

const CustomModalCloseButton = ({ onClose }: { onClose: () => void }) => {
    return (
        <IconButton
            onClick={onClose}
            aria-label="Close modal"
            icon={<XCircle size={32} weight="thin" />}
            bg="transparent"
            boxSize="2rem"
            _hover={{
                bg: "transparent",
                color: "grey.900",
            }}
        />
    );
};

export default CustomModalCloseButton;