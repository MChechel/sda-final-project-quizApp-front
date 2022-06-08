export interface theQuestion{
  id:number;
  content:string;
  points:number;
}

export interface theQuestionDTO{
  listOfQuestions:any[];
  pageNum:number;
  totalItems:number;
}
