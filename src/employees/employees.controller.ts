import { Body, Controller, Get, Post ,UsePipes,ValidationPipe } from "@nestjs/common";
import { Query } from "@nestjs/common/decorators";
import { EmployeeTierValidationPipe } from "src/employee-tier-validation.pipe";
import { EmployeeCreateDto } from "./dto/EmployeeCreate.dto";
import { EmployeeSearchDto } from "./dto/EmployeeSearch.dto";
import { Employee } from "./schemas/Employee.shema";
import { EmployeesService } from "./service/employees.service";

@Controller('employees')
export class EmployeesController{

   constructor(private employeeService:EmployeesService){} 


   @Get()
  // @UsePipes(ValidationPipe)
   async getAllEmployees(@Query() param: EmployeeSearchDto): Promise<Employee[]> {
       if (Object.keys(param).length) {
           return this.employeeService.employeeSearch(param)
       } else {
           return this.employeeService.getAll()
       }
   }
    
   @Post()
   @UsePipes(ValidationPipe)
   @UsePipes(new EmployeeTierValidationPipe())
   createEmployee(@Body() employeeCreateDto:EmployeeCreateDto){
    this.employeeService.create(employeeCreateDto)
   }
}