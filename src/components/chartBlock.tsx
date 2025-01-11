interface ChartProps{
    arr : number[];
    setArr : React.Dispatch<React.SetStateAction<number[]>>
}
export default function ChartBlock({arr, setArr} : ChartProps){
    const isArrayValid = arr.length > 0;
    return(
        <>
        <div className="chart-container">
            <div className="chart-wrapper" 
                style={{gap: isArrayValid ? `calc(20%/(${arr.length}))` : "0"}}
            >
                {arr.map((element : number, index : number)=>{
                    return(
                        <div className="chart-element"
                        key={`${element}-${index}`}
                        style={{
                            height: `calc((100% / ${arr.length})*${element})`,
                            width: `calc((100% / ${arr.length}))`,
                        }}
                        ></div>
                    )
                })}
            </div>
        </div>

        </>
    )
}