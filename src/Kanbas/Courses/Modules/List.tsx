import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div
                className="btn-group bottom-border overflow-y-scroll"
                role="group"
                aria-label="Basic example"
            >
                <button className="flex-shrink-0 btn btn-secondary">
                    Collapse All
                </button>
                <button className="flex-shrink-0 btn btn-secondary">
                    View Progress
                </button>
                <select className="flex-shrink-0 form-select">
                    <option>Publish All</option>
                    <option>Publish All Modules and Items</option>
                    <option>Publish Modules only</option>
                    <option>UnPublish All Modules</option>
                </select>
                <button className="flex-shrink-0 btn btn-primary">
                    + Module
                </button>
            </div>

            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}
                    >
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;
