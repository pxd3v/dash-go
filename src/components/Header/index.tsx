import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificatiosNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
interface HeaderProps {

}

export function Header({}: HeaderProps) {
    return (
        <Flex
          as="header"
          w="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          align="center"
          px="6"
        >
            
            <Logo />

            <SearchBox />
            
            <Flex align="center" ml="auto">
                <NotificatiosNav></NotificatiosNav>
                <Profile></Profile>
            </Flex>
        </Flex>
    )
}