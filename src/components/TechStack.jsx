import React from 'react'
import './SkillCardStyle.css'

// Reuse existing logos
import jsImg       from '../assets/img/js.jpg'
import reactImg    from '../assets/img/react.png'
import reduxImg    from '../assets/img/redux.png'
import mongoImg    from '../assets/img/mongo.png'
import nodeImg     from '../assets/img/node-js.png'
import nextImg     from '../assets/img/next-js-logo.png'
import tsImg       from '../assets/img/typescript.png'
import tailwindImg from '../assets/img/tailwind.png'
import gitImg      from '../assets/img/git.png'
import materialImg from '../assets/img/MaterialUi-2.png'

const logos = [
  { name: 'React',       img: reactImg    },
  { name: 'JavaScript',  img: jsImg       },
  { name: 'TypeScript',  img: tsImg       },
  { name: 'Node.js',     img: nodeImg     },
  { name: 'Next.js',     img: nextImg     },
  { name: 'MongoDB',     img: mongoImg    },
  { name: 'Redux',       img: reduxImg    },
  { name: 'Tailwind',    img: tailwindImg },
  { name: 'Git',         img: gitImg      },
  { name: 'Material UI', img: materialImg },
]

// Duplicate for seamless loop
const track = [...logos, ...logos]

const TechStack = () => (
  <section className="section-sm techstack-section" id="techstack" aria-label="Tech Stack">
    <div className="container" style={{ marginBottom: '32px' }}>
      <p style={{ textAlign: 'center', fontSize: '.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text-4)' }}>
        Technologies I work with
      </p>
    </div>
    <div className="techstack-marquee" aria-hidden="true">
      <div className="techstack-track">
        {track.map((item, i) => (
          <div className="tech-logo-item" key={i} title={item.name}>
            <img className="tech-logo-img" src={item.img} alt={item.name} loading="lazy" />
            <span className="tech-logo-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
