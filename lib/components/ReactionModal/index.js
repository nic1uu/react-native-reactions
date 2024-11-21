import React, { createRef, useImperativeHandle, useRef, useState } from 'react';
import { Modal } from 'react-native';
import EmojiView from '../EmojiView';
import { getCoordinatesRef } from '../ReactionView';
export const reactionModalRef = createRef();
const ReactionModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const modalProps = useRef({});
    const [isCardAnimation, setIsCardAnimation] = useState(false);
    const [updatedPosition, setUpdatedPosition] = useState(0);
    useImperativeHandle(reactionModalRef, () => ({
        show: (props) => {
            modalProps.current = {};
            modalProps.current = props;
            setIsVisible(true);
            setIsCardAnimation(true);
        },
        hide: () => {
            modalProps.current = {};
            setIsVisible(false);
        },
        sendUpdatedValues: (props) => {
            var _a;
            modalProps.current = { ...modalProps.current, ...props };
            setUpdatedPosition((_a = props.position) !== null && _a !== void 0 ? _a : 0);
        },
    }), []);
    const onStartShouldSetResponder = () => {
        setIsVisible(false);
        setTimeout(() => {
            modalProps.current = {};
            setIsCardAnimation(false);
        }, 500);
        return true;
    };
    if (!isCardAnimation) {
        return null;
    }
    return (React.createElement(Modal, { visible: isCardAnimation, transparent: true },
        React.createElement(EmojiView, { showPopUpCard: isVisible, onEmojiCloseModal: onStartShouldSetResponder, onStartShouldSetResponder: onStartShouldSetResponder, getEmojiViewCoordinates: coordinates => {
                var _a;
                (_a = getCoordinatesRef === null || getCoordinatesRef === void 0 ? void 0 : getCoordinatesRef.current) === null || _a === void 0 ? void 0 : _a.sendCoordinates(coordinates);
            }, ...modalProps.current, position: updatedPosition })));
};
export default ReactionModal;
//# sourceMappingURL=index.js.map