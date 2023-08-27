import RootLayout from "@/layout/RootLayout";
import Chart from "@/pages/Chart";
import Home from "@/pages/Home";
import Like from "@/pages/Like";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>} />
      <Route path="chart" element={<Chart/>}/>
      <Route path="like" element={<Like/>}/>
    </>

  )
)

export default router;
