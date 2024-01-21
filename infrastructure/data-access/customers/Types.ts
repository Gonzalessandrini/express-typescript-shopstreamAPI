export type CreateCustomerParamsRepository = {
    name: string;
    email: string;
    password: string;
}

export type LoginCustomerParamsRepository = {
    email: string;
    password: string;
}

export type UpdateCustomerParamsRepository = {
    email: string;
    name: string;
    eve_phone: string;
    day_phone: string;
    mob_phone: string;
}

export type UpdateCustomerAddressParamsRepository = {
    address_1 : string,
    address_2 : string,
    city : string,
    region : string,
    postal_code : string,
}

