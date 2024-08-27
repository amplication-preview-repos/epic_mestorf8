import { Driver } from "../driver/Driver";
import { User } from "../user/User";

export type Ride = {
  createdAt: Date;
  driver?: Driver | null;
  dropOffLocation: string | null;
  fare: number | null;
  id: string;
  pickUpLocation: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
