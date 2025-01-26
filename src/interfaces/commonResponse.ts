enum Severity {
  Warning = 1,
  Error,
  Info,
}

type MessageType = {
  code: number;
  severity: Severity.Warning | Severity.Error | Severity.Info;
  message: string;
};

export interface commonResponse<TData = any> {
  entity?: TData;
  entities?:TData[];
  messages: MessageType[] | null;
  isSuccess: boolean;
  page?: number;
  pageSize?: number;
  totalCount?: number;
}
