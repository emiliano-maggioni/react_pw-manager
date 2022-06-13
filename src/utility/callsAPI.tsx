import axios from "axios";

export const instance = axios.create({
  baseURL: "https://openclose-pwmanager-default-rtdb.europe-west1.firebasedatabase.app/",
});

instance.interceptors.request.use((config) => {
    config.headers!["Content-Type"] = "application/json";
    return config;
}
);

instance.interceptors.response.use((res: any) => res, (error: any) => {  console.log("-- error:",error);  }  );

 //FUNCTION TO DO GET API
 export const getAPI = (path:string) => {

  return instance.get(path).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{   
     return "ERROR"; 
  });
}

 //FUNCTION TO DO POST API
 export const postAPI = (path:string,payload:any) => {

  return instance.post(path,payload).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{     
      return "ERROR";
  });

}


