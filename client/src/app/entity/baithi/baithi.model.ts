import {Question}from '../Question/question.model'

export interface Baithi {
  id: string;
  idKyThi: string;
  createBy: string;
  Class:  Array<any>;
  confirmationBy: string;
  //   subject: { type: String, default: "" },
  password: string;
  status: boolean;
  timeStart: any;
  timeEnd: any;
  note: string;
  content: string;
  detailTest:Array<Question>
  createDate: string;
  dateMotify: string;
}
