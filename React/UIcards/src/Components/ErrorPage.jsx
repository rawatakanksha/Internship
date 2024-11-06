import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
 const error=useRouteError();
 
    return(
      <>
        <div className="flex flex-col justify-center items-center">
       <p className="text-2xl"><strong>Oopps!!</strong></p>
       <p>Sorry, an unexpected error has Occured</p>
       </div>
       </>
    );

}