
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";




function App() {
  const appRouter = createBrowserRouter([{
   path: "/",
   element : <Body/>,
   children : [
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    }
  ],
  }])

  return (
    <>
   
     
      <RouterProvider router={appRouter}/>
   
    </>
  );
}

export default App;
