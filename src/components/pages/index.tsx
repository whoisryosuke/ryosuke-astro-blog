import DefaultPage from '@/layouts/DefaultPage'
import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import { Box } from '../Box/Box'
import ContactCTA from '../ContactCTA/ContactCTA'

type Props = {}

const index = (props: Props) => {
  return (
    <DefaultPage title="The blog and portfolio of Ryosuke">
	<Box as="section" paddingTop={10} px={{
		mobile: 4,
		tablet: 8
	}}>
		<AboutMe />
		<ContactCTA />
	</Box>
</DefaultPage>
  )
}

export default index