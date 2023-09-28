const SuspenseFallback = () => {
  const styles = `
  .overlay {
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(74, 74, 74, 0.8);
    z-index: 99999;
    justify-content: center;
    align-items: center;
  }
  .overlay svg{
    height: 150px;
    width: 150px;
  }
  .overlay svg .seven:nth-child(1){
    stroke: maroon;
    stroke-width: 3px;
    fill: transparent;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: animate .7s linear infinite;
  }
  .overlay svg .seven:nth-child(2){
    stroke: white;
    stroke-width: 3px;
    fill: transparent;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: animate .7s linear infinite;
  }
  @keyframes animate {
    to{
      stroke-dashoffset: 0;
    }
  }
`;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div className="overlay">
        <style>{styles}</style>
        <svg>
          <polyline className="seven" points="70,20 20,20 70,106" />
          <polyline className="seven" points="70,126 120,40 70,40" />
        </svg>
      </div>
    </div>
  );
};

export default SuspenseFallback;
