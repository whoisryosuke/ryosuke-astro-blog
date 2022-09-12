import { textStyles } from './Text.css';
import clsx from 'clsx';
import {
  fontSizeUtilityStyles,
  FontSizeUtilityStyles,
} from '../../styles/utility-styles/fontSizes.css';

/* eslint-disable-next-line */
export interface TextProps<ComponentType extends React.ElementType> {
  as?: ComponentType;
  children: React.ReactNode;
  fontSize?: FontSizeUtilityStyles['fontSize'];
  fontFamily?: FontSizeUtilityStyles['fontFamily'];
  lineHeight?: FontSizeUtilityStyles['lineHeight'];
}

export function Text<ComponentType extends React.ElementType>({
  children,
  fontSize = 1,
  fontFamily = 'body',
  lineHeight = 1,
  ...restProps
}: TextProps<ComponentType>) {
  const fontProps = {
    fontSize,
    fontFamily,
    lineHeight,
  };
  const Component = restProps.as ?? 'p' as React.ElementType
  return (
    <Component className={clsx(textStyles, fontSizeUtilityStyles(fontProps))}>
      {children}
    </Component>
  );
}

export default Text;
