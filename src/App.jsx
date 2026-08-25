import ParticleText from './components/ParticleText/ParticleText.component'
import Boton from './components/boton/Boton.component';
import LiquidEther from './components/LiquidEther/LiquidEther.component';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, }}>
        <LiquidEther
          speed={0.6}
          scale={1.5}
          brightness={1}
          colors={['#5227FF', '#FF9FFC', '#B497CF']}
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
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
