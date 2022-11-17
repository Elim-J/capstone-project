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

    const AStarManhattan = (
        <div className="code-content">
            <pre id="code-0">{'//priorityQueue is a queue sorted by the heuristic of each node'}</pre>
            <pre id="code-0">{'function AStarManhattan(startNode, endNodes){'}</pre>
            <pre id="code-0">{'   startNode.heuristic = calcHeuristic(node, endNodes);'}</pre>
            <pre id="code-0">{'   startNode.prev = NULL'}</pre>
            <pre id="code-0">{'   priorityQueue.offer(startNode)'}</pre>
            <pre id="code-1">{'   hasSwapped = false'}</pre>
            <pre id="code-1">{'   while(!priorityQueue.isEmpty()){'}</pre>
            <pre id="code-1">{'      let node = priorityQueue.poll();'}</pre>
            <pre id="code-1">{'      if (node.isEnd) {'}</pre>
            <pre id="code-1">{'         let path = [];'}</pre>
            <pre id="code-1">{'         while (node){'}</pre>
            <pre id="code-1">{'            path.insert(node);'}</pre>
            <pre id="code-1">{'            node = node.prev;'}</pre>
            <pre id="code-1">{'         }'}</pre>
            <pre id="code-1">{'      }'}</pre>
            <pre id="code-1">{'      node.above.heuristic = calcHeuristic(node.above, endNodes);'}</pre>
            <pre id="code-1">{'      node.above.prev = node;'}</pre>
            <pre id="code-1">{'      priorityQueue.offer(node.above'}</pre>
            <pre id="code-1">{'      node.right.heuristic = calcHeuristic(node.right, endNodes);'}</pre>
            <pre id="code-1">{'      node.right.prev = node;'}</pre>
            <pre id="code-1">{'      priorityQueue.offer(node.right'}</pre>
            <pre id="code-1">{'      node.below.heuristic = calcHeuristic(node.below, endNodes);'}</pre>
            <pre id="code-1">{'      node.below.prev = node;'}</pre>
            <pre id="code-1">{'      priorityQueue.offer(node.below'}</pre>
            <pre id="code-1">{'      node.left.heuristic = calcHeuristic(node.left, endNodes);'}</pre>
            <pre id="code-1">{'      node.left.prev = node;'}</pre>
            <pre id="code-1">{'      priorityQueue.offer(node.left'}</pre>
            <pre id="code-1">{'   }'}</pre>
            <pre id="code-1">{'}'}</pre>
            <pre id="code-12">{''}</pre>
            <pre id="code-12">{'function calcHeuristic(node, endNodes[]){'}</pre>
            <pre id="code-12">{'   let minHeuristic;'}</pre>
            <pre id="code-12">{'   endNodes.forEach(endNode => {'}</pre>
            <pre id="code-12">{'      let distance = Math.abs(node.x - endNode.x) + Math.abs(node.y - endNode.y);'}</pre>
            <pre id="code-12">{'      minHeuristic = Math.min(minHeuristic, distance);'}</pre>
            <pre id="code-12">{'   }'}</pre>
            <pre id="code-12">{'   return minHeuristic;'}</pre>
            <pre id="code-12">{'}'}</pre>

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
