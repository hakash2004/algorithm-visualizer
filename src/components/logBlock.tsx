import { useEffect, useRef } from "react";
interface LogProps {
  log: string[];
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function LogBlock({ log, setLog }: LogProps) {
    const logWrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (logWrapperRef.current) {
          logWrapperRef.current.scrollTop = logWrapperRef.current.scrollHeight;
        }
      }, [log]);
  return (
    <>
      <div className="log-container">
        <div className="log-wrapper" ref={logWrapperRef}>
          {log.map((element: string, index : number) => {
            return <div className="log-element" key={`${element}-${index}`} >{element}</div>;
          })}
        </div>
      </div>
    </>
  );
}
