// WorkCardData.jsx — Real project case studies
const ProjectCardData = [
  {
    id: 'healthrx-ai',
    imgsrc: '/Images/healthrxai.png',
    category: 'AI Healthcare Platform',
    badgeColor: 'badge-blue',
    title: 'HealthRx AI',
    tagline: 'AI-driven enterprise clinical workflows and patient management platform',
    problem:
      'Healthcare organizations struggled with disconnected EMR systems, manual report writing, and clinical workflow friction, which slowed diagnostic delivery and increased staff overhead.',
    solution:
      'Designed and developed a scalable, AI-powered healthcare ecosystem featuring real-time clinical notes automation, robust patient EMR timelines, diagnostic analytics, and multi-department scheduling.',
    impact: [
      { metric: '40%', label: 'Diagnostic Speed' },
      { metric: '15k+', label: 'Patients Managed' },
      { metric: '65%', label: 'Less Admin Time' },
      { metric: '99.9%', label: 'Uptime SLA' },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'AI Integration'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://healthrxai.com/',
    featured: true,
  },
  {
    id: 'cfc-software',
    imgsrc: '/Images/cfc-software.png',
    category: 'Software Company',
    badgeColor: 'badge-purple',
    title: 'CFC Software',
    tagline: 'Enterprise web platform showcasing custom software and AI services',
    problem:
      'A global software provider needed a refreshed, mobile-first showcase to represent their custom AI products, enterprise automation tools, and service catalogs.',
    solution:
      'Built a responsive corporate platform with a modular service grid, interactive technical case study showcases, and a streamlined project inquiry pipeline.',
    impact: [
      { metric: '2.5×', label: 'Client Inquiries' },
      { metric: '60%', label: 'Lower Bounce Rate' },
      { metric: '95%', label: 'Mobile Usability' },
      { metric: '20+', label: 'Enterprise Clients' },
    ],
    techStack: ['React', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://www.cfcsoftware.com/',
    featured: true,
  },
  
  {
    id: 'ratnaparkhi-sanstha',
    imgsrc: '/Images/Ratnaparkhi Bahuudeshiya Sanstha.png',
    category: 'NGO Website',
    badgeColor: 'badge-red',
    title: 'Ratnaparkkhi Bahuudeshiya Sanstha',
    tagline: 'Community portal and digital donation platform for social initiatives',
    problem:
      'The multi-purpose NGO lacked a central platform to communicate community programs, coordinate volunteers, and receive online program applications.',
    solution:
      'Designed and deployed an accessible, community-focused portal with event archives, donation transparency boards, and registration workflows.',
    impact: [
      { metric: '5k+', label: 'Members Engaged' },
      { metric: '10+', label: 'Active Projects' },
      { metric: '200%', label: 'Volunteer Growth' },
      { metric: '100%', label: 'WCAG Accessible' },
    ],
    techStack: ['React', 'JavaScript'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://ratnaparkkhisansttha.com/',
    featured: false,
  },
  {
    id: 'ratnaparkkhi-institute',
    imgsrc: '/Images/Ratnaparkkhi Institute.png',
    category: 'Educational Institution',
    badgeColor: 'badge-purple',
    title: 'Ratnaparkkhi Institute of Engineering & Management',
    tagline: 'Admission-focused portal detailing courses, faculty, and placements',
    problem:
      'Prospective students had a high barrier to submitting admission inquiries, learning about course criteria, and viewing historical placement percentages.',
    solution:
      'Re-engineered an interactive educational platform with a structured course database, live placement highlight reels, and a fast, validated enrollment application form.',
    impact: [
      { metric: '80%', label: 'Online Applications' },
      { metric: '15k+', label: 'Active Students' },
      { metric: '50%', label: 'Support Queue Cut' },
      { metric: '95', label: 'SEO Lighthouse' },
    ],
    techStack: ['React', 'Vite', 'Responsive Design'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://ratnaparkkhi-institute-7i5r.vercel.app/',
    featured: true,
  },
  {
    id: 'jiva-robotics',
    imgsrc: '/Images/jivarobotics.png',
    category: 'Robotics & Automation',
    badgeColor: 'badge-blue',
    title: 'Jiva Robotics',
    tagline: 'Interactive B2B catalog showcasing warehouse automation and industrial robotics',
    problem:
      'A leading robotics developer had no way to showcase advanced robotics, industrial specifications, and system integration workflows online.',
    solution:
      'Designed a sleek, dark-accented robotics platform with spec-comparison charts, interactive 3D component renders, and custom solution quote generators.',
    impact: [
      { metric: '40%', label: 'More Partner Leads' },
      { metric: '99%', label: 'Performance Score' },
      { metric: '15+', label: 'Robots Indexed' },
      { metric: '50%', label: 'Engagement Increase' },
    ],
    techStack: ['React', 'Modern UI', 'Automation Solutions'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://jivarobotics.com/',
    featured: false,
  },
  {
    id: 'aayu-pharma',
    imgsrc: '/Images/aayupharma.png',
    category: 'Pharmaceutical Company',
    badgeColor: 'badge-green',
    title: 'Aayu Pharma',
    tagline: 'Product catalog and corporate info directory for pharmaceutical distribution',
    problem:
      'Medical representatives and distributors had difficulty accessing an updated product registry, safety disclosures, and supply chain updates on mobile devices.',
    solution:
      'Developed a responsive catalog index with instant category filtering, secure document download hubs, and wholesale contact inquiry forms.',
    impact: [
      { metric: '300+', label: 'Cataloged Products' },
      { metric: '80%', label: 'Distributor Reach' },
      { metric: '4×', label: 'Catalog Downloads' },
      { metric: '100%', label: 'Mobile-Optimized' },
    ],
    techStack: ['React', 'Responsive UI'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://aayupharma.in/',
    featured: false,
  },
  {
    id: 'groundup-media',
    imgsrc: '/Images/groundup-media.png',
    category: 'Digital Marketing Agency',
    badgeColor: 'badge-amber',
    title: 'GroundUp Media',
    tagline: 'High-performance corporate agency website built for business growth',
    problem:
      'The agency lacked a modern digital portfolio and cohesive performance marketing conversion funnels to attract mid-market B2B clients and display their client work.',
    solution:
      'Engineered a fast, highly optimized marketing website featuring interactive SEO performance checkers, case studies showcase, and dynamic contact workflows.',
    impact: [
      { metric: '150%', label: 'Lead Conversion' },
      { metric: '98+', label: 'Lighthouse Score' },
      { metric: '40k+', label: 'Monthly Visitors' },
      { metric: '3.5s', label: 'Faster Load Time' },
    ],
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/gouravbanswal',
    live: 'https://www.groundupmedia.in/',
    featured: true,
  }
]

export default ProjectCardData