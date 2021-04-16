import { Text, Link, Icon } from '@chakra-ui/react'
import { ElementType, ReactNode } from 'react'

interface NavLinkProps {
    children: ReactNode;
    icon: ElementType;    
}

export function NavLink({icon, children, ...rest}: NavLinkProps) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}