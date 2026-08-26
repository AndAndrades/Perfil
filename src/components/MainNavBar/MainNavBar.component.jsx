import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import './MainNavBar.css';
import GlassSurface from '../GlassSurface/GlassSurface.component';

function DockItem({
  children,
  className = '',
  onClick,
  href,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={handleClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {Children.map(children, child =>
        child ? cloneElement(child, { isHovered }) : null
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 12 }} // Se desplaza HACIA ABAJO
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15 }}
          className={`dock-label ${className}`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function MainNavBar({
  items = [],
  className = '',
  spring = { mass: 0.1, stiffness: 170, damping: 12 },
  magnification = 60,
  distance = 140,
  panelHeight = 64,
  baseItemSize = 44
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={`dock-outer ${className}`}>
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        role="toolbar"
        aria-label="Navigation header"
      >
        <GlassSurface
          width="auto"
          height={panelHeight + 40}
          borderRadius={99}
          borderWidth={0.5}
          brightness={100}
          opacity={0.85}
          blur={12}
          displace={2}
          distortionScale={120}
          className="dock-panel-glass"
        >
          {items.map((item, index) => (
            <DockItem
              key={item.label || index}
              onClick={item.onClick}
              href={item.href}
              className={item.className}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
              label={item.label}
            >
              <DockIcon>{item.icon || item.label?.[0]}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          ))}
        </GlassSurface>
      </motion.nav>
    </div>
  );
}