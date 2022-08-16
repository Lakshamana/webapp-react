import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { colors } from 'styles'
import { FeedPostCardProps, itensQuestions } from '../../types'

interface Props extends SpaceProps, FeedPostCardProps {}

export const PollContent = styled.div<SpaceProps>`
  ${space}

  height: auto;
`

export const PollStatus = styled.div<SpaceProps>`
  ${space}

  display: flex;
  align-items: center;
`

export const PollItem = styled.div<Props>`
  ${space}

  position: relative;
  display: flex;
  background: ${colors.grey['900']};
  border-radius: 2px;
  overflow: hidden;
  font-size: 14px;
  &:hover {
    border: ${(props: FeedPostCardProps) =>
      props.voted && `2px solid ${colors.blue['300']}`};
  }
`

export const PollItemText = styled.div<SpaceProps>`
  ${space}

  width: 85%;
  display: flex;
  align-items: center;
  z-index: 1;
`

export const ProgressBar = styled.div`
  width: ${(props: itensQuestions) =>
    props.percentage ? props.percentage : ''};
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: ${colors.grey['800']};
`
