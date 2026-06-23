import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './SkillCardStyle.css'

// Import existing tech logo images
import jsImg       from '../assets/img/js.jpg'
import reactImg    from '../assets/img/react.png'
import reduxImg    from '../assets/img/redux.png'
import mongoImg    from '../assets/img/mongo.png'
import nodeImg     from '../assets/img/node-js.png'
import nextImg     from '../assets/img/next-js-logo.png'
import tsImg       from '../assets/img/typescript.png'
import tailwindImg from '../assets/img/tailwind.png'
import restImg     from '../assets/img/restApi.png'
import gitImg      from '../assets/img/git.png'
import materialImg from '../assets/img/MaterialUi-2.png'
import sassImg     from '../assets/img/sass-logo.jpg'

const allSkills = [
  // Frontend
  { name: 'JavaScript',   img: jsImg,       level: 92, cat: 'Frontend' },
  { name: 'React.js',     img: reactImg,    level: 95, cat: 'Frontend' },
  { name: 'TypeScript',   img: tsImg,       level: 78, cat: 'Frontend' },
  { name: 'Next.js',      img: nextImg,     level: 80, cat: 'Frontend' },
  { name: 'Redux',        img: reduxImg,    level: 85, cat: 'Frontend' },
  { name: 'Tailwind CSS', img: tailwindImg, level: 88, cat: 'Frontend' },
  { name: 'Material UI',  img: materialImg, level: 82, cat: 'Frontend' },
  { name: 'SASS/SCSS',    img: sassImg,     level: 80, cat: 'Frontend' },
  // Backend
  { name: 'Node.js',      img: nodeImg,     level: 88, cat: 'Backend'  },
  { name: 'REST APIs',    img: restImg,     level: 90, cat: 'Backend'  },
  { name: 'MongoDB',      img: mongoImg,    level: 85, cat: 'Backend'  },
  { name: 'Express.js',   img: null,        level: 85, cat: 'Backend',  init: 'Ex' },
  { name: 'PostgreSQL',   img: null,        level: 72, cat: 'Backend',  init: 'Pg' },
  { name: 'Firebase',     img: null,        level: 78, cat: 'Backend',  init: 'Fb' },
  // Tools
  { name: 'Git & GitHub', img: gitImg,      level: 90, cat: 'Tools'   },
  { name: 'AWS',          img: null,        level: 70, cat: 'Tools',   init: 'AWS' },
  { name: 'Vercel',       img: null,        level: 85, cat: 'Tools',   init: 'V'   },
  { name: 'Figma',        img: null,        level: 75, cat: 'Tools',   init: 'Fi'  },
  { name: 'Docker',       img: null,        level: 62, cat: 'Tools',   init: 'Do'  },
  { name: 'Postman',      img: null,        level: 88, cat: 'Tools',   init: 'Po'  },
  // AI / ML
  { name: 'Python',       img: null,        level: 72, cat: 'AI / ML', init: 'Py' },
  { name: 'TensorFlow',   img: null,        level: 60, cat: 'AI / ML', init: 'TF' },
  { name: 'OpenAI API',   img: null,        level: 75, cat: 'AI / ML', init: 'AI' },
]

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'AI / ML']

const SkillItem = ({ skill, index }) => (
  <motion.div
    className="skill-item"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    title={`${skill.name} — ${skill.level}% proficiency`}
  >
    {skill.img
      ? <img className="skill-logo" src={skill.img} alt={skill.name} loading="lazy" />
      : <div className="skill-logo-placeholder" aria-hidden="true">{skill.init}</div>
    }
    <span className="skill-name">{skill.name}</span>
    <div className="skill-level" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.level}% proficiency`}>
      <div className="skill-level-bar" style={{ width: `${skill.level}%` }} />
    </div>
  </motion.div>
)

const Skill = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? allSkills
    : allSkills.filter(s => s.cat === active)

  return (
    <section className="section skills-section" id="skills" aria-label="Skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to build production-ready applications.
          </p>
        </div>

        {/* Category filter */}
        <div className="skills-categories" role="tablist" aria-label="Filter skills by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skill-cat-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              id={`skill-tab-${cat.toLowerCase().replace(/\s/g,'-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Skill