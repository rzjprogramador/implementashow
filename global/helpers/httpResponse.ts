// deno-lint-ignore-file no-explicit-any

export type HttpResponse<T = any> = {
  data: T;
  statusCode: number;
  info: string[];
};

export const ok = (d: any, infoList: string[]): HttpResponse => ({
  data: d,
  statusCode: 200,
  info: infoList,
});
