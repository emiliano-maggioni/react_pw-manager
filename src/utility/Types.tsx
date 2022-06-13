export type stepProps =  {  
  text: string;
  children: any;
}

export type paragraphProps =  {  
  text: string;
  title?: string;
}

export type paragraphWithIconProps =  {  
  text: string;
  title?: string;
  children:any;
}

export type fieldWrapperProps = {
  title:string;
  required?:boolean;
  children:any;
}
export type feedbackFailProps =  {  
  viewHomePage:any;
}
export type titleBarProps =  {  
  title: string;
}
export type userPasswordData = {
  password:string;
  confirmpassword?:string;
  pista?:string;
}

export type stepperBaseProps = {
  steps:string[];
  showLabel?:boolean;
  actualStep:number;
}

export type navigationBarProps = {
  actualStep:number;
  typeBtNext?:string;
  btPrevAction?:any;  
  btNextAction?:any;  
  btNextEnabled?:boolean;
}




