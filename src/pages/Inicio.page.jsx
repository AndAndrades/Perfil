import LiquidEther from "../components/LiquidEther/LiquidEther.component";
import ParticleText from "../components/ParticleText/ParticleText.component";

const Inicio = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, }}>
                <LiquidEther
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    dt={0.014}
                    resolution={.7}
                    isBounce={true}
                    colors={['#2906b8', '#ea00ff', '#00d9ff']}
                    className=''
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={1000}
                    autoRampDuration={0.6}
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

export default Inicio;
