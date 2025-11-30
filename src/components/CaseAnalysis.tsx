import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheckCircle, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { IconMountain, IconFamily, IconMoney, IconHandshake, IconBook, IconRobot, IconTools, IconTree, IconGlobe } from './Icons';
import './CaseAnalysis.css';

const successMechanisms = [
  {
    title: '山水人城和谐融合',
    desc: '借助浣花溪天然水系和沿岸林地，将自然山水景观融入城市肌理，实现"城在园中，园在城中"。',
    icon: <IconMountain size={24} />,
  },
  {
    title: '以人为本宜居导向',
    desc: '无障碍步道、亲水平台、休憩长椅等细节让不同人群都能便利使用，满足精神生活需要。',
    icon: <IconFamily size={24} />,
  },
  {
    title: '生态价值创造转化',
    desc: '公园带来经济和社会效益，周边房产增值、商业配套升级，文创产业蓬勃发展。',
    icon: <IconMoney size={24} />,
  },
  {
    title: '公众参与共建共享',
    desc: '通过志愿者服务、社区共治等方式吸纳公众参与管理，建立"浣花溪守护者"志愿服务队。',
    icon: <IconHandshake size={24} />,
  },
];

const experiences = [
  {
    title: '高位统筹规划',
    content: '政府高层面的重视和系统规划，将浣花溪等绿地纳入城市生态安全格局，确保生态空间连通性。',
  },
  {
    title: '精准对接需求',
    content: '充分考虑市民多样化需求，既提供绿色美景，又完善健身、休闲、文化等功能。',
  },
  {
    title: '文化赋能生态',
    content: '将历史文化融入生态空间，使公园既有自然之美又有人文之韵，提升文化认同。',
  },
  {
    title: '建立长效机制',
    content: '建立公园共建共管机制，形成政府主导、公众参与的良好治理模式。',
  },
];

const problems = [
  {
    title: '高峰期管理压力',
    desc: '节假日和周末人流密集，停车难、如厕排队等现象突出，服务承载能力接近饱和。',
  },
  {
    title: '公共配套细节',
    desc: '直饮水点数量偏少，部分健身器材老化，儿童游乐设施缺乏，夜间照明存在盲区。',
  },
  {
    title: '宣传教育不足',
    desc: '公众对"公园城市"理念和生态文明知识知之甚少，科普宣传功能不够强。',
  },
  {
    title: '生态保护矛盾',
    desc: '如何在保证游客亲近自然的同时不干扰动物，需要更精细的边界管控。',
  },
];

const suggestions = [
  { icon: <IconRobot size={24} />, title: '智慧客流管理', desc: '引入线上预约、限流措施平衡客流' },
  { icon: <IconTools size={24} />, title: '完善配套设施', desc: '增加直饮水点、更新健身器材' },
  { icon: <IconBook size={24} />, title: '加强生态宣传', desc: '增设科普长廊，开发智能导览APP' },
  { icon: <IconTree size={24} />, title: '生态管控监测', desc: '划定保育核心区，完善环境监测' },
  { icon: <IconGlobe size={24} />, title: '数字化展示', desc: '建设网上生态展厅，扩大理念传播' },
];

export default function CaseAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case" className="case-section" ref={ref}>
      <div className="container">
        {/* 章节标题 */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">第四章</span>
          <h2 className="section-title">案例剖析</h2>
          <p className="section-desc">
            "生态+民生"良性循环的实现机制与经验启示
          </p>
        </motion.div>

        {/* 成功机制 */}
        <motion.div
          className="mechanisms-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="subsection-title">
            <FiCheckCircle />
            成功机制
          </h3>
          <div className="mechanisms-grid">
            {successMechanisms.map((item, index) => (
              <motion.div
                key={index}
                className="mechanism-card"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 8, boxShadow: '0 12px 32px rgba(45, 90, 39, 0.12)' }}
              >
                <span className="mechanism-icon">{item.icon}</span>
                <div className="mechanism-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 经验启示 */}
        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="subsection-title">
            <span className="title-icon"><IconBook size={24} /></span>
            经验启示
          </h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div className="timeline-marker">
                  <span>{index + 1}</span>
                </div>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <p>{exp.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 问题与不足 */}
        <motion.div
          className="problems-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="subsection-title problems-title">
            <FiAlertCircle />
            问题与不足
          </h3>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="problem-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <h4>{problem.title}</h4>
                <p>{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 改进建议 */}
        <motion.div
          className="suggestions-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="subsection-title">
            <FiArrowRight />
            改进建议
          </h3>
          <div className="suggestions-flow">
            {suggestions.map((item, index) => (
              <motion.div
                key={index}
                className="suggestion-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="suggestion-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 核心结论 */}
        <motion.div
          className="case-conclusion"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="conclusion-badge">核心结论</div>
          <blockquote>
            浣花溪公园的发展经验印证了"<strong>生态惠民—民生促生态</strong>"的循环：
            投入生态建设带来民生收益，民众满意度提升促成更大的支持和参与，
            从而形成生态文明建设的社会共识。
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
