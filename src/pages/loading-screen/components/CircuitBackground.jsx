import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit line properties
    const lines = [];
    const nodeCount = 50;
    const nodes = [];

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes?.push({
        x: Math.random() * canvas?.width,
        y: Math.random() * canvas?.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Initialize circuit lines
    for (let i = 0; i < 30; i++) {
      lines?.push({
        x1: Math.random() * canvas?.width,
        y1: Math.random() * canvas?.height,
        x2: Math.random() * canvas?.width,
        y2: Math.random() * canvas?.height,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
        width: Math.random() * 2 + 1
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx?.fillRect(0, 0, canvas?.width, canvas?.height);

      const time = Date.now() * 0.001;

      // Draw circuit lines
      lines?.forEach(line => {
        line.progress += line?.speed;
        if (line?.progress > 1) {
          line.progress = 0;
          line.x1 = Math.random() * canvas?.width;
          line.y1 = Math.random() * canvas?.height;
          line.x2 = Math.random() * canvas?.width;
          line.y2 = Math.random() * canvas?.height;
        }

        const currentX = line?.x1 + (line?.x2 - line?.x1) * line?.progress;
        const currentY = line?.y1 + (line?.y2 - line?.y1) * line?.progress;

        // Glowing effect
        ctx.shadowColor = '#00f5ff';
        ctx.shadowBlur = 20;
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.8 - line?.progress * 0.6})`;
        ctx.lineWidth = line?.width;
        ctx.lineCap = 'round';

        ctx?.beginPath();
        ctx?.moveTo(line?.x1, line?.y1);
        ctx?.lineTo(currentX, currentY);
        ctx?.stroke();

        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes?.forEach(node => {
        node.x += node?.vx;
        node.y += node?.vy;
        node.pulse += 0.05;

        // Bounce off edges
        if (node?.x < 0 || node?.x > canvas?.width) node.vx *= -1;
        if (node?.y < 0 || node?.y > canvas?.height) node.vy *= -1;

        const pulseSize = node?.size + Math.sin(node?.pulse) * 2;
        const alpha = 0.5 + Math.sin(node?.pulse) * 0.3;

        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx?.beginPath();
        ctx?.arc(node?.x, node?.y, pulseSize, 0, Math.PI * 2);
        ctx?.fill();

        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default CircuitBackground;