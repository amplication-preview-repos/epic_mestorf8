import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropOffLocation?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  pickUpLocation?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
