import { AxiosRequestConfig } from 'axios';

export const buildConfig = ({
  baseURL,
  data,
  headers,
  method,
  params,
  path,
}: configHttpClient): AxiosRequestConfig => ({
  data,
  headers: {
    'content-type': 'application/json',
    ...headers,
  },
  method,
  params,
  url: `${baseURL}${path}`,
});
