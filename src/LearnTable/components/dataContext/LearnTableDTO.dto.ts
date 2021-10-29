
export namespace LearnTableDTO {
  export interface ITableItem {
      id: number;
      clever: number;
      name: string;
      state: number;
      type: string;
      url: string;
  };

  interface ICourse extends ITableItem {
      type: 'course'
  };
  interface IAssessment extends ITableItem {
      type: 'assessment'
  };
  interface IEvent extends ITableItem {
      type: 'event'
  };

  export type LearnList = Array<ICourse | IAssessment | IEvent>

}