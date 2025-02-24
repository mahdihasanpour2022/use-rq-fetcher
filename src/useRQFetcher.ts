import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosHeaders, AxiosInstance, Method, RawAxiosRequestHeaders } from "axios";


export const useRQFetcher = <TData, TError >({
  API,
  url,
  queryKey,
  headers = {},
  baseURL = undefined,
  params,
  pathParams = {},
  ...rest
}:
UseQueryOptions<TData, TError> & {
  API:AxiosInstance,
  url: string;
  baseURL?: string;
  headers?:
    | (RawAxiosRequestHeaders &
        Partial<
          {
            [Key in Method as Lowercase<Key>]: AxiosHeaders;
          } & { common: AxiosHeaders }
        >)
    | AxiosHeaders;
  params?: { [key: string]: any };
  pathParams?: { [key: string]: any };
}) => {
  const queryFn = async () => {
    const { data } = await API.get(url, {
      baseURL,
      headers,
      params,
      pathParams,
    });
    return data;
  };

  const queryRes: UseQueryResult<TData, TError> = useQuery({
    queryKey,
    queryFn,
    ...rest,
  });

  return { ...queryRes };
};
