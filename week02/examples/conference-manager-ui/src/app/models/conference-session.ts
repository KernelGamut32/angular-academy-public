import { Attendee } from './attendee';
import { Presenter } from './presenter';

export interface ConferenceSession {
  id?: number;
  title: string;
  description?: string;
  startTime: string; // ISO
  endTime: string; // ISO
  attendees?: Attendee[];
  presenters?: Presenter[];
}
