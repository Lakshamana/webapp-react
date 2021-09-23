import { ChannelsProps, defaultProps } from './types'
import { ChannelsContent, ChannelBlocked } from './styles'

const ChannelCards = ({ ...props }: ChannelsProps) => {
    return (
        <ChannelsContent {...props}>
            {props.isExclusive === true ? <ChannelBlocked /> : '' || 
             props.isGeolocked === true ? <ChannelBlocked /> : ''}
        </ChannelsContent>
    );
}

ChannelCards.defaultProps = defaultProps

export { ChannelCards }