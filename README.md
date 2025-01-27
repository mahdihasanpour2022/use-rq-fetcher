# use-rq-fetcher

A custom React Query fetcher hook for dynamic Axios integrations.

### 📦 Installation
First, install the package:
To install the package, run the following command:

npm install use-rq-fetcher

yarn add use-rq-fetcher

## 🚀 Features

- **Dynamic Response Types**: Fully type-safe with TypeScript generics.
- **Integration with Axios**: Easy configuration of headers, base URLs, and params.
- **React Query Powered**: Leverages the full capabilities of React Query for caching, refetching, and error handling.
- **Highly Configurable**: Supports all options of React Query's `useQuery`.

### 📚 Peer Dependencies

you must install this packajes !
برای استفاده از این هوک ، مطمئن شوید موارد زیر در پروژه شما نصب است 

<a target="_blank" href='https://react.dev/'>
    <img width="94" height="94" src="https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.png" />
</a>

typescript: >=5.7.3,
@tanstack/react-query: >=5.64.2,
axios: >=1.7.9,
react: >=19.0.0

### 🛠️ Example Usage

```typescript
import React from "react";
import { useRQFetcher } from "use-rq-fetcher";
import axios from "axios";
import API from "@/utils/interceptor"; // from your axios instance in interceptor

interface MyResponseType {
  name : string
}

const MyComponent = () => {
  const { data, isLoading, error } = useRQFetcher<commonresponse<MyResponseType>, commonresponse>({
    API,
    url: "/endpoint",
    queryKey: ["example-data"],
    params: { page: "example number like 1" , limit: "example number like 10" },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return <div>Data: {data?.name}</div>;
};

export default MyComponent;
````


## Inputs (Parameters)

| Parameter   | Type                       | Default         | Description                                                                 |
|-------------|----------------------------|-----------------|-----------------------------------------------------------------------------|
| `API`       | `AxiosInstance`           | **Required**   | An Axios instance for making HTTP requests.                                |
| `url`       | `string`                  | **Required**   | The endpoint URL for the request.                                          |
| `queryKey`  | `Array<string | number>`  | **Required**   | A unique key for React Query to identify this query.                       |
| `headers`   | `AxiosHeaders` or `object`| `{}`           | Additional headers for the request.                                        |
| `baseURL`   | `string`                  | `undefined`    | Base URL for the API, used if provided.                                    |
| `params`    | `object`                  | `undefined`    | Query parameters to append to the URL.                                     |
| `pathParams`| `object`                  | `{}`           | Path parameters to replace placeholders in the URL.                        |
| `...rest`   | `UseQueryOptions<TData, TError>` | N/A       | Additional options for the `useQuery` hook from React Query.               |



### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### 🔄 Changelog
[1.0.10] - Initial Release :
