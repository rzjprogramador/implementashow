// deno-lint-ignore-file no-explicit-any

type HttpResponse<T = any> = {
  data: T;
  statusCode?: number;
  info?: InfoController;
};

interface InfoController {
  feedback: string;
  logRegistrado: boolean;
}

const ok = (d: any): HttpResponse => ({
  data: d,
  statusCode: 200,
  // info: {
  //   feedback: info.feedback,
  //   logRegistrado: info.logRegistrado,
  // },
});

export { type HttpResponse, type InfoController, ok };
