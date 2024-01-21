import { BaseLoggerFactory } from '../../../logger/Logger';
import { createCategory, getAllCategories, getAllCategoriesInADepartment, getProductCategory, getSingleCategory } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
    createCategory: createCategory({ logger: loggerFactory('CreateCategoryDA') }),
    getSingleCategory: getSingleCategory({ logger: loggerFactory('GetSingleCategoryDA') }),
    getAllCategories: getAllCategories({ logger: loggerFactory('GetAllCategoriesDA') }),
    getAllCategoriesInADepartment: getAllCategoriesInADepartment({ logger: loggerFactory('GetAllCategoriesInADepartmentDA') }),
    getProductCategory: getProductCategory({ logger: loggerFactory('GetProductCategoryDA') })
});
