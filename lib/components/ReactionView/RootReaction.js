import React from 'react';
import ReactionView from './ReactionView';
import ReactionViewModal from './ReactionViewModal';
import { GlobalConstants } from '../../constants';
const RootReaction = (props) => {
    const { type } = props;
    return type === GlobalConstants.modal ? (React.createElement(ReactionViewModal, { ...props })) : (React.createElement(ReactionView, { ...props }));
};
export default RootReaction;
//# sourceMappingURL=RootReaction.js.map