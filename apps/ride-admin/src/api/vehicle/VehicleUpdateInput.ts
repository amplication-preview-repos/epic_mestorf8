import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverUpdateManyWithoutVehiclesInput } from "./DriverUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverUpdateManyWithoutVehiclesInput;
  make?: string | null;
  model?: string | null;
  registrationNumber?: string | null;
  year?: number | null;
};
