export interface Response<T> {
  path: string;
  result: T;
  status: boolean;
  statusCode: string;
}
