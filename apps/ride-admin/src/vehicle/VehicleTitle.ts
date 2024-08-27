import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "make";

export const VehicleTitle = (record: TVehicle): string => {
  return record.make?.toString() || String(record.id);
};
