export interface Survey {
  id: number;
  title: string;
  description: string;
  hashCode: string;

}

export interface SurveyDTO{
  listOfSurveys:any[];
  pageNum:number;
  totalItems:number;
  hashCode: string;
}
