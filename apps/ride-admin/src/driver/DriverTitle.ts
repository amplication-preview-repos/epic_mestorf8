import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "licenseNumber";

export const DriverTitle = (record: TDriver): string => {
  return record.licenseNumber?.toString() || String(record.id);
};
