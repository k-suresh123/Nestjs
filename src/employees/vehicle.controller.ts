import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehicleCreateDTO } from "./dto/VehicleCreate.dto";
import { Vehicle } from "./schemas/Vehicle.schema";
import { VehicleService } from "./service/vehicle.service";

@Controller('vehicles')
export class VehicleController{
    constructor(private vehicleService:VehicleService){}

    @Post()
    async create(@Body() vehicleCreateDTO:VehicleCreateDTO){
        console.log("date111",vehicleCreateDTO);
        let res = await this.vehicleService.create(vehicleCreateDTO);
        console.log(res);
        
    }

    @Get()
    async getAll(){
         return await this.vehicleService.getAll();
    }
}
