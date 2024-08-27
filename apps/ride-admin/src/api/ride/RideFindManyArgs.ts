import { RideWhereInput } from "./RideWhereInput";
import { RideOrderByInput } from "./RideOrderByInput";

export type RideFindManyArgs = {
  where?: RideWhereInput;
  orderBy?: Array<RideOrderByInput>;
  skip?: number;
  take?: number;
};
