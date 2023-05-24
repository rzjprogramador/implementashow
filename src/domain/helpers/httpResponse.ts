// deno-lint-ignore-file no-explicit-any

export type HttpResponse<T = any> = {
  data: T;
  statusCode?: number;
  info?: InfoController;
};

export interface InfoController {
  feedback: string;
  logRegistrado: boolean;
}

export const ok = (d: any,): HttpResponse => ({
  data: d,
  statusCode: 200,
  // info: {
  //   feedback: info.feedback,
  //   logRegistrado: info.logRegistrado,
  // },
});
