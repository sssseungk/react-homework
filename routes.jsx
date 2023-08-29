import AddMusic from "@/layout/AddMusic";
import Chart from "@/pages/Chart";
import Detail from "@/pages/Detail";
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
      <Route path="music/detail/:musicId" element={<Detail />} />
      <Route path="new" element={<AddMusic />} />
    </>

  )
)

export default router;