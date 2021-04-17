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
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiChatCheckLine} href="/users">Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOMAÇAO">
                <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
            </NavSection>
        </Stack>
    )
}