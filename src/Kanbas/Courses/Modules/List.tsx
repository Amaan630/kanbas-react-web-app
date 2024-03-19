import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";

import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();

    const moduleList = useSelector(
        (state: KanbasState) => state.modulesReducer.modules
    );
    const module = useSelector(
        (state: KanbasState) => state.modulesReducer.module
    );
    const dispatch = useDispatch();

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
                <li className="list-group-item">
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            dispatch(addModule({ ...module, course: courseId }))
                        }
                    >
                        Add
                    </button>

                    <button onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>

                    <input
                        value={module.name}
                        onChange={(e) =>
                            dispatch(
                                setModule({ ...module, name: e.target.value })
                            )
                        }
                    />
                    <textarea
                        value={module.description}
                        onChange={(e) =>
                            dispatch(
                                setModule({
                                    ...module,
                                    description: e.target.value,
                                })
                            )
                        }
                    />
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button
                                onClick={() =>
                                    dispatch(deleteModule(module._id))
                                }
                            >
                                Delete
                            </button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))}
                {/* .map((module) => (
                        <li
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}
                        >
                            <div>
                                <FaEllipsisV className="me-2" />

                                <button
                                    onClick={(event) => {
                                        setModule(module);
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteModule(module._id)}
                                >
                                    Delete
                                </button>

                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any) => (
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
                    ))} */}
            </ul>
        </>
    );
}
export default ModuleList;
