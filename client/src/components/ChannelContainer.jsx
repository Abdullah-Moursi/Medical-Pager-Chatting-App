import React from "react";
import { Channel, useChatContext } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
    const { channel } = useChatContext();

    if(isCreating) {
        return (

        )
    }

    if(isEditing) {

    }
    
  return <div>ChannelContainer</div>;
};

export default ChannelContainer;
