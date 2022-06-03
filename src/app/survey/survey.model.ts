export interface Survey {
  id: number;
  title: string;
  description: string;
}

export interface SurveyDTO{
  listOfSurveys:any[];
  pageNum:number;
  totalItems:number;
}
