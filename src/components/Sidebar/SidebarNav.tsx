import { Stack } from '@chakra-ui/react'
import { RiChatCheckLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

interface SidebarNavProps {

}

export function SidebarNav ({}: SidebarNavProps) {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink icon={RiChatCheckLine}>Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOMAÇAO">
                <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}