import { Routes, Route } from "react-router-dom"

import DataDisplay from "./pages/DataDisplay"
import FeedbackMUI from "./pages/Feedback"
import Inputs from "./pages/Inputs"
import Layout from "./pages/Layout"
import Navigation from "./pages/Navigation"
import Surfaces from "./pages/Surfaces"
import Utils from "./pages/Utils"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Inputs/>}/>
            <Route path="/inputs" element={<Inputs/>}/>
            <Route path="/data_display" element={<DataDisplay/>}/>
            <Route path="/feedback" element={<FeedbackMUI/>}/>
            <Route path="/surfaces" element={<Surfaces/>}/>
            <Route path="/navigation" element={<Navigation/>}/>
            <Route path="/layout" element={<Layout/>}/>
            <Route path="/utils" element={<Utils/>}/>
        </Routes>
    )
 }

 export default AppRouter