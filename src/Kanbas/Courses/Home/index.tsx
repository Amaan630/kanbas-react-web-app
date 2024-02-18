import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
    return (
        <div>
            <h2 className="title">Home</h2>
            <div className="d-flex flex-fill gap-4">
                <div className="d-col">
                    <ModuleList />
                </div>
                <div
                    className="flex-grow-0 me-2 d-none d-lg-block px-2"
                    style={{ width: 250 }}
                >
                    <h3 className="title">Course Status</h3>
                    <div className="btn-group">
                        <button className="btn btn-secondary">Unpublish</button>
                        <button className="btn btn-secondary">Published</button>
                    </div>

                    <ul>
                        <li>
                            <a href="https://www.google.com">
                                Import existing content
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                Import from commons
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                {" "}
                                Choose home page{" "}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                View course stream
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                {" "}
                                New announcement{" "}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com"> New analytics </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                View course notifications
                            </a>
                        </li>
                    </ul>

                    <h2>Coming up</h2>
                    <a href="https://www.google.com"> View calendar </a>
                    <ul>
                        <li>
                            <a href="https://www.google.com">
                                Lecture CS4550 Sept 7 at 11:45AM
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                Lecture CS4550 Sept 8 at 11:45AM
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com">
                                Lecture CS4550 Sept 9 at 11:45AM
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;
