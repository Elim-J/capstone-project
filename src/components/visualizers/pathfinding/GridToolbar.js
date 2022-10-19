import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import "../../../css/GridToolbar.css";
import PathfindingAlgs from "../../../constants/PathfindingAlgs";

const GridToolbar = ({ onSearch, setAlg, onClear, onRandomGrid, onClearWalls }) => {


    return (
        <div className="toolbarContainer">
            <div className="justify-content-between">
                <ul className="toolbarRow d-flex flex-column flex-lg-row">
                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <h5>Show animations&nbsp;&nbsp;</h5>
                        <label className="checkBox">
                            <input
                                type="checkbox"
                                defaultChecked={true}
                            />
                            <span className="switch"></span>
                        </label>
                    </li>

                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <h5>Algorithm&nbsp;&nbsp;</h5>
                        <label className="dropdown">
                            <select className="form-select algorithm-dropdown-toggle"
                                onChange={(e) => setAlg(e.target.value)}
                                defaultValue={PathfindingAlgs.None}>
                                    {Object.values(PathfindingAlgs).map(val => (
                                        <option
                                            aria-selected="true"
                                            key={val}
                                            value={val}
                                            >
                                            {val}
                                        </option>
                                        )
                                    )}
                            </select>
                        </label>
                        <Button variant="secondary" className="my-btn ms-2" onClick={onSearch}>Search</Button>
                    </li>

                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <Button variant="secondary" className="my-btn" onClick={onClear}>Clear Path</Button>
                        <Button variant="secondary" className="my-btn ms-2" onClick={onClearWalls}>Clear Walls</Button>
                    </li>
                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <Button className="my-btn" variant="dark" onClick={onRandomGrid}>Randomize Grid</Button>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default GridToolbar;