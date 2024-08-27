import { Driver } from "../driver/Driver";

export type Vehicle = {
  createdAt: Date;
  driver?: Driver | null;
  drivers?: Array<Driver>;
  id: string;
  make: string | null;
  model: string | null;
  registrationNumber: string | null;
  updatedAt: Date;
  year: number | null;
};
