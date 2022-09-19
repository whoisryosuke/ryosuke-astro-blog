import React, { PropsWithChildren } from 'react'
import Box from '../Box/Box'
import Link from '../Link/Link'
import Stack from '../Stack/Stack'
import Text from '../Text/Text'
import { navContainerStyle, navItemStyle, navLayoutStyle } from './MainNav.css'

type MainNavItemProps = {
    href: string;
}

const MainNavItem = ({ href, children, ...props }: PropsWithChildren<MainNavItemProps> ) => {
    return(
        <a href={href} className={navItemStyle} {...props}>
            <Text fontFamily="heading" fontSize={2}>{children}</Text>
        </a>
    )
}

type Props = {}

const MainNav = (props: Props) => {
  return (
    <Box className={navLayoutStyle}>
        <Box as="nav" className={navContainerStyle}>
            <Stack gap="36px">
                <MainNavItem href="/blog">Blog</MainNavItem>
                <MainNavItem href="/work">Work</MainNavItem>
                <MainNavItem href="/resources">Resources</MainNavItem>
                <MainNavItem href="/playlist">Playlist</MainNavItem>
            </Stack>
        </Box>
    </Box>
  )
}

export default MainNav