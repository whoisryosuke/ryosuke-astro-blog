import React from 'react'
import Box from '../Box/Box'
import Text from '../Text/Text'

const FONT_SIZE = {
          mobile: 2,
          tablet: 5
        }

const LINE_HEIGHT = {
          mobile: 6,
          tablet: 7
        }

const BoldText = ({children}) => <Text as="span" fontSize={FONT_SIZE} fontWeight="bold" fontFamily="heading">{children}</Text>

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <Box width={{
        mobile: 1,
        tablet: 6,
        computer: 7,
        desktop: 8,
        widescreen: 8,
    }}>
        <Text fontSize={FONT_SIZE} lineHeight={LINE_HEIGHT}>
            What’s up! 👋 I’m Ryo, a Sr. Design Technologist at <BoldText>PlayStation</BoldText>. Previously I worked in the <BoldText>cannabis</BoldText> industry running <BoldText>Stay Regular</BoldText> and <BoldText>WeedPornDaily</BoldText>.
        </Text>
        <Text fontSize={FONT_SIZE} lineHeight={LINE_HEIGHT}>
            I spend most of my time prototyping apps and design tools, or developing games. Otherwise I’m gaming 🎮, at the gym 💪, or practicing music 🎶
        </Text>
    </Box>
  )
}

export default AboutMe