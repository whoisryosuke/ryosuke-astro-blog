import React from 'react'
import Box from '../Box/Box'
import Link from '../Link/Link'
import Stack from '../Stack/Stack'
import Text from '../Text/Text'

const ContactLink = ({children, href, ...props}) => <Link href={href} fontFamily="heading" fontSize={{
  mobile: 1,
  tablet: 2,
}} lineHeight={6} {...props}>{children}</Link>

type Props = {}

const ContactCTA = (props: Props) => {
  return (
    <Box paddingTop={5}>
        <Text fontFamily="heading" fontSize={{
          mobile: 2,
          tablet: 3
        }} style={{marginBottom:'8px'}}>DMs are open</Text>
        <Stack gap="16px">
            <ContactLink href="#">Email</ContactLink>
            <ContactLink href="#">Twitter</ContactLink>
            <ContactLink href="#">Instagram</ContactLink>
            <ContactLink href="#">LinkedIn</ContactLink>
        </Stack>
    </Box>
  )
}

export default ContactCTA