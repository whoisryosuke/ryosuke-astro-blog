import Text from "../Text/Text";
import Link from "../Link/Link";
import Image from "../Image/Image";
import CodeInline from "../CodeInline/CodeInline";
import CodeBlock from "../CodeBlock/CodeBlock";

export const components = {
    h1: (props) => <Text as="h1" fontFamily="heading" fontSize={5} {...props} />,
    h2: (props) => <Text as="h2" fontFamily="heading" fontSize={4} {...props} />,
    h3: (props) => <Text as="h3" fontFamily="heading" fontSize={3} {...props} />,
    h4: (props) => <Text as="h4" fontFamily="heading" fontSize={2} {...props} />,
    h5: (props) => <Text as="h5" fontFamily="heading" fontSize={1} {...props} />,
    h6: (props) => <Text as="h6" fontFamily="heading" {...props} />,
    p: (props) => <Text as="p" fontSize={3} lineHeight={6} {...props} />,
    a: (props) => <Link fontSize={3} lineHeight={6} ghost {...props} />,
    img: (props) => <Image {...props} />,
    code: (props) => <CodeInline {...props} />,
    pre: (props) => <CodeBlock {...props} />,
}