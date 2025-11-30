import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './DataAnalysis.css';

// 问卷调查数据
const surveyData = [
  {
    id: 'frequency',
    title: '公园使用频率',
    image: '/resource/收集表可视化/公园使用频率收集图.png',
    insight: '每月至少一次占比最高（47.4%），但高频日常化使用仍不足',
    percentage: 47.4,
  },
  {
    id: 'satisfaction',
    title: '生态环境满意度',
    image: '/resource/收集表可视化/生态环境满意度收集图.png',
    insight: '满意率高达92.1%，生态质量得到广泛认可',
    percentage: 92.1,
  },
  {
    id: 'impact',
    title: '环境对生活质量影响',
    image: '/resource/收集表可视化/环境影响收集图.png',
    insight: '92.1%受访者认为环境改善提升了生活质量',
    percentage: 92.1,
  },
  {
    id: 'activities',
    title: '活动内容',
    image: '/resource/收集表可视化/活动内容收集图.png',
    insight: '散步休憩（71.1%）与体育锻炼（55.3%）为主流选择',
    percentage: 71.1,
  },
  {
    id: 'duration',
    title: '停留时长',
    image: '/resource/收集表可视化/停留时长调查收集图.png',
    insight: '1-2小时占比最高（55.3%），空间体验感良好',
    percentage: 55.3,
  },
  {
    id: 'service',
    title: '公共服务设施满意度',
    image: '/resource/收集表可视化/公共服务设施调查收集图.png',
    insight: '满意率达89.5%，设施保障较为完善',
    percentage: 89.5,
  },
  {
    id: 'culture',
    title: '文化氛围体验',
    image: '/resource/收集表可视化/文化氛围体验调查收集图.png',
    insight: '78.9%认同文化特色，但感知深度不均衡',
    percentage: 78.9,
  },
  {
    id: 'awareness',
    title: '理念知晓情况',
    image: '/resource/收集表可视化/理念知晓情况收集图.png',
    insight: '仅15.8%了解并认同公园城市/生态文明理念',
    percentage: 15.8,
    isLow: true,
  },
  {
    id: 'improvement',
    title: '改进民意调查',
    image: '/resource/收集表可视化/改进民意调查情况收集图.png',
    insight: '环境卫生维护（44.7%）与配套设施完善（36.8%）需求突出',
    percentage: 44.7,
  },
  {
    id: 'happiness',
    title: '幸福感提升',
    image: '/resource/收集表可视化/幸福感提升情况收集图.png',
    insight: '86.8%认为公园对幸福感提升有作用',
    percentage: 86.8,
  },
];

// 关键数据总结
const keyFindings = [
  { label: '有效样本', value: '38份', icon: '📋' },
  { label: '生态满意度', value: '92.1%', icon: '🌿' },
  { label: '幸福感提升', value: '86.8%', icon: '😊' },
  { label: '理念知晓率', value: '15.8%', icon: '💡', isLow: true },
];

export default function DataAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedChart, setSelectedChart] = useState<number | null>(null);

  return (
    <section id="data" className="data-section" ref={ref}>
      <div className="container">
        {/* 章节标题 */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">第三章</span>
          <h2 className="section-title">数据分析</h2>
          <p className="section-desc">
            基于问卷调查的公众认知与满意度研究
          </p>
        </motion.div>

        {/* 关键发现 */}
        <motion.div
          className="key-findings"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {keyFindings.map((finding, index) => (
            <motion.div
              key={index}
              className={`finding-card ${finding.isLow ? 'finding-low' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <span className="finding-icon">{finding.icon}</span>
              <span className="finding-value">{finding.value}</span>
              <span className="finding-label">{finding.label}</span>
              {finding.isLow && <span className="finding-warning">需改进</span>}
            </motion.div>
          ))}
        </motion.div>

        {/* 图表网格 */}
        <motion.div
          className="charts-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {surveyData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`chart-card ${item.isLow ? 'chart-low' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(45, 90, 39, 0.15)' }}
              onClick={() => setSelectedChart(selectedChart === index ? null : index)}
            >
              <div className="chart-header">
                <h4 className="chart-title">{item.title}</h4>
                <div className={`chart-percentage ${item.isLow ? 'percentage-low' : ''}`}>
                  <span className="percentage-value">{item.percentage}</span>
                  <span className="percentage-symbol">%</span>
                </div>
              </div>
              <div className="chart-image-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="chart-insight">
                <span className="insight-icon">💡</span>
                <p>{item.insight}</p>
              </div>
              {/* 进度条 */}
              <div className="chart-progress">
                <motion.div
                  className={`progress-bar ${item.isLow ? 'progress-low' : ''}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 结论总结 */}
        <motion.div
          className="data-conclusion"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="conclusion-icon">📊</div>
          <h3>调研结论</h3>
          <p>
            问卷表明浣花溪公园在<strong>生态环境</strong>、<strong>服务体验</strong>与<strong>民生幸福感</strong>方面表现突出，
            但青年群体到访频率不高、生态文明与公园城市理念认知偏弱。
          </p>
          <div className="conclusion-highlight">
            因此，后续提升的关键不只是"把公园做得更好"，更在于<em>把公园讲得更清楚、传得更广、让更多人愿意来</em>。
          </div>
        </motion.div>
      </div>

      {/* 背景装饰 */}
      <div className="data-bg-pattern"></div>
    </section>
  );
}
