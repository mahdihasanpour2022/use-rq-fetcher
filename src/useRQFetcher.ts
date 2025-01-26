import { commonResponse } from "./interfaces/commonResponse";
// import API from "./utils/interceptor";
import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import Axios, { AxiosHeaders, Method, RawAxiosRequestHeaders } from "axios";


export const useRQFetcher = <TData, TError = commonResponse>({
  url,
  queryKey,
  headers = {},
  baseURL = undefined,
  params,
  pathParams = {},
  ...rest
}:
UseQueryOptions<TData, TError> & {
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
    const { data } = await Axios.get(url, {
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
