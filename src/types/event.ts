
export type EventType = 'hackathon' | 'technical';
export type EventLocation = 'on-campus' | 'off-campus';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  location: EventLocation;
  date: string;
  image: string;
}
