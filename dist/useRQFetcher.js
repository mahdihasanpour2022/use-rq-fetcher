import API from "@/utils/interceptor";
import { useQuery, } from "@tanstack/react-query";
export const useRQFetcher = ({ url, queryKey, headers = {}, baseURL = undefined, params, pathParams = {}, ...rest }) => {
    const queryFn = async () => {
        const { data } = await API.get(url, {
            baseURL,
            headers,
            params,
            pathParams,
        });
        return data;
    };
    const queryRes = useQuery({
        queryKey,
        queryFn,
        ...rest,
    });
    return { ...queryRes };
};
