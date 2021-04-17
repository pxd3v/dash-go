import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {(showProfileData && 
                <Box mr="4" textAlign="right">
                    <Text>
                        Pedro Lages
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        pedro.lages@hotmart.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Pedro Lages" src="https://github.com/pxd3v.png"/>
        </Flex>
    )
}