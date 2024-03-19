import { useState } from "react";
import { Link } from "react-router-dom";
import dbCourses from "../Database/courses.json";

function Dashboard() {
    const [courses, setCourses] = useState(dbCourses);
    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
    });

    const addNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <h5>Course</h5>
            <input
                value={course.name}
                className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
                value={course.number}
                className="form-control"
                onChange={(e) =>
                    setCourse({ ...course, number: e.target.value })
                }
            />
            <input
                value={course.startDate}
                className="form-control"
                type="date"
                onChange={(e) =>
                    setCourse({ ...course, startDate: e.target.value })
                }
            />
            <input
                value={course.endDate}
                className="form-control"
                type="date"
                onChange={(e) =>
                    setCourse({ ...course, endDate: e.target.value })
                }
            />
            <button className="btn btn-primary" onClick={addNewCourse}>
                Add
            </button>

            <button className="btn btn-primary" onClick={updateCourse}>
                Update
            </button>

            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="col"
                            style={{ width: "300px" }}
                        >
                            <div className="card">
                                <img
                                    src="/images/reactjs.jpg"
                                    className="card-img-top"
                                    style={{ maxHeight: "150px" }}
                                />
                                <div className="card-body">
                                    <Link
                                        className="card-title"
                                        to={`/Kanbas/Courses/${course._id}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "navy",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {course.name}

                                        <button
                                            className="btn btn-primary"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </Link>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <Link
                                        to={`/Kanbas/Courses/${course._id}`}
                                        className="btn btn-primary"
                                    >
                                        {" "}
                                        Go{" "}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <pre>
                <code>{JSON.stringify(courses, null, 2)}</code>
            </pre> */}
        </div>
    );
}

export default Dashboard;
