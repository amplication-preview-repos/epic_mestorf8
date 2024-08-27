/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Ride } from "../../ride/base/Ride";
import { Vehicle } from "../../vehicle/base/Vehicle";

@ObjectType()
class Driver {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licenseNumber!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Ride],
  })
  @ValidateNested()
  @Type(() => Ride)
  @IsOptional()
  rides?: Array<Ride>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Vehicle,
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicle?: Vehicle | null;

  @ApiProperty({
    required: false,
    type: () => [Vehicle],
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicles?: Array<Vehicle>;
}

export { Driver as Driver };