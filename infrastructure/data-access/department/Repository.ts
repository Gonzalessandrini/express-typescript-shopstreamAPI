import { DepartmentModel } from './Schema';
import { CreateDepartmentParamsRepository } from './Types';

export const GetDepartmentRepository = async (_id: string): Promise<DepartmentModel | null> => {
  return await DepartmentModel.findOne({ _id })
};

export const CreateDepartmentRepository = async (Department: CreateDepartmentParamsRepository): Promise<DepartmentModel> => {
  return await DepartmentModel.create(Department);
};

export const GetAllDepartmentsRepository = async (): Promise<any> => {
  return await DepartmentModel.find({})
}