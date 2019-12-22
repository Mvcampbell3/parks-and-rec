import { Park } from './park';

export interface Trip {
  name: string,
  _id: string,
  parkIds: [Park],
  userId: {
    tripIds: [string],
    _id: string,
    email: string,
    firstname: string,
    lastname: string
  }
}