import React from "react";
import { Box, Image } from "@chakra-ui/react";
import useUserData from "~/hooks/useUserData";

const ProfileImg = () => {
    const { userData } = useUserData();

    return (
        <Box>
            {userData?.profileImgUrl ? (
                <Image
                    src={userData.profileImgUrl}
                    alt="Profile Image"
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

export default ProfileImg;