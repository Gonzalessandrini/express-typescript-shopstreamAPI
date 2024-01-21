export type Customer = {
  name: string;
  email: string;
  password: string;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  region: string | null;
  postal_code: string | null;
  shipping_region_id: number;
  credit_card: string | null;
  day_phone: string | null;
  eve_phone: string | null;
  mob_phone: string | null;
};

export type CreateCustomerResponse = Customer

export type CreateCustomerParams = {
  name: string;
  email: string;
  password: string;
};

export type LoginCredentials = Omit<CreateCustomerParams, 'name'>;

export type LoginCustomerResponse = {
  customer: {
    name: string;
    email: string;
    password: string;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    region: string | null;
    postal_code: string | null;
    shipping_region_id: number;
    credit_card: string | null;
    day_phone: string | null;
    eve_phone: string | null;
    mob_phone: string | null;
  };
  accessToken: string;
};

export type UpdateCustomerParams = {
  id: string;
  email: string;
  name: string;
  day_phone: string;
  eve_phone: string;
  mob_phone: string;
}

export type UpdateCustomerAddressParams = {
  id: string;
  address_1 : string;
  address_2 : string | undefined;
  city: string;
  region: string;
  postal_code: string;
}
