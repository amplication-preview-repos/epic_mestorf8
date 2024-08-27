import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="drivers"
          reference="Driver"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DriverTitle} />
        </ReferenceArrayInput>
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <TextInput label="registrationNumber" source="registrationNumber" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
