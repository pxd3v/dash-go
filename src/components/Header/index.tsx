import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificatiosNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
interface HeaderProps {

}

export function Header({}: HeaderProps) {
    const { onOpen } = useSidebarDrawer()
    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

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
            { !isWideVersion && (
                <IconButton
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            <Logo />

            {(isWideVersion && <SearchBox />)}
            
            <Flex align="center" ml="auto">
                <NotificatiosNav></NotificatiosNav>
                <Profile showProfileData={isWideVersion}></Profile>
            </Flex>
        </Flex>
    )
}