export const getParticipants = (participants: any) => {
  if (!participants) return [];

  return participants.slice(0, 3);
};
