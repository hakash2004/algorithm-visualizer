
import ArrayBlock from "@/components/array";
import LogBlock from "@/components/log";
import ChartBlock from "@/components/chart";

interface SortingLayoutProps{
    arr : number[];
    setArr : React.Dispatch<React.SetStateAction<number[]>>
    size : number;
    log : string;
    
}

export default function SortingLayout (){
    return(
        <>
            <ChartBlock arr={arr} setArr={setArr} />
            <ArrayBlock size={size} arr={arr} setArr={setArr} />
            <LogBlock log={log} setLog={setLog} />
        </>
    )
}