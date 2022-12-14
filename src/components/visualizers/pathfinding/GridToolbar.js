import { Button, ButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import "../../../css/GridToolbar.css";
import {PathfindingAlgs} from "../../../constants/PathfindingAlgs";
import EditIcon from '@mui/icons-material/Edit';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useRef } from 'react';

const GridToolbar = ({ onSearch, setAlg, onClear, onRandomGrid, onClearWalls, edit, setEditMode, handleReset, setShowAni}) => {
    let editMode = useRef(edit);

    
    const editModeHandler = () => {
        setEditMode(!edit);
    };


    return (
        <div className="toolbarContainer">
            <div className="justify-content-between">
                 <ul className="toolbarRow d-flex flex-column flex-lg-row">&nbsp;<div className='Toolbar-txt'>*Press Edit first to add walls to the grid</div> &nbsp; 
                    <li className="toolbarItem d-flex flex-column flex-md-row"> 
                        <div className='Toolbar-txt'>Show Animations&nbsp;&nbsp;</div>
                        <label className="checkBox">
                            <input id="animation-checkBox"
                                type="checkbox"
                                defaultChecked={true}
                                onChange={setShowAni}
                            />
                            <span className="switch"></span>
                        </label>
                    </li>

                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <div className='Toolbar-txt'>Algorithm&nbsp;&nbsp;</div>
                        <label className="dropdown">
                            <select className="form-select algorithm-dropdown-toggle" id="alg-select" disabled
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    // onSearch(e.target.value);
                                    setAlg(e.target.value);
                                }}
                                defaultValue={PathfindingAlgs.Astar}>
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
                    </li>
                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <Button variant="secondary" className="my-btn" onClick={() => {
                            if(edit){
                                console.log('disabled = true');
                                document.getElementById('alg-select').disabled = true;
                                onSearch();
                            }else{
                                document.getElementById('alg-select').disabled = false;
                                handleReset();
                            }
                            
                            editModeHandler();
                            }} sx={{width: 160}}>
                            {!edit ? 
                            <> <div className='Toolbar-txt'> &nbsp;&nbsp;Edit</div>
                            </> : <><div className='Toolbar-txt'>&nbsp;&nbsp;Visualize</div></>}
                        </Button>
                    </li>

                    {/* TODO in edit mode, put these and any other editing tools where the action bar is */}
                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <Button variant="secondary" className="my-btn ms-2" onClick={() => {
                            if(edit)
                                onClearWalls();
                            }}><div className='Toolbar-txt'>Clear-Walls </div></Button> 
                    </li>
                    <li className="toolbarItem d-flex flex-column flex-md-row">
                        <Button className="my-btn" variant="dark" onClick={() => {
                            if(edit)
                                onRandomGrid();
                            }}><div className='Toolbar-txt'>Random Grid</div></Button>
                    </li>
                </ul>             
            </div>
        </div>
    );
}

export default GridToolbar;