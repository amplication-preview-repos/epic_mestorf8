import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
