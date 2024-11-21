import { GestureResponderEvent } from 'react-native';
import type { EmojiItemProp } from '../../ReactionView/types';
import type { EmojiModalProps } from '../types';
declare const useEmojiView: (props: EmojiModalProps) => {
    onGesture: (event: GestureResponderEvent) => Promise<void>;
    currentEmoji: number;
    setCurrentEmoji: import("react").Dispatch<import("react").SetStateAction<number>>;
    emojiSize: number;
    showCardPosition: number;
    height: number;
    showCardInCenter: boolean;
    width: number;
    panResponder: import("react-native").PanResponderInstance;
    subContainer: {
        alignItems: "center" | "baseline";
    }[];
    emojiPressHandler: (item: EmojiItemProp) => void;
    container: {
        opacity: number;
        transform: ({
            translateY: number;
            translateX?: undefined;
        } | {
            translateX: number;
            translateY?: undefined;
        })[];
    };
    hitSlopHeigth: number;
    hitSlopWidth: number;
};
export default useEmojiView;
