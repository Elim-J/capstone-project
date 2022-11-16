import React, { useState } from "react";
import Collapse from '@mui/material/Collapse';
import Container from "@mui/material/Container";
import { DialogTitle, Box, Button, createTheme, ThemeProvider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SortingAlgs, PathfindingAlgs } from "../../../constants/SortingAlgs";


const CodeContent = ({alg, open, setOpen, getMessage}) => {

    //copy and pasted from actionbar. refactor later
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const btnTheme = createTheme({
        palette: {
            black: createColor('#000000'),
            white: createColor('#ffffff'),
        },
    });

    const codePicker = () => {
        //TODO eventually use enum
        let code;
        switch(alg){
            case SortingAlgs.BubbleSort:
                code = BubbleSort;
                break;
            case SortingAlgs.InsertSort:
                code = InsertSort;
                break;
            default:
                code = "Nothing selected";
                break;
        }
        return code;
    }
    // console.log(message);

    const BubbleSort = (
        <div className="code-content">
            <pre id="code-0">{'passes = 0'}</pre>
            <pre id="code-1">{'hasSwapped = false'}</pre>
            <pre id="code-2">{'do {'}</pre>
            <pre id="code-3">{'   ++passes;'}</pre>
            <pre id="code-4">{'   for (i = 0; i < arr.length - passes; i++){'}</pre>
            <pre id="code-5">{'     if (arr[i] > arr[i+1]){'}</pre>
            <pre id="code-6">{'          const swap = arr[i]'}</pre>
            <pre id="code-7">{'          arr[i] = arr[i+1]'}</pre>
            <pre id="code-8">{'          arr[i+1] = swap'}</pre>
            <pre id="code-9">{'          hasSwapped = true'}</pre>
            <pre id="code-10">{'     }'}</pre>
            <pre id="code-11">{'   }'}</pre>
            <pre id="code-12">{'} while(hasSwapped)'}</pre>
        </div>
    );

    const InsertSort = (
        <div className="code-content">
            <pre id="code-0">{'passes = 0'}</pre>
            <pre id="code-1">{'hasSwapped = false'}</pre>
            <pre id="code-2">{'do {'}</pre>
            <pre id="code-3">{'   ++passes;'}</pre>
            <pre id="code-4">{'   for (i = 0; i < arr.length - passes; i++){'}</pre>
            <pre id="code-5">{'     if (arr[i] > arr[i+1]){'}</pre>
            <pre id="code-6">{'          const swap = arr[i]'}</pre>
            <pre id="code-7">{'          arr[i] = arr[i+1]'}</pre>
            <pre id="code-8">{'          arr[i+1] = swap'}</pre>
            <pre id="code-9">{'          hasSwapped = true'}</pre>
            <pre id="code-10">{'     }'}</pre>
            <pre id="code-11">{'   }'}</pre>
            <pre id="code-12">{'} while(hasSwapped)'}</pre>
        </div>
    );

    const AStar = (
        <div className="code-content">
            <pre id="code-0">{'passes = 0'}</pre>
            <pre id="code-1">{'hasSwapped = false'}</pre>
            <pre id="code-2">{'do {'}</pre>
            <pre id="code-3">{'   ++passes;'}</pre>
            <pre id="code-4">{'   for (i = 0; i < arr.length - passes; i++){'}</pre>
            <pre id="code-5">{'     if (arr[i] > arr[i+1]){'}</pre>
            <pre id="code-6">{'          const swap = arr[i]'}</pre>
            <pre id="code-7">{'          arr[i] = arr[i+1]'}</pre>
            <pre id="code-8">{'          arr[i+1] = swap'}</pre>
            <pre id="code-9">{'          hasSwapped = true'}</pre>
            <pre id="code-10">{'     }'}</pre>
            <pre id="code-11">{'   }'}</pre>
            <pre id="code-12">{'} while(hasSwapped)'}</pre>
        </div>
    );

    // console.log(getMessage());
    return (
        <Collapse in={open}>
            <DialogTitle>
                    <Box display="flex" flexDirection="column" justify="flex-end" alignItems="flex-end">
                        <ThemeProvider theme={btnTheme}>
                        <Button 
                            color="black" 
                            style={{position: "absolute", top: 0, right: 0}}
                            onClick={() => setOpen(!open)}>
                            <CloseIcon/>
                        </Button>
                        </ThemeProvider>
                    </Box>
                </DialogTitle>
            <div className="code-modal">
            <Container>
                <div className="code-title">
                    <h2>{alg}</h2>
                </div>
                </Container>
            <Container>
                <div className="code-message">
                    {getMessage()}
                </div>
            </Container>
            <Container>
                
                {codePicker()}
            </Container>
            </div>
        </Collapse>
    );

}
export default CodeContent;
