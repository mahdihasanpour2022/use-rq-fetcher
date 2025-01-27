# use-rq-fetcher

A custom React Query fetcher hook for dynamic Axios integrations.

## Installation

To install the package, run the following command:

```bash
npm install use-rq-fetcher @tanstack/react-query axios

or ...

yarn add use-rq-fetcher @tanstack/react-query axios

## 🚀 Features

- **Dynamic Response Types**: Fully type-safe with TypeScript generics.
- **Integration with Axios**: Easy configuration of headers, base URLs, and params.
- **React Query Powered**: Leverages the full capabilities of React Query for caching, refetching, and error handling.
- **Highly Configurable**: Supports all options of React Query's `useQuery`.

## 🛠️ Usage
Basic Example


import React from "react";
import { useRQFetcher } from "use-rq-fetcher";
import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: "https://api.example.com",
});

// Define the response type
type MyResponseType = {
  id: number;
  name: string;
};

const MyComponent = () => {
  const { data, isLoading, error } = useRQFetcher<MyResponseType>({
    API,
    url: "/endpoint",
    queryKey: ["example-data"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return <div>Data: {data?.name}</div>;
};

export default MyComponent;