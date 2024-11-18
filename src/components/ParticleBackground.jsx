import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const hasInitialized = useRef(false); 

  useEffect(() => {
    if (hasInitialized.current) return; 

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      hasInitialized.current = true;
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: "#089bf7", animation: { h: { enable: true, speed: 50 } } },
        links: { enable: true, distance: 100, color: "random", opacity: 1, width: 1 },
        move: { enable: true, speed: 2 },
        number: { density: { enable: true, area: 1920 }, value: 100 },
        opacity: { value: { min: 0.3, max: 0.8 }, animation: { enable: true, speed: 0.5 } },
        size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 3 } },
        stroke: { width: 3 }
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="particle-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default ParticleBackground;
