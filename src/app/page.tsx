import AlgorithmList from "@/components/algorithm-list";
import "./global.scss"

export default function Home() {
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-wrapper">
          <div className="header"></div>
          <div className="algorithm-list">
            <AlgorithmList />
          </div>
          <div className="algorithm-preview" ></div>
          <div className="visualization-container"></div>
          <div className="codeBlock"></div>
        </div>
      </div>
    </>
  );
}
