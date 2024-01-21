export type Category = {
    name: string;
    description: string;
    departmentId: string;
  };
  
export type CreateCategoryResponse = Category
  
export type CreateCategoryParams = Category

export type GetProductCategoryResponse = {
    category_id: string, 
    department_id : string,
    name: string 
}