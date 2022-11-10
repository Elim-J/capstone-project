import React from "react";

const CodeContent = ({alg}) => {

    switch(alg){
        case 'BubbleSort': // TODO have enum for all support algs
            return (
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
                    
                </div>);
        default:
            return null;
    }

}
export default CodeContent;
