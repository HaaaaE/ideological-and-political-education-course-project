import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { IconAvatar, IconCrown, IconBook, IconCalendar, IconCheck, IconThought, IconLeaf } from './Icons';
import './Team.css';

const teamMembers = [
  {
    name: '侯 懿',
    studentId: '2023115323',
    role: '组长',
    avatar: <IconAvatar size={48} />,
  },
  {
    name: '高年平',
    studentId: '2023112569',
    role: '组员',
    avatar: <IconAvatar size={48} />,
  },
  {
    name: '张炜乐',
    studentId: '2023112590',
    role: '组员',
    avatar: <IconAvatar size={48} />,
  },
  {
    name: '颜 可',
    studentId: '2023115234',
    role: '组员',
    avatar: <IconAvatar size={48} />,
  },
];

const projectInfo = {
  course: '习近平新时代中国特色社会主义思想概论',
  teacher: '王斌',
  semester: '2025-2026学年第1学期',
};

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="team-section" ref={ref}>
      <div className="container">
        {/* 章节标题 */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">关于我们</span>
          <h2 className="section-title">团队介绍</h2>
          <p className="section-desc">
            美丽中国 · 青春担当
          </p>
        </motion.div>

        {/* 项目信息卡片 */}
        <motion.div
          className="project-info-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="project-info-grid">
            <div className="info-item">
              <span className="info-icon"><IconBook size={24} /></span>
              <div className="info-content">
                <span className="info-label">课程名称</span>
                <span className="info-value">{projectInfo.course}</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><IconAvatar size={24} /></span>
              <div className="info-content">
                <span className="info-label">任课教师</span>
                <span className="info-value">{projectInfo.teacher}</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><IconCalendar size={24} /></span>
              <div className="info-content">
                <span className="info-label">学期</span>
                <span className="info-value">{projectInfo.semester}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 团队成员 */}
        <motion.div
          className="team-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`member-card ${member.role === '组长' ? 'leader' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              {/* 玻璃态容器 */}
              <div className="member-content">
                {/* 头像区域 */}
                <div className="member-avatar-wrapper">
                  <div className="member-avatar">
                    <span>{member.avatar}</span>
                    {member.role === '组长' && (
                      <motion.span 
                        className="leader-badge"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <IconCrown size={20} />
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* 个人信息 */}
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <span className="member-id">{member.studentId}</span>
                  <span className="member-role">{member.role}</span>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="member-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-line"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 思政体会 */}
        <motion.div
          className="reflection-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="reflection-title">
            <span className="title-icon"><IconThought size={28} /></span>
            思政体会
          </h3>
          <div className="reflection-content">
            <p>
              通过本次课程实践，我们深刻体会到习近平生态文明思想在基层城市建设中的巨大指导作用和现实意义。
              浣花溪公园的调研让我们看到，"绿水青山就是金山银山"绝不是一句抽象的口号，
              而是实实在在体现在我们身边的变化。
            </p>
            <p>
              作为新时代青年，我们既是生态文明建设的受益者，更应是参与者、推动者。
              未来无论走上什么工作岗位，我们都会铭记此次实践的收获：坚持可持续发展的理念，
              像爱护眼睛一样爱护生态环境；主动传播环保知识，影响带动身边更多的人参与环保行动。
            </p>
            <blockquote className="reflection-quote">
              "生态兴则文明兴，生态衰则文明衰"
            </blockquote>
          </div>
        </motion.div>

        {/* 页脚 */}
        <motion.footer
          className="team-footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-emoji"><IconLeaf size={24} /></span>
              <span className="logo-text">生态文明 · 美丽中国</span>
            </div>

            <p className="footer-copyright">
              © 2025 习近平生态文明思想成都实践调研小组 | 西南交通大学
            </p>
          </div>
        </motion.footer>
      </div>

      {/* 背景装饰 */}
      <div className="team-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-leaf leaf-1"><IconLeaf size={40} /></div>
        <div className="decoration-leaf leaf-2"><IconLeaf size={30} /></div>
      </div>
    </section>
  );
}
