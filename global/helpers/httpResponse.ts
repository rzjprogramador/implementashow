// deno-lint-ignore-file no-explicit-any

export type HttpResponse<T = any> = {
  data: T;
  statusCode?: number;
  info: InfoController;
};

export interface InfoController {
  feedback: string
  logs: string[]
}

export const ok = (d: any, info: InfoController): HttpResponse => ({
  data: d,
  statusCode: 200,
  info: {
    feedback: info.feedback,
    logs: info.logs
  },
});



