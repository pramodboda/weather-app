import React, { useEffect, useRef } from "react";

function UVIndexCanvas() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    const startAngle = Math.PI; // 180 degrees
    const endAngle = 2 * Math.PI; // 360 degrees

    // Draw the semi-circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.strokeStyle = "#f9f9f9";

    // Draw the numbers
    const step = (endAngle - startAngle) / 9; // Adjust step to 9 intervals for 10 numbers
    for (let i = 0; i <= 9; i++) {
      const angle = startAngle + i * step;
      const x = centerX + (radius + 20) * Math.cos(angle); // Adjust radius for better positioning
      const y = centerY + (radius + 20) * Math.sin(angle); // Adjust radius for better positioning
      ctx.fillText(i + 1, x - 5, y + 5); // Adjust text position for better alignment
      ctx.fillStyle = "#f9f9f9";
    }

    // Draw the sharp, narrow needle pointing to number 6
    const needleAngle = startAngle + 6.8 * step; // Adjust for zero-based index
    const needleX = centerX + radius * Math.cos(needleAngle);
    const needleY = centerY + radius * Math.sin(needleAngle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(needleX, needleY);
    ctx.lineWidth = 2; // Make the needle sharp and narrow
    ctx.strokeStyle = "#f9f9f9"; // Optional: Change the color of the needle
    ctx.stroke();
  });
  return <canvas ref={ref} id="myCanvas" width="280" height="150"></canvas>;
}

export default UVIndexCanvas;
