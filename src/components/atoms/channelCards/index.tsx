import { Icon } from "@iconify/react";
import { ChannelsProps, defaultProps } from "./types";
import { ChannelsContent, ExclusiveBlocked, GeolockedBlocked } from "./styles";

const ChannelCards = ({ ...props }: ChannelsProps) => {
  return (
    <ChannelsContent {...props}>
      {props.isExclusive ? (
        <ExclusiveBlocked>
          <Icon width={20} icon={`mdi:lock`}></Icon>
        </ExclusiveBlocked>
      ) : "" || props.isGeolocked ? (
        <GeolockedBlocked>
          <Icon width={20} icon={`mdi:lock`}></Icon>
        </GeolockedBlocked>
      ) : (
        ""
      )}
    </ChannelsContent>
  );
};

ChannelCards.defaultProps = defaultProps;

export { ChannelCards };
