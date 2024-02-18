import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigator />
            <div className="p-4" style={{ width: "100%" }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account" element={<h1>Account</h1>} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:courseId/*" element={<Courses />} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;
