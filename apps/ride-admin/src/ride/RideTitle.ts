import { Ride as TRide } from "../api/ride/Ride";

export const RIDE_TITLE_FIELD = "dropOffLocation";

export const RideTitle = (record: TRide): string => {
  return record.dropOffLocation?.toString() || String(record.id);
};
