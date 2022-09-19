import React from 'react'
import Box from '../Box/Box'
import Text from '../Text/Text'
import { logoContainerStyles, logoTextStyles } from './Logo.css'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Box className={logoContainerStyles}>
        <Text fontFamily="heading" fontSize={5} className={logoTextStyles}>Ryosuke</Text>
    </Box>
  )
}

export default Logo