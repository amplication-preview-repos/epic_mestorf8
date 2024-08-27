import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RideModuleBase } from "./base/ride.module.base";
import { RideService } from "./ride.service";
import { RideController } from "./ride.controller";
import { RideResolver } from "./ride.resolver";

@Module({
  imports: [RideModuleBase, forwardRef(() => AuthModule)],
  controllers: [RideController],
  providers: [RideService, RideResolver],
  exports: [RideService],
})
export class RideModule {}
