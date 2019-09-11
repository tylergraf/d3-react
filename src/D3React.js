import React, { useState, useEffect } from "react";
import "./D3.css";
import { interval } from "d3-timer";
import { shuffle } from "d3-array";
import { Transition, SwitchTransition } from "react-transition-group";
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default function D3React() {
  const [data, setData] = useState(alphabet);
  const [height] = useState(500);
  const [width] = useState(960);

  useEffect(() => {
    interval(() => {
      setData(
        shuffle(alphabet)
          .slice(0, Math.floor(Math.random() * 26))
          .sort()
      );
    }, 1500);
  }, []);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(32,${height / 2})`}>
        {data.map((datum, i) => (
          <SwitchTransition>
            <Transition key={datum} timeout={1500}>
              {state => (
                <text className={state} dy=".35em" y={0} x={i * 32}>
                  {datum}
                </text>
              )}
            </Transition>
          </SwitchTransition>
        ))}
      </g>
    </svg>
  );
}
