import { useState } from 'react';
import AcidSquares from './components/acidSquare/AcidSquares.component'
import Boton from './components/boton/boton.component';
import ParticleText from './components/ParticleText/ParticleText.component'
import SoftAurora from './components/SoftAurora/SoftAurora.component'

function App() {
  const [fondoSecundario, setFondoSecundario] = useState(false);
  const handlerWallpaperChange = () => {
    setFondoSecundario(!fondoSecundario);
  }
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, }}>
        {fondoSecundario ? (
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#f7f7f7"
            color2="#e100ff"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />) : (
          <AcidSquares
            color1="#5227FF"
            color2="#A855F7"
            color3="#FFFFFF"
            detail="medium"
            speed={0.7}
            waveDepth={1}
            zoom={1.3}
            density={10}
            glow={1}
            exposure={2700}
            spread={0.3}
            stepSize={0.002}
            colorShift={0}
            contrast={1}
            brightness={1}
            opacity={1}
            mouseInteraction
            mouseStrength={0.1}
            mouseRadius={0.35}
            blur={0}
            grain
            grainIntensity={0.05}
          />
        )}
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {/* Hero */}
        <section
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Boton onClick={() => handlerWallpaperChange()}>Cambiar fondo</Boton>
          <ParticleText
            text="Andrew Andrades"
            particleSize={2.2}
            density={4}
            color="#f8fafc"
            highlightColor="#430bc7"
            scatter={190}
            gatherDuration={1600}
            stagger={420}
            pointerRepel={42}
            repelRadius={120}
            idleDrift={0.8}
            trigger="mount"
            fontSize="clamp(3.5rem, 13vw, 9rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow
          />
        </section>

        {/* Resto de la página */}
        <section>
          <h2>Sobre mí</h2>
          <p>Contenido...</p>
        </section>
      </div>
    </div>
  )
}

export default App
