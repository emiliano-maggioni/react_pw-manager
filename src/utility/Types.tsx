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
  additionalClass?:any;
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




