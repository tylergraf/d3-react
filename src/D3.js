import React, { useRef, useEffect } from "react";
import "./D3.css";
import { select } from "d3-selection";
import { interval } from "d3-timer";
import { shuffle } from "d3-array";

export default function D3() {
  const containerEl = useRef(null);

  useEffect(() => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var svg = select(containerEl.current),
      height = +svg.attr("height"),
      g = svg.append("g").attr("transform", "translate(32," + height / 2 + ")");

    function update(data) {
      // DATA JOIN
      // Join new data with old elements, if any.
      var text = g.selectAll("text").data(data);

      // UPDATE
      // Update old elements as needed.
      text.attr("class", "update");

      // ENTER
      // Create new elements as needed.
      //
      // ENTER + UPDATE
      // After merging the entered elements with the update selection,
      // apply operations to both.
      text
        .enter()
        .append("text")
        .attr("class", "enter")
        .attr("x", function(d, i) {
          return i * 32;
        })
        .attr("dy", ".35em")
        .merge(text)
        .text(function(d) {
          return d;
        });

      // EXIT
      // Remove old elements as needed.
      text.exit().remove();
    }

    // The initial display.
    update(alphabet);

    // Grab a random sample of letters from the alphabet, in alphabetical order.
    interval(function() {
      update(
        shuffle(alphabet)
          .slice(0, Math.floor(Math.random() * 26))
          .sort()
      );
    }, 1500);
  }, [containerEl]);
  return <svg ref={containerEl} width="960" height="500" />;
}
