import styled from 'styled-components'

export const MainChatBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em;
  gap: 1em;
  overflow-y: scroll;
  scroll-snap-align: end;
  background: ${({ theme }) => theme.colorMode === 'dark' ? 'black': 'white'};
`
