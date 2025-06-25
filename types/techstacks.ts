type TechStackFieldData ={
    teckStackIcon:string;
}
type TechStacksFieldWrapper ={
  techStacksGroup: TechStackFieldData;
}
export type TechStackType = {
  id:string;  
  title: string;
  techStacksFields:TechStacksFieldWrapper;
};
