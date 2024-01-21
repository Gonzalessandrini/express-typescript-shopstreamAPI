const statusCodeMapper: Map<string, number> = new Map(
  Object.entries({
    OTPResponse: 200,
    Created: 201,
    LoginResponse: 202
  })
);

export type Response = {
  status: number;
  data: any;
};

export type ResponseMapper = (response: any) => Response;

export const presentResponse: (successCode?: number) => ResponseMapper = (successCode?: number) => (response: any) => ({
  data: response,
  status: successCode || statusCodeMapper.get(response?.constructor?.name) || 200
});
