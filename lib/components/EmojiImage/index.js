import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { moderateScale } from '../../theme';
import styles from './styles';
const EmojiImage = ({ emojiElementStyle, emojiSize = 0, ...rest }) => {
    const imageStyle = StyleSheet.flatten([
        styles.img,
        emojiElementStyle,
        { width: moderateScale(emojiSize), height: moderateScale(emojiSize) },
    ]);
    return React.createElement(Image, { style: imageStyle, ...rest });
};
export default EmojiImage;
//# sourceMappingURL=index.js.map