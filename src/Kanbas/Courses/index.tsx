import { HiMiniBars3 } from "react-icons/hi2";
import { useLocation, useParams } from "react-router";
import { Routes, Route, Navigate } from "react-router-dom";
import courses from "../Database/courses.json";
import modules from "../Database/modules.json";
import CourseNavigation from "./Navigation";
import "./index.css";
import ModuleList from "./Modules/List";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
    const { pathname } = useLocation();
    const params = useParams();
    const { courseId } = params;
    const courseNavigationTab = params["*"] || null;
    const course = courses.find((course) => course._id === courseId);
    const modulesForThisCourse = modules.filter(
        (module) => module.course === courseId
    );
    return (
        <div style={{ width: "100%" }}>
            <h1 className="heading">
                <HiMiniBars3 className="heading-icon" />
                <span className="heading-text">
                    {course?.name ? course.name : "Courses Component"}
                    {courseNavigationTab ? ` - ${courseNavigationTab}` : ""}
                </span>
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <CourseNavigation />

                <div
                    style={{
                        paddingTop: 8,
                        width: "100%",
                    }}
                >
                    <div className="overflow-y-scroll">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route
                                path="Assignments"
                                element={<Assignments />}
                            />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<h1>Assignment Editor</h1>}
                            />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>

            {/* <pre>
                <code>{JSON.stringify(modulesForThisCourse, null, 2)}</code>
            </pre> */}
        </div>
    );
}

export default Courses;
