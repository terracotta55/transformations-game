import React from 'react';

const TriangleShape = (props) => {
  const cax = (10 + props.a.x) * 50
  const cay = (10 - props.a.y) * 50
  const cbx = (10 + props.b.x) * 50
  const cby = (10 - props.b.y) * 50
  const ccx = (10 + props.c.x) * 50
  const ccy = (10 - props.c.y) * 50


  return (
    <>
      {!props.animate ? (
        <polygon className={props.triangleClassName}
          points={`${cax} ${cay}, ${cbx} ${cby}, ${ccx} ${ccy}`}
        >
        </polygon>
      ) : null}

      {/* point labels */}
      {/* <text fontWeight="bold" x={cax} y={cay - (Math.sign(props.a.y) * 10)}>{`(${props.a.x}, ${props.a.y})`}</text> */}
      {/* <text font-weight="bold" x={cbx} y={cby - (Math.sign(props.b.y) * 10)}>{`(${props.b.x}, ${props.b.y})`}</text>
        <text font-weight="bold" x={ccx} y={ccy - (Math.sign(props.c.y) * 10)}>{`(${props.c.x}, ${props.c.y})`}</text> */}
    </>
  );
}

export default TriangleShape;