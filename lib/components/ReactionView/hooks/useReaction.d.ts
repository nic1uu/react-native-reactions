import type { ReactionViewProps } from '../types';
declare const useReaction: (props: ReactionViewProps) => {
    currentEmoji: number;
    setCurrentEmoji: import("react").Dispatch<import("react").SetStateAction<number>>;
    emojiSize: number;
    mainViewY: number;
    setMainViewY: import("react").Dispatch<import("react").SetStateAction<number>>;
    showTopEmojiCard: boolean;
    setMainViewX: import("react").Dispatch<import("react").SetStateAction<number>>;
    mainViewX: number;
    showCardPosition: number;
    setMainViewWidth: import("react").Dispatch<import("react").SetStateAction<number>>;
    isSinglePress: boolean;
    isLongPress: boolean;
    width: number;
    showCardInCenter: boolean;
    position: number;
    setPosition: import("react").Dispatch<import("react").SetStateAction<number>>;
    panResponder: import("react-native").PanResponderInstance;
    mainViewWidth: number;
    mainViewWidthX: number;
};
export default useReaction;
