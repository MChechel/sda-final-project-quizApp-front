export interface takingSurveyModel{
  id:number;
  results:string;
  userLogin:any;
  surveyUniqueCode:any;
  amountOfPoints: number,
  maxAmountOfPoints: number
}

export interface takingSurveyModelDTO{
  takingSurveyModelList:takingSurveyModel[];
  pageNum:number;
  totalItems:number;
}

