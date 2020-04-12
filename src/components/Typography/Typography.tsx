import React, { ReactChild } from 'react';
import {
  Text,
  TextStyle,
  StyleSheet,
} from 'react-native';
import * as styles from './typography.styles';
import fonts from './fonts';

import { getFontFamily, omit } from './helpers';

interface TypographyProps {
  variant?: keyof typeof styles,
  children?: ReactChild,
  style?: TextStyle,
  fontWeight?: TextStyle['fontWeight'],
  fontSize?: number,
  fontFamily?: keyof typeof fonts
}

const Typography = ({
  variant,
  children,
  style = {},
  fontWeight,
  fontSize,
  fontFamily,
} : TypographyProps) => {
  let styleSelected: TextStyle;

  if (!variant) {
    styleSelected = {
      ...style,
      fontWeight: (fontWeight) || 'normal',
      fontFamily: (fontFamily) || 'Lato',
      fontSize: (fontSize) || 12,
    };
  } else {
    styleSelected = styles[variant];
  }

  const resolvedStyle = StyleSheet.flatten(styleSelected);
  const fontFamilySelected = getFontFamily(resolvedStyle.fontFamily, resolvedStyle);
  const newStyle = omit(
    { ...resolvedStyle, fontFamily: fontFamilySelected },
    ['fontStyle', 'fontWeight'],
  );

  return <Text style={newStyle}>{children}</Text>;
};

export default Typography;
export { Typography };
