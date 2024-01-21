import { CreateDepartmentParams, CreateDepartmentResponse, Department } from './Department';

export type CreateDepartment = (department: CreateDepartmentParams) => Promise<CreateDepartmentResponse>;
export type GetDepartment = (id: string) => Promise<Department>;
export type GetAllDepartments = () => Promise<any>