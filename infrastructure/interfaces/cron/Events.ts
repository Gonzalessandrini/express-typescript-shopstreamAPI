export type Task = {
  time: string;
  name: string;
  uoc: any;
};
export const events: (uoc: any) => Array<Task> = (uoc: any) => [
  //   {
  //     time: '*/5 * * * *',
  //     uoc: uoc.checkStatus,
  //     name: 'Status checker'
  //   }
];
