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
            <pre id="code-0">{'function insertionSort(ints) {'}</pre>
            <pre id="code-1">{'   for (let i = 1; i < ints.length; i++) {'}</pre>
            <pre id="code-2">{'      let current = ints[i];'}</pre>
            <pre id="code-3">{'      let j = i-1;'}</pre>
            <pre id="code-4">{'         while ((j > -1) && (current < ints[j])) {'}</pre>
            <pre id="code-5">{'            ints[j+1] = ints[j];'}</pre>
            <pre id="code-6">{'            j--;'}</pre>
            <pre id="code-7">{'         }'}</pre>
            <pre id="code-8">{'         ints[j + 1] = current;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-10">{'   }'}</pre>
            <pre id="code-11">{'   return ints'}</pre>
            <pre id="code-12">{'}'}</pre>
        </div>
    );

    const RandomSort = (
        <div className="code-content">
            <pre id="code-0">{'function randomSort(ints) {'}</pre>
            <pre id="code-1">{'   while(!isSorted(ints)) {'}</pre>
            <pre id="code-2">{'      ints = shuffle(ints);'}</pre>
            <pre id="code-3">{'   }'}</pre>
            <pre id="code-4">{'   return ints;'}</pre>
            <pre id="code-5">{'}'}</pre>
            <pre id="code-6">{''}</pre>
            <pre id="code-7">{'function isSorted(ints) {'}</pre>
            <pre id="code-8">{'   let currentMax;'}</pre>
            <pre id="code-8">{'   ints.forEach(int => {'}</pre>
            <pre id="code-9">{'      if (int < currentMax) {'}</pre>
            <pre id="code-9">{'         return false;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-9">{'      currentMax = int;'}</pre>
            <pre id="code-10">{'   }'}</pre>
            <pre id="code-11">{'   return true;'}</pre>
            <pre id="code-12">{'}'}</pre>
            <pre id="code-6">{''}</pre>
            <pre id="code-7">{'function shuffle(ints) {'}</pre>
            <pre id="code-7">{'   let currentIndex = ints.length;'}</pre>
            <pre id="code-7">{'   let randomIndex;'}</pre>
            <pre id="code-7">{'   while (currentIndex != 0) {'}</pre>
            <pre id="code-7">{'      randomIndex = Math.floor(Math.random() * currentIndex);'}</pre>
            <pre id="code-7">{'      currentIndex--;'}</pre>
            <pre id="code-7">{'      [ints[currentIndex], ints[randomIndex]] = [array[randomIndex], array[currentIndex]];'}</pre>
            <pre id="code-10">{'   }'}</pre>
            <pre id="code-11">{'   return ints;'}</pre>
            <pre id="code-12">{'}'}</pre>
        </div>
    );

    const QuickSortFirstPivot = (
        <div className="code-content">
            <pre id="code-0">{'function quickSort(ints) {'}</pre>
            <pre id="code-1">{'   let smaller = []; larger = [];'}</pre>
            <pre id="code-2">{'   if (ints.length <= 1) {'}</pre>
            <pre id="code-3">{'      return ints;'}</pre>
            <pre id="code-4">{'   }'}</pre>
            <pre id="code-5">{'   let pivot = 0;'}</pre>
            <pre id="code-6">{'   for (let i = 0; i < ints.length; i++) {'}</pre>
            <pre id="code-7">{'      if (i == pivot) {'}</pre>
            <pre id="code-8">{'         break;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-10">{'      if (ints[i] < ints[pivot]) {'}</pre>
            <pre id="code-11">{'         smaller.push(ints[i]);'}</pre>
            <pre id="code-12">{'      }'}</pre>
            <pre id="code-13">{'      if (ints[i] >= ints[pivot]) {'}</pre>
            <pre id="code-14">{'         larger.push(ints[i]);'}</pre>
            <pre id="code-15">{'      }'}</pre>
            <pre id="code-16">{'  }'}</pre>
            <pre id="code-17">{'  return quickSort(smaller).concat(ints[pivot], quickSort(larger));'}</pre>
            <pre id="code-18">{'}'}</pre>
        </div>
    )

    const QuickSortMiddlePivot = (
        <div className="code-content">
            <pre id="code-0">{'function quickSort(ints) {'}</pre>
            <pre id="code-1">{'   let smaller = []; larger = [];'}</pre>
            <pre id="code-2">{'   if (ints.length <= 1) {'}</pre>
            <pre id="code-3">{'      return ints;'}</pre>
            <pre id="code-4">{'   }'}</pre>
            <pre id="code-5">{'   let pivot = Math.round(ints.length / 2);'}</pre>
            <pre id="code-6">{'   for (let i = 0; i < ints.length; i++) {'}</pre>
            <pre id="code-7">{'      if (i == pivot) {'}</pre>
            <pre id="code-8">{'         break;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-10">{'      if (ints[i] < ints[pivot]) {'}</pre>
            <pre id="code-11">{'         smaller.push(ints[i]);'}</pre>
            <pre id="code-12">{'      }'}</pre>
            <pre id="code-13">{'      if (ints[i] >= ints[pivot]) {'}</pre>
            <pre id="code-14">{'         larger.push(ints[i]);'}</pre>
            <pre id="code-15">{'      }'}</pre>
            <pre id="code-16">{'  }'}</pre>
            <pre id="code-17">{'  return quickSort(smaller).concat(ints[pivot], quickSort(larger));'}</pre>
            <pre id="code-18">{'}'}</pre>
        </div>
    )

    const QuickSortLastPivot = (
        <div className="code-content">
            <pre id="code-0">{'function quickSort(ints) {'}</pre>
            <pre id="code-1">{'   let smaller = []; larger = [];'}</pre>
            <pre id="code-2">{'   if (ints.length <= 1) {'}</pre>
            <pre id="code-3">{'      return ints;'}</pre>
            <pre id="code-4">{'   }'}</pre>
            <pre id="code-5">{'   let pivot = ints.length - 1;'}</pre>
            <pre id="code-6">{'   for (let i = 0; i < ints.length; i++) {'}</pre>
            <pre id="code-7">{'      if (i == pivot) {'}</pre>
            <pre id="code-8">{'         break;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-10">{'      if (ints[i] < ints[pivot]) {'}</pre>
            <pre id="code-11">{'         smaller.push(ints[i]);'}</pre>
            <pre id="code-12">{'      }'}</pre>
            <pre id="code-13">{'      if (ints[i] >= ints[pivot]) {'}</pre>
            <pre id="code-14">{'         larger.push(ints[i]);'}</pre>
            <pre id="code-15">{'      }'}</pre>
            <pre id="code-16">{'  }'}</pre>
            <pre id="code-17">{'  return quickSort(smaller).concat(ints[pivot], quickSort(larger));'}</pre>
            <pre id="code-18">{'}'}</pre>
        </div>
    )

    const QuickSortRandomPivot = (
        <div className="code-content">
            <pre id="code-0">{'function quickSort(ints) {'}</pre>
            <pre id="code-1">{'   let smaller = []; larger = [];'}</pre>
            <pre id="code-2">{'   if (ints.length <= 1) {'}</pre>
            <pre id="code-3">{'      return ints;'}</pre>
            <pre id="code-4">{'   }'}</pre>
            <pre id="code-5">{'   let pivot = Math.floor(Math.random() * ints.length);'}</pre>
            <pre id="code-6">{'   for (let i = 0; i < ints.length; i++) {'}</pre>
            <pre id="code-7">{'      if (i == pivot) {'}</pre>
            <pre id="code-8">{'         break;'}</pre>
            <pre id="code-9">{'      }'}</pre>
            <pre id="code-10">{'      if (ints[i] < ints[pivot]) {'}</pre>
            <pre id="code-11">{'         smaller.push(ints[i]);'}</pre>
            <pre id="code-12">{'      }'}</pre>
            <pre id="code-13">{'      if (ints[i] >= ints[pivot]) {'}</pre>
            <pre id="code-14">{'         larger.push(ints[i]);'}</pre>
            <pre id="code-15">{'      }'}</pre>
            <pre id="code-16">{'  }'}</pre>
            <pre id="code-17">{'  return quickSort(smaller).concat(ints[pivot], quickSort(larger));'}</pre>
            <pre id="code-18">{'}'}</pre>
        </div>
    )

    const AStarManhattan = (
        <div className="code-content">
            <pre id="code-0">{'//priorityQueue is a queue sorted by the heuristic of each node'}</pre>
            <pre id="code-1">{'function AStarManhattan(startNode, endNodes){'}</pre>
            <pre id="code-2">{'   startNode.heuristic = calcHeuristic(node, endNodes);'}</pre>
            <pre id="code-3">{'   startNode.prev = NULL'}</pre>
            <pre id="code-4">{'   priorityQueue.offer(startNode)'}</pre>
            <pre id="code-5">{'   hasSwapped = false'}</pre>
            <pre id="code-6">{'   while(!priorityQueue.isEmpty()){'}</pre>
            <pre id="code-7">{'      let node = priorityQueue.poll();'}</pre>
            <pre id="code-8">{'      if (node.isEnd) {'}</pre>
            <pre id="code-9">{'         let path = [];'}</pre>
            <pre id="code-10">{'         while (node){'}</pre>
            <pre id="code-11">{'            path.insert(node);'}</pre>
            <pre id="code-12">{'            node = node.prev;'}</pre>
            <pre id="code-13">{'         }'}</pre>
            <pre id="code-14">{'      }'}</pre>
            <pre id="code-15">{'      node.above.heuristic = calcHeuristic(node.above, endNodes);'}</pre>
            <pre id="code-16">{'      node.above.prev = node;'}</pre>
            <pre id="code-17">{'      priorityQueue.offer(node.above'}</pre>
            <pre id="code-18">{'      node.right.heuristic = calcHeuristic(node.right, endNodes);'}</pre>
            <pre id="code-19">{'      node.right.prev = node;'}</pre>
            <pre id="code-20">{'      priorityQueue.offer(node.right'}</pre>
            <pre id="code-21">{'      node.below.heuristic = calcHeuristic(node.below, endNodes);'}</pre>
            <pre id="code-22">{'      node.below.prev = node;'}</pre>
            <pre id="code-23">{'      priorityQueue.offer(node.below'}</pre>
            <pre id="code-24">{'      node.left.heuristic = calcHeuristic(node.left, endNodes);'}</pre>
            <pre id="code-25">{'      node.left.prev = node;'}</pre>
            <pre id="code-26">{'      priorityQueue.offer(node.left'}</pre>
            <pre id="code-27">{'   }'}</pre>
            <pre id="code-28">{'}'}</pre>
            <pre id="code-29">{''}</pre>
            <pre id="code-30">{'function calcHeuristic(node, endNodes[]){'}</pre>
            <pre id="code-31">{'   let minHeuristic;'}</pre>
            <pre id="code-32">{'   endNodes.forEach(endNode => {'}</pre>
            <pre id="code-33">{'      let distance = Math.abs(node.x - endNode.x) + Math.abs(node.y - endNode.y);'}</pre>
            <pre id="code-34">{'      minHeuristic = Math.min(minHeuristic, distance);'}</pre>
            <pre id="code-35">{'   }'}</pre>
            <pre id="code-36">{'   return minHeuristic;'}</pre>
            <pre id="code-37">{'}'}</pre>
        </div>
    );

    const AStarEuclidean = (
        <div className="code-content">
            <pre id="code-0">{'//priorityQueue is a queue sorted by the heuristic of each node'}</pre>
            <pre id="code-1">{'function AStarManhattan(startNode, endNodes){'}</pre>
            <pre id="code-2">{'   startNode.heuristic = calcHeuristic(node, endNodes);'}</pre>
            <pre id="code-3">{'   startNode.prev = NULL'}</pre>
            <pre id="code-4">{'   priorityQueue.offer(startNode)'}</pre>
            <pre id="code-5">{'   hasSwapped = false'}</pre>
            <pre id="code-6">{'   while(!priorityQueue.isEmpty()){'}</pre>
            <pre id="code-7">{'      let node = priorityQueue.poll();'}</pre>
            <pre id="code-8">{'      if (node.isEnd) {'}</pre>
            <pre id="code-9">{'         let path = [];'}</pre>
            <pre id="code-10">{'         while (node){'}</pre>
            <pre id="code-11">{'            path.insert(node);'}</pre>
            <pre id="code-12">{'            node = node.prev;'}</pre>
            <pre id="code-13">{'         }'}</pre>
            <pre id="code-14">{'      }'}</pre>
            <pre id="code-15">{'      node.above.heuristic = calcHeuristic(node.above, endNodes);'}</pre>
            <pre id="code-16">{'      node.above.prev = node;'}</pre>
            <pre id="code-17">{'      priorityQueue.offer(node.above'}</pre>
            <pre id="code-18">{'      node.right.heuristic = calcHeuristic(node.right, endNodes);'}</pre>
            <pre id="code-19">{'      node.right.prev = node;'}</pre>
            <pre id="code-20">{'      priorityQueue.offer(node.right'}</pre>
            <pre id="code-21">{'      node.below.heuristic = calcHeuristic(node.below, endNodes);'}</pre>
            <pre id="code-22">{'      node.below.prev = node;'}</pre>
            <pre id="code-23">{'      priorityQueue.offer(node.below'}</pre>
            <pre id="code-24">{'      node.left.heuristic = calcHeuristic(node.left, endNodes);'}</pre>
            <pre id="code-25">{'      node.left.prev = node;'}</pre>
            <pre id="code-26">{'      priorityQueue.offer(node.left'}</pre>
            <pre id="code-27">{'   }'}</pre>
            <pre id="code-28">{'}'}</pre>
            <pre id="code-29">{''}</pre>
            <pre id="code-30">{'function calcHeuristic(node, endNodes[]){'}</pre>
            <pre id="code-31">{'   let minHeuristic;'}</pre>
            <pre id="code-32">{'   endNodes.forEach(endNode => {'}</pre>
            <pre id="code-33">{'      let x = Math.pow(Math.abs(node.x - endNode.x), 2);'}</pre>
            <pre id="code-34">{'      let y = Math.pow(Math.abs(node.y - endNode.y), 2);'}</pre>
            <pre id="code-35">{'      let distance = Math.pow(x + y, 0.5);'}</pre>
            <pre id="code-36">{'      minHeuristic = Math.min(minHeuristic, distance);'}</pre>
            <pre id="code-37">{'   }'}</pre>
            <pre id="code-38">{'   return minHeuristic;'}</pre>
            <pre id="code-39">{'}'}</pre>
        </div>
    );

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
