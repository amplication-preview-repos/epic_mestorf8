import { Ride } from "../ride/Ride";
import { Vehicle } from "../vehicle/Vehicle";

export type Driver = {
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  rides?: Array<Ride>;
  updatedAt: Date;
  vehicle?: Vehicle | null;
  vehicles?: Array<Vehicle>;
};
