import { BaseLoggerFactory } from '../../../logger/Logger';
import { createDepartment, getAllDepartments, getDepartment } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
  createDepartment: createDepartment({ logger: loggerFactory('CreateDepartmentDA') }),
  getDepartment: getDepartment({ logger: loggerFactory('GetDepartmentDA') }),
  getAllDepartment: getAllDepartments({ logger: loggerFactory('GetAllDepartmentsDA') })
});
