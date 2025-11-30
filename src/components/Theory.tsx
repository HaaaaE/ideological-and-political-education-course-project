import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiTarget, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import './Theory.css';

const theoryCards = [
  {
    icon: <FiBook />,
    title: '"生态惠民"价值导向',
    content: '习近平生态文明思想深刻揭示了生态环境与人民福祉的内在统一性。"发展经济是为了民生，保护生态环境同样也是为了民生"——这一重要论断打破了"环保与发展对立"的传统思维。',
    highlight: '良好生态环境是最普惠的民生福祉',
  },
  {
    icon: <FiTarget />,
    title: '公园城市理念',
    content: '2018年，习近平总书记在成都考察时首次提出"公园城市"理念，强调"要突出公园城市特点，把生态价值考虑进去"，实现"城在园中、园在城中"的空间重构。',
    highlight: '人城境业和谐统一',
  },
  {
    icon: <FiMapPin />,
    title: '成都实践创新',
    content: '成都建立全国首个市级公园城市建设管理局，颁布全国首部公园城市地方性法规，构建涵盖八大维度的公园城市建设指标体系。',
    highlight: '全国公园城市示范区',
  },
  {
    icon: <FiCheckCircle />,
    title: '建设成效',
    content: '截至2024年底，成都全市建成各类公园1414个、绿道5327公里，人均公园绿地面积达15.3平方米，城市绿化覆盖率超45%。',
    highlight: '推窗见绿、出门入园',
  },
];

const keyPoints = [
  { label: '人与自然', value: '和谐共生' },
  { label: '绿水青山', value: '就是金山银山' },
  { label: '生态环境', value: '最普惠民生' },
  { label: '山水林田湖草', value: '生命共同体' },
];

export default function Theory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="theory" className="theory-section" ref={ref}>
      <div className="container">
        {/* 章节标题 */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">第一章</span>
          <h2 className="section-title">理论基础</h2>
          <p className="section-desc">
            习近平生态文明思想引领下的"生态惠民"与公园城市实践
          </p>
        </motion.div>

        {/* 核心理念展示 */}
        <motion.div
          className="key-points-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="key-point-item"
              variants={itemVariants}
            >
              <span className="key-label">{point.label}</span>
              <span className="key-value">{point.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 理论卡片 */}
        <motion.div
          className="theory-cards"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {theoryCards.map((card, index) => (
            <motion.div
              key={index}
              className="theory-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(45, 90, 39, 0.15)' 
              }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
              <div className="card-highlight">
                <span className="highlight-decoration">✦</span>
                {card.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 引用块 */}
        <motion.blockquote
          className="theory-quote"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="quote-decoration">"</div>
          <p>
            生态兴则文明兴，生态衰则文明衰。把生态文明建设纳入"五位一体"总体布局，
            是中国共产党对人类文明发展规律的深刻总结和战略选择。
          </p>
          <div className="quote-source">
            <span>—— 《习近平生态文明文选》</span>
          </div>
        </motion.blockquote>
      </div>

      {/* 装饰背景 */}
      <div className="theory-bg-decoration">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
    </section>
  );
}
