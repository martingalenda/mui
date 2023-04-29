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
        <Routes basename="/mui">
            <Route path="/mui/" element={<Inputs/>}/>
            <Route path="/mui/inputs" element={<Inputs/>}/>
            <Route path="/mui/data_display" element={<DataDisplay/>}/>
            <Route path="/mui/feedback" element={<FeedbackMUI/>}/>
            <Route path="/mui/surfaces" element={<Surfaces/>}/>
            <Route path="/mui/navigation" element={<Navigation/>}/>
            <Route path="/mui/layout" element={<Layout/>}/>
            <Route path="/mui/utils" element={<Utils/>}/>
        </Routes>
    )
 }

 export default AppRouter 