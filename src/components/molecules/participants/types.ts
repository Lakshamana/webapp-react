export interface TypeParticipant {
  id: number;
  img: string;
}

export interface Props {
  participants: Array<TypeParticipant>;
  totalParticipants: number;
}

export const defaultProps = {
  totalParticipants: 0,
};
