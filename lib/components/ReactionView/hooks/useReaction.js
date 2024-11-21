import { useEffect, useRef, useState } from 'react';
import { PanResponder, useWindowDimensions, } from 'react-native';
import { GlobalConstants } from '../../../constants';
const useReaction = (props) => {
    const [currentEmoji, setCurrentEmoji] = useState(0);
    const { iconSize = 25, showPopupType = 'default' } = props;
    const [emojiSize, setEmojiSize] = useState(iconSize);
    const [mainViewY, setMainViewY] = useState(0);
    const [mainViewX, setMainViewX] = useState(0);
    const [mainViewWidth, setMainViewWidth] = useState(0);
    const { width } = useWindowDimensions();
    const [position, setPosition] = useState(0);
    const mainViewWidthX = width - (mainViewX + mainViewWidth);
    const showCardInCenter = mainViewWidthX > width / 4 && mainViewWidthX < width / 2;
    const showCardPosition = showCardInCenter
        ? width / 8
        : mainViewWidthX < 100
            ? -(width - mainViewX)
            : mainViewX;
    useEffect(() => {
        if (iconSize > GlobalConstants.max) {
            setEmojiSize(30);
        }
        else if (iconSize < GlobalConstants.min) {
            setEmojiSize(15);
        }
        else {
            setEmojiSize(iconSize);
        }
    }, [iconSize]);
    const showTopEmojiCard = mainViewY < 150 ? true : false;
    const isSinglePress = showPopupType === GlobalConstants.onPress;
    const isLongPress = showPopupType === GlobalConstants.default;
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => { },
        onPanResponderMove: event => onGesture(event),
        onPanResponderEnd: () => {
            setPosition(0);
        },
        onMoveShouldSetPanResponder: (_, gestureState) => {
            const { dx, dy } = gestureState;
            return dx > 2 || dx < -2 || dy > 2 || dy < -2;
        },
        onMoveShouldSetPanResponderCapture: (_, gestureState) => {
            const { dx, dy } = gestureState;
            return dx > 2 || dx < -2 || dy > 2 || dy < -2;
        },
    })).current;
    const onGesture = async (event) => {
        var _a, _b;
        if (((_a = event.nativeEvent) === null || _a === void 0 ? void 0 : _a.pageX) <= 367) {
            const currentItem = Math.floor((_b = event.nativeEvent) === null || _b === void 0 ? void 0 : _b.pageX);
            setPosition(currentItem !== null && currentItem !== void 0 ? currentItem : 0);
        }
        else {
            setPosition(0);
        }
    };
    return {
        currentEmoji,
        setCurrentEmoji,
        emojiSize,
        mainViewY,
        setMainViewY,
        showTopEmojiCard,
        setMainViewX,
        mainViewX,
        showCardPosition,
        setMainViewWidth,
        isSinglePress,
        isLongPress,
        width,
        showCardInCenter,
        position,
        setPosition,
        panResponder,
        mainViewWidth,
        mainViewWidthX,
    };
};
export default useReaction;
//# sourceMappingURL=useReaction.js.map