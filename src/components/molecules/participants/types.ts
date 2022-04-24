export interface TypeParticipant {
  name: string;
  avatar: string;
}

export interface Props {
  participants: Maybe<TypeParticipant[]>;
}

