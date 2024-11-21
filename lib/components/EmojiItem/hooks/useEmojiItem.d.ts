import type { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import type { EmojiItemProps } from '../types';
declare const useEmojiItem: (props: EmojiItemProps) => {
    onLayout: (e: LayoutChangeEvent) => void;
    titlePosition: number;
    xValue: number;
    scaled: boolean;
    childRef: import("react").MutableRefObject<TouchableOpacity | null>;
    wavedEmoji: {
        opacity: number;
        transform: ({
            translateY: number;
            scale?: undefined;
        } | {
            scale: number;
            translateY?: undefined;
        })[];
    };
    emojiAnimatedScaled: {
        transform: ({
            translateY: number;
            scaleY?: undefined;
            scaleX?: undefined;
        } | {
            scaleY: number;
            translateY?: undefined;
            scaleX?: undefined;
        } | {
            scaleX: number;
            translateY?: undefined;
            scaleY?: undefined;
        })[];
    };
};
export default useEmojiItem;
