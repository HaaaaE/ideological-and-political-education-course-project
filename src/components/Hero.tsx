import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="hero">
      {/* 背景层 */}
      <motion.div className="hero-bg" style={{ y }}>
        <div className="hero-overlay"></div>
        <div className="floating-leaves">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="leaf"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: 0,
                opacity: 0.6
              }}
              animate={{
                y: window.innerHeight + 100,
                rotate: 360,
                x: `+=${Math.random() * 200 - 100}`,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: 'linear'
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 内容层 */}
      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-icon">🌿</span>
          <span>习近平新时代中国特色社会主义思想概论 · 实践作业</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="title-line">习近平生态文明思想的</span>
          <span className="title-highlight">成都实践样本</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          公园城市建设中的 "生态 + 民生" 共生之道
        </motion.p>

        <motion.div
          className="hero-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <blockquote>
            "绿水青山就是金山银山"
          </blockquote>
          <cite>—— 习近平</cite>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            to="theory"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-primary"
          >
            开始探索
          </Link>
          <Link
            to="research"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn btn-outline"
          >
            查看调研
          </Link>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-value">32.32</span>
            <span className="stat-unit">公顷</span>
            <span className="stat-label">公园面积</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">1.2</span>
            <span className="stat-unit">亿元</span>
            <span className="stat-label">建设投资</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-unit">星级</span>
            <span className="stat-label">公园等级</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 向下滚动提示 */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Link to="theory" smooth={true} offset={-80} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiChevronDown />
          </motion.div>
          <span>向下滚动</span>
        </Link>
      </motion.div>
    </section>
  );
}
