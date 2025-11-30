import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { IconArrowRight } from './Icons';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="hero" className="hero">
      {/* Background Layer */}
      <motion.div className="hero-bg" style={{ y }}>
        <div className="hero-overlay"></div>
        <div className="organic-shape shape-1"></div>
        <div className="organic-shape shape-2"></div>
      </motion.div>

      <div className="container hero-container">
        {/* Left Content */}
        <motion.div className="hero-content-left">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="badge-dot"></span>
            <span>生态文明 · 成都实践</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="title-line">公园城市</span>
            <span className="title-highlight">生态与民生的</span>
            <span className="title-line indent">和谐共生</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            探索习近平生态文明思想在成都的生动实践，见证从"城市公园"到"公园城市"的伟大跨越。
          </motion.p>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="visual-card main-card">
            <div className="card-content">
              <span className="card-label">公园绿地面积</span>
              <span className="card-value">32.32</span>
              <span className="card-unit">公顷</span>
            </div>
            <div className="card-decoration"></div>
          </div>

          <div className="visual-card sub-card card-1">
            <span className="card-label">建设投资</span>
            <span className="card-value-sm">1.2亿</span>
          </div>

          <div className="visual-card sub-card card-2">
            <span className="card-label">生态等级</span>
            <span className="card-value-sm">5A</span>
          </div>

          <div className="visual-circle"></div>
        </motion.div>

        {/* Action Button - now outside hero-content-left for better mobile layout control */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            to="theory"
            smooth={true}
            offset={-80}
            duration={800}
            className="btn btn-primary"
          >
            <span>开始探索</span>
            <span className="btn-icon"><IconArrowRight size={20} /></span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}
