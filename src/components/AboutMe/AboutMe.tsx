import React from 'react'
import Box from '../Box/Box'
import Text from '../Text/Text'

const BoldText = ({children}) => <Text as="span" fontSize={5} fontWeight="bold" fontFamily="heading">{children}</Text>

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <Box width={{
        mobile: 3,
        tablet: 8
    }}>
        <Text fontSize={5} lineHeight={7}>
            What’s up! 👋 I’m Ryo, a Sr. Design Technologist at <BoldText>PlayStation</BoldText>. Previously I worked in the <BoldText>cannabis</BoldText> industry running <BoldText>Stay Regular</BoldText> and <BoldText>WeedPornDaily</BoldText>.
        </Text>
        <Text fontSize={5} lineHeight={7}>
            I spend most of my time prototyping apps and design tools, or developing games. Otherwise I’m gaming 🎮, at the gym 💪, or practicing music 🎶
        </Text>
    </Box>
  )
}

export default AboutMe