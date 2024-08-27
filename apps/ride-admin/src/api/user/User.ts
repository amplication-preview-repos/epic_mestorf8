import { Ride } from "../ride/Ride";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  rides?: Array<Ride>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
