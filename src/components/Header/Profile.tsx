import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>
                    Pedro Lages
                </Text>
                <Text color="gray.300" fontSize="small">
                    pedro.lages@hotmart.com
                </Text>
            </Box>

            <Avatar size="md" name="Pedro Lages" src="https://github.com/pxd3v.png"/>
        </Flex>
    )
}