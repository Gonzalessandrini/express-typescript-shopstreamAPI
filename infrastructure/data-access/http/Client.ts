import axios from 'axios';

export type Input<B> = {
  url: string;
  body?: B;
  headers?: any;
};

export type Output<O> = {
  status: number;
  body: O;
};

export async function httpPost<B, O>({ url, body, headers }: Input<B>): Promise<Output<O>> {
  return axios
    .post(url, body, { headers })
    .then((res) => ({ status: res.status, body: res.data as O }))
    .catch((err) => {
      err?.response?.data ? (console.log(err.config), console.log(err?.response?.data)) : console.log(err);
      return { status: err?.response?.status ?? 500, body: err?.response?.data };
    });
}

export async function httpGet<B, O>({ url, headers }: Input<B>): Promise<Output<O>> {
  return axios
    .get(url, { headers })
    .then((res) => ({ status: res.status, body: res.data as O }))
    .catch((err) => {
      console.log(err);
      return { status: err?.response?.status ?? 500, body: err?.response?.data };
    });
}

export async function httpPut<B, O>({ url, body, headers }: Input<B>): Promise<Output<O>> {
  return axios
    .put(url, body, { headers })
    .then((res) => ({ status: res.status, body: res.data as O }))
    .catch((err) => ({ status: err?.response?.status ?? 500, body: err?.response?.data }));
}

export async function httpDelete<B, O>({ url, body, headers }: Input<B>): Promise<Output<O>> {
  return axios
    .delete(url, { headers, data: body })
    .then((res) => ({ status: res.status, body: res.data as O }))
    .catch((err) => ({ status: err?.response?.status ?? 500, body: err?.response?.data }));
}

export async function httpPatch<B, O>({ url, body, headers }: Input<B>): Promise<Output<O>> {
  return axios
    .patch(url, body, { headers })
    .then((res) => ({ status: res.status, body: res.data as O }))
    .catch((err) => ({ status: err?.response?.status ?? 500, body: err?.response?.data }));
}
