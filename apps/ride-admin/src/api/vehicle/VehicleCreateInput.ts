import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverCreateNestedManyWithoutVehiclesInput } from "./DriverCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverCreateNestedManyWithoutVehiclesInput;
  make?: string | null;
  model?: string | null;
  registrationNumber?: string | null;
  year?: number | null;
};
