import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { IconTree, IconBird, IconScroll, IconHouse, IconCamera } from './Icons';
import './Research.css';

// 图片分类数据
const imageCategories = [
  {
    id: 'nature',
    title: '人与自然',
    subtitle: '生态和谐共生',
    images: [
      { src: '/resource/人与自然/争抢鱼食的锦鲤.jpg', caption: '争抢鱼食的锦鲤' },
      { src: '/resource/人与自然/植被茂密的林间溪流.jpg', caption: '植被茂密的林间溪流' },
      { src: '/resource/人与自然/绿树环绕的静谧河道.jpg', caption: '绿树环绕的静谧河道' },
      { src: '/resource/人与自然/湖畔荷叶.jpg', caption: '湖畔荷叶' },
      { src: '/resource/人与自然/园林白墙与街边一角.jpg', caption: '园林白墙与街边一角' },
      { src: '/resource/人与自然/池边观赏锦鲤.jpg', caption: '池边观赏锦鲤' },
    ],
  },
  {
    id: 'humanistic',
    title: '人文关怀',
    subtitle: '以人为本服务',
    images: [
      { src: '/resource/人文关怀/人车分流的专用步道.jpg', caption: '人车分流的专用步道' },
      { src: '/resource/人文关怀/免费开水.jpg', caption: '便民免费开水供应' },
      { src: '/resource/人文关怀/好看的公共厕所.jpg', caption: '美观的公共厕所设施' },
      { src: '/resource/人文关怀/好看的公共厕所2.jpg', caption: '精心设计的公厕' },
    ],
  },
  {
    id: 'culture',
    title: '文化承载',
    subtitle: '诗意栖居之地',
    images: [
      { src: '/resource/文化承载/杜甫草堂大门.jpg', caption: '杜甫草堂大门' },
      { src: '/resource/文化承载/古典园林亭子.jpg', caption: '古典园林亭子' },
      { src: '/resource/文化承载/岩壁石刻诗词群.jpg', caption: '岩壁石刻诗词' },
      { src: '/resource/文化承载/艾青诗歌石刻.jpg', caption: '艾青诗歌石刻' },
      { src: '/resource/文化承载/爱情诗篇书籍雕塑.jpg', caption: '诗歌书籍雕塑' },
      { src: '/resource/文化承载/我们观赏人物雕像.jpg', caption: '小组成员观赏雕像' },
    ],
  },
];

const researchHighlights = [
  {
    icon: <IconTree size={28} />,
    title: '城市绿心',
    desc: '32.32公顷开放式城市森林公园',
  },
  {
    icon: <IconBird size={28} />,
    title: '生态修复',
    desc: '白鹭、灰鹭等水鸟栖息嬉戏',
  },
  {
    icon: <IconScroll size={28} />,
    title: '文化融合',
    desc: '杜甫诗歌文化与现代生态结合',
  },
  {
    icon: <IconHouse size={28} />,
    title: '社区共生',
    desc: '周边居民共享绿色福祉',
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="research" className="research-section" ref={ref}>
      <div className="container">
        {/* 章节标题 */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">第二章</span>
          <h2 className="section-title">实地调研</h2>
          <p className="section-desc">
            浣花溪公园：城市绿心与民生福祉的共生典范
          </p>
        </motion.div>

        {/* 研究亮点 */}
        <motion.div
          className="research-highlights"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {researchHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="highlight-icon">{item.icon}</span>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 分类标签 */}
        <motion.div
          className="category-tabs"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {imageCategories.map((category, index) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="tab-title">{category.title}</span>
              <span className="tab-subtitle">{category.subtitle}</span>
            </button>
          ))}
        </motion.div>

        {/* 图片轮播 */}
        <motion.div
          className="gallery-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Swiper
            key={activeCategory}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {imageCategories[activeCategory].images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="image-wrapper">
                    <img src={image.src} alt={image.caption} loading="lazy" />
                    <div className="image-overlay">
                      <span className="image-caption">{image.caption}</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* 调研描述 */}
        <motion.div
          className="research-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="content-grid">
            <div className="content-card">
              <h3>🏞️ 公园概况</h3>
              <p>
                浣花溪公园坐落于成都市青羊区浣花溪畔，因唐代女诗人薛涛常于此浣纱而得名。
                园区占地约32公顷，以"山水交融、草木繁茂"为基调，是成都市规模最大的开放式城市森林公园。
              </p>
            </div>
            <div className="content-card">
              <h3>🌿 生态屏障</h3>
              <p>
                公园作为城市"绿肺"与"海绵体"，兼具水源涵养、雨水滞蓄与地下水补给功能，
                湖面常有野鸭、白鹭、灰鹭等水鸟栖息，印证了生物多样性的显著恢复。
              </p>
            </div>
            <div className="content-card">
              <h3>👥 民生服务</h3>
              <p>
                公园实行全天免费开放（6:00–22:00），园内设施完备，滨水步道、健身路径、
                太极广场等运动设施覆盖全龄需求，真正实现"推窗见绿、出门入园"。
              </p>
            </div>
            <div className="content-card">
              <h3>🏘️ 社区共生</h3>
              <p>
                浣花溪公园带动了周边片区的更新与人居品质提升，邻里互动更加频繁，
                社区凝聚力明显增强，真正实现了生态建设与民生改善的"双赢"。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 小组合照 */}
        <motion.div
          className="team-photo-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="team-photo-card">
            <img src="/resource/小组合照.jpg" alt="小组合照" />
            <div className="team-photo-caption">
              <span className="caption-icon"><IconCamera size={20} /></span>
              <span>小组成员实地调研合影留念</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
