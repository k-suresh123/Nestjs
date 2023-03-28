import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { EmployeesController } from './employees.controller';
import { VehicleController } from './vehicle.controller';
import { EmployeeRepository } from './repository/employee.repository';
import { VehicleRepository } from './repository/vehicle.repository';
import { Employee, EmployeeSchema } from './schemas/Employee.shema';
import { Vehicle,VehicleSchema } from './schemas/Vehicle.schema';
import { EmployeesService } from './service/employees.service';
import { VehicleService } from './service/vehicle.service';
@Module({
    imports:[
     MongooseModule.forFeature([
        {name:Employee.name,schema:EmployeeSchema},
        {name:Vehicle.name,schema:VehicleSchema}
     ])
    ],
    controllers:[EmployeesController,VehicleController],
    providers:[
        EmployeesService,
       EmployeeRepository,
       VehicleService,
       VehicleRepository
    ]
})
export class EmployeesModule {}
