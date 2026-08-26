import { ContactsFilled, GithubFilled, HomeFilled, LinkedinFilled } from "@ant-design/icons";
import MainNavBar from "../components/MainNavBar/MainNavBar.component";
import ParticleText from "../components/ParticleText/ParticleText.component";
import AcidSquares from "../components/Wallpapers/acidSquare/AcidSquares.component";

const Inicio = () => {
    const IrLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/andandrades/";
    };
    const irGithub = () => {
        window.location.href = "https://github.com/AndAndrades";
    };

    const items = [
        { icon: <HomeFilled size={18} />, label: "Home", onClick: () => alert("Home!") },
        { icon: <GithubFilled size={18} />, label: "Github", onClick: () => irGithub() },
        { icon: <LinkedinFilled size={18} />, label: "Linkedin", onClick: () => IrLinkedin() },
        { icon: <ContactsFilled size={18} />, label: "Contactame", onClick: () => alert("Contactame!") },
    ];

    return (
        <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
            <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
                <AcidSquares
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    dt={0.014}
                    resolution={0.7}
                    isBounce={true}
                    colors={["#2906b8", "#ea00ff", "#00d9ff"]}
                    className=""
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={1000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* Contenedor Principal */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    minHeight: "100vh",
                }}
            >
                {/* Navbar Centrada en la parte superior */}
                <header
                    style={{
                        position: "fixed",
                        top: "1.5rem",
                        left: 0,
                        right: 0,
                        zIndex: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 1rem",
                        pointerEvents: "none",
                    }}
                >
                    <div style={{ pointerEvents: "auto" }}>
                        <MainNavBar
                            items={items}
                            panelHeight={30}
                            baseItemSize={50}
                            magnification={70}
                        />
                    </div>
                </header>

                {/* Hero Section */}
                <section
                    id="inicio"
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 1rem",
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

                {/* Sección Sobre mí */}
                <section
                    id="sobre-mi"
                    style={{
                        width: "100%",
                        maxW: "1200px",
                        margin: "0 auto",
                        padding: "4rem 1.5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem", color: "#fff" }}>
                        Sobre mí
                    </h2>
                    <p style={{ color: "#e2e8f0", lineHeight: "1.6" }}>
                        Desarrollador Fullstack apasionado por crear experiencias digitales fluidas, atractivas e interactivas.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Inicio;