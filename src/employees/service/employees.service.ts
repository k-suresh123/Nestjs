import { Injectable } from "@nestjs/common";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { EmployeeSearchDto } from "../dto/EmployeeSearch.dto";
import { EmployeeRepository } from "../repository/employee.repository";
import { Employee } from "../schemas/Employee.shema";



@Injectable()
export class EmployeesService{
 
   constructor(private employeeRepository:EmployeeRepository){}

   async getAll(): Promise<Employee[]> {
      return await this.employeeRepository.findAll();
  }

 async create(employeeCreateDto:EmployeeCreateDto):Promise<Employee>{
 return await this.employeeRepository.create(employeeCreateDto)
 }

 employeeSearch(employeeSearchDto: EmployeeSearchDto) {
   return this.employeeRepository.findWithFilters (employeeSearchDto);
}
}