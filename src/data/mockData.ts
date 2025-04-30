import { Job, Company } from '../types';

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechNova',
    logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.png?auto=compress&cs=tinysrgb&w=250',
    description: 'Leading tech company specializing in innovative solutions for the digital age.',
    longDescription: 'TechNova is at the forefront of technological innovation, creating solutions that transform how businesses operate in the digital landscape. Founded in 2010, we\'ve grown from a small startup to a global leader with offices in multiple countries.',
    location: 'San Francisco, CA',
    industry: 'Technology',
    employees: '1,000-5,000',
    founded: '2010',
    website: 'https://www.technova.example',
    email: 'careers@technova.example',
    phone: '+1 (415) 555-1234',
    address: '123 Innovation Way, San Francisco, CA 94105',
    openPositions: 8,
    social: {
      twitter: 'https://twitter.com/technova',
      facebook: 'https://facebook.com/technova',
      linkedin: 'https://linkedin.com/company/technova',
      website: 'https://www.technova.example'
    },
    benefits: [
      'Competitive salary & equity',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO and flexible work arrangements',
      'Professional development budget',
      'Wellness programs and gym memberships',
      'Catered lunches and stocked kitchen'
    ],
    mission: 'To create technology that makes the world more efficient, connected, and innovative.',
    vision: 'A world where technology solves the most challenging problems facing humanity.'
  },
  {
    id: '2',
    name: 'GreenEarth',
    logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=250',
    description: 'Sustainable solutions company focused on environmental conservation and renewable energy.',
    longDescription: 'GreenEarth is dedicated to creating sustainable solutions for businesses and communities. Our innovative approaches to renewable energy, waste reduction, and conservation have made us a leader in the environmental sector.',
    location: 'Portland, OR',
    industry: 'Environmental Services',
    employees: '501-1,000',
    founded: '2012',
    website: 'https://www.greenearth.example',
    openPositions: 5,
    social: {
      twitter: 'https://twitter.com/greenearth',
      facebook: 'https://facebook.com/greenearth',
      linkedin: 'https://linkedin.com/company/greenearth',
      website: 'https://www.greenearth.example'
    }
  },
  {
    id: '3',
    name: 'HealthPlus',
    logo: 'https://images.pexels.com/photos/7722866/pexels-photo-7722866.jpeg?auto=compress&cs=tinysrgb&w=250',
    description: 'Healthcare technology company improving patient care through innovative digital solutions.',
    longDescription: 'HealthPlus combines cutting-edge technology with healthcare expertise to create solutions that improve patient outcomes and streamline clinical workflows. Our products are used by hospitals and clinics worldwide.',
    location: 'Boston, MA',
    industry: 'Healthcare Technology',
    employees: '201-500',
    founded: '2015',
    website: 'https://www.healthplus.example',
    openPositions: 6,
    social: {
      twitter: 'https://twitter.com/healthplus',
      facebook: 'https://facebook.com/healthplus',
      linkedin: 'https://linkedin.com/company/healthplus',
      website: 'https://www.healthplus.example'
    }
  },
  {
    id: '4',
    name: 'DataSphere',
    logo: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=250',
    description: 'AI and machine learning company transforming how businesses leverage data.',
    longDescription: 'DataSphere specializes in artificial intelligence and machine learning solutions that help businesses extract value from their data. Our powerful analytics platforms provide actionable insights for decision-makers across industries.',
    location: 'Seattle, WA',
    industry: 'Data Science & AI',
    employees: '101-200',
    founded: '2018',
    website: 'https://www.datasphere.example',
    openPositions: 7,
    social: {
      twitter: 'https://twitter.com/datasphere',
      facebook: 'https://facebook.com/datasphere',
      linkedin: 'https://linkedin.com/company/datasphere',
      website: 'https://www.datasphere.example'
    }
  },
  {
    id: '5',
    name: 'CreativeMinds',
    logo: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=250',
    description: 'Digital design agency known for award-winning user experiences and brand strategies.',
    longDescription: 'CreativeMinds is an award-winning design agency that creates exceptional digital experiences. Our team of designers, strategists, and developers work together to deliver innovative solutions for brands looking to make an impact.',
    location: 'New York, NY',
    industry: 'Design & Creative',
    employees: '51-100',
    founded: '2014',
    website: 'https://www.creativeminds.example',
    openPositions: 4,
    social: {
      twitter: 'https://twitter.com/creativeminds',
      facebook: 'https://facebook.com/creativeminds',
      linkedin: 'https://linkedin.com/company/creativeminds',
      website: 'https://www.creativeminds.example'
    }
  },
  {
    id: '6',
    name: 'FinEdge',
    logo: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=250',
    description: 'Fintech company revolutionizing banking and financial services through technology.',
    longDescription: 'FinEdge is at the cutting edge of financial technology, developing solutions that make banking more accessible, secure, and user-friendly. Our products serve both consumers and financial institutions looking to modernize their offerings.',
    location: 'Chicago, IL',
    industry: 'Financial Technology',
    employees: '201-500',
    founded: '2016',
    website: 'https://www.finedge.example',
    openPositions: 6,
    social: {
      twitter: 'https://twitter.com/finedge',
      facebook: 'https://facebook.com/finedge',
      linkedin: 'https://linkedin.com/company/finedge',
      website: 'https://www.finedge.example'
    }
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: {
      id: '1',
      name: 'TechNova',
      logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.png?auto=compress&cs=tinysrgb&w=250',
      description: 'Leading tech company specializing in innovative solutions for the digital age.',
      location: 'San Francisco, CA',
      industry: 'Technology',
      employees: '1,000-5,000',
      website: 'https://www.technova.example',
      openPositions: 8
    },
    location: 'San Francisco, CA',
    type: 'Full-Time',
    experienceLevel: 'senior',
    category: 'technology',
    description: 'We are looking for a Senior Frontend Developer to join our product team. You will be responsible for building high-quality, responsive web applications using modern JavaScript frameworks and libraries.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and libraries for future use',
      'Ensure the technical feasibility of UI/UX designs',
      'Optimize application for maximum speed and scalability',
      'Collaborate with backend developers and designers to improve usability'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Proficient in JavaScript, React, HTML, and CSS',
      'Experience with responsive design and cross-browser compatibility',
      'Understanding of frontend state management',
      'Familiarity with RESTful APIs and asynchronous request handling',
      'Good understanding of browser rendering behavior and performance'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements with remote options',
      'Professional development budget',
      'Generous paid time off',
      'Catered lunches and wellness programs'
    ],
    salary: '$120,000 - $160,000',
    salaryRange: { min: 120000, max: 160000 },
    postedAt: '3 days ago',
    postedDate: '2023-06-15',
    tags: ['React', 'JavaScript', 'Frontend', 'UI/UX', 'CSS', 'HTML5'],
    featured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: {
      id: '1',
      name: 'TechNova',
      logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.png?auto=compress&cs=tinysrgb&w=250',
      description: 'Leading tech company specializing in innovative solutions for the digital age.',
      location: 'San Francisco, CA',
      industry: 'Technology',
      employees: '1,000-5,000',
      website: 'https://www.technova.example',
      openPositions: 8
    },
    location: 'San Francisco, CA (Remote)',
    type: 'Full-Time',
    experienceLevel: 'mid',
    category: 'product',
    description: 'TechNova is seeking a talented Product Manager to help drive the vision and execution of our core software offerings. This role will involve working closely with engineering, design, and marketing teams to ensure successful product development and launch.',
    responsibilities: [
      'Define and execute product strategy and roadmap',
      'Gather and prioritize requirements from users, stakeholders, and the market',
      'Work closely with engineering and design teams to deliver features',
      'Analyze market trends and competitive landscape',
      'Track and measure product KPIs and user feedback'
    ],
    requirements: [
      '3+ years of experience in product management',
      'Experience shipping successful B2B or B2C software products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management',
      'Technical background or understanding of software development',
      'Agile/Scrum experience'
    ],
    salary: '$110,000 - $140,000',
    salaryRange: { min: 110000, max: 140000 },
    postedAt: '1 week ago',
    postedDate: '2023-06-10',
    tags: ['Product Management', 'Agile', 'B2B', 'SaaS', 'Strategy'],
    featured: false
  },
  {
    id: '3',
    title: 'Environmental Scientist',
    company: {
      id: '2',
      name: 'GreenEarth',
      logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Sustainable solutions company focused on environmental conservation and renewable energy.',
      location: 'Portland, OR',
      industry: 'Environmental Services',
      employees: '501-1,000',
      website: 'https://www.greenearth.example',
      openPositions: 5
    },
    location: 'Portland, OR',
    type: 'Full-Time',
    experienceLevel: 'mid',
    category: 'science',
    description: 'GreenEarth is looking for an Environmental Scientist to join our research team. You will be involved in field studies, data analysis, and reporting on environmental impacts and conservation strategies.',
    responsibilities: [
      'Conduct field surveys and collect environmental data',
      'Analyze and interpret environmental data and prepare reports',
      'Develop and implement conservation strategies',
      'Collaborate with government agencies and other stakeholders',
      'Stay current with environmental regulations and research'
    ],
    requirements: [
      'MS/PhD in Environmental Science, Ecology, or related field',
      '3+ years of experience in environmental research or consulting',
      'Experience with environmental sampling and monitoring techniques',
      'Knowledge of environmental regulations and compliance',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication'
    ],
    salary: '$85,000 - $110,000',
    salaryRange: { min: 85000, max: 110000 },
    postedAt: '2 days ago',
    postedDate: '2023-06-16',
    tags: ['Environmental Science', 'Research', 'Conservation', 'Sustainability', 'Field Work'],
    featured: true
  },
  {
    id: '4',
    title: 'Healthcare Data Analyst',
    company: {
      id: '3',
      name: 'HealthPlus',
      logo: 'https://images.pexels.com/photos/7722866/pexels-photo-7722866.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Healthcare technology company improving patient care through innovative digital solutions.',
      location: 'Boston, MA',
      industry: 'Healthcare Technology',
      employees: '201-500',
      website: 'https://www.healthplus.example',
      openPositions: 6
    },
    location: 'Boston, MA',
    type: 'Full-Time',
    experienceLevel: 'entry',
    category: 'healthcare',
    description: 'HealthPlus is seeking a Healthcare Data Analyst to help us transform healthcare data into insights that improve patient outcomes and operational efficiency.',
    responsibilities: [
      'Analyze healthcare data sets to identify trends and patterns',
      'Create dashboards and visualizations for key stakeholders',
      'Collaborate with clinical and technical teams on data projects',
      'Support the development of data-driven healthcare solutions',
      'Ensure data quality and integrity in all analyses'
    ],
    requirements: [
      'Bachelor\'s degree in Statistics, Data Science, or related field',
      '1-2 years of experience in data analysis, preferably in healthcare',
      'Proficiency in SQL, Python, or R',
      'Experience with data visualization tools (Tableau, Power BI)',
      'Understanding of healthcare data structures and terminology',
      'Strong analytical and problem-solving skills'
    ],
    salary: '$70,000 - $90,000',
    salaryRange: { min: 70000, max: 90000 },
    postedAt: '5 days ago',
    postedDate: '2023-06-13',
    tags: ['Healthcare', 'Data Analysis', 'SQL', 'Python', 'Tableau'],
    featured: false
  },
  {
    id: '5',
    title: 'Machine Learning Engineer',
    company: {
      id: '4',
      name: 'DataSphere',
      logo: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'AI and machine learning company transforming how businesses leverage data.',
      location: 'Seattle, WA',
      industry: 'Data Science & AI',
      employees: '101-200',
      website: 'https://www.datasphere.example',
      openPositions: 7
    },
    location: 'Seattle, WA (Hybrid)',
    type: 'Full-Time',
    experienceLevel: 'senior',
    category: 'technology',
    description: 'DataSphere is looking for a talented Machine Learning Engineer to help design, build and deploy our next generation of AI-powered products.',
    responsibilities: [
      'Design, build, and maintain ML models and pipelines',
      'Collaborate with data scientists to implement algorithms',
      'Optimize ML models for performance and scalability',
      'Work with engineering teams to integrate ML solutions',
      'Research and implement new ML techniques and approaches'
    ],
    requirements: [
      'MS/PhD in Computer Science, Machine Learning, or related field',
      '4+ years of experience in ML/AI engineering',
      'Proficiency in Python and ML frameworks (TensorFlow, PyTorch)',
      'Experience with MLOps and model deployment',
      'Strong understanding of statistics and ML algorithms',
      'Experience with NLP, computer vision, or recommendation systems'
    ],
    salary: '$140,000 - $180,000',
    salaryRange: { min: 140000, max: 180000 },
    postedAt: '1 day ago',
    postedDate: '2023-06-17',
    tags: ['Machine Learning', 'AI', 'Python', 'TensorFlow', 'PyTorch', 'MLOps'],
    featured: true
  },
  {
    id: '6',
    title: 'UX/UI Designer',
    company: {
      id: '5',
      name: 'CreativeMinds',
      logo: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Digital design agency known for award-winning user experiences and brand strategies.',
      location: 'New York, NY',
      industry: 'Design & Creative',
      employees: '51-100',
      website: 'https://www.creativeminds.example',
      openPositions: 4
    },
    location: 'New York, NY',
    type: 'Full-Time',
    experienceLevel: 'mid',
    category: 'design',
    description: 'CreativeMinds is seeking a talented UX/UI Designer to join our team. You will be responsible for creating beautiful, intuitive interfaces for our clients across various industries.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with clients and product teams to understand requirements',
      'Develop and maintain design systems',
      'Stay current with design trends and best practices'
    ],
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools (Figma, Sketch, Adobe XD)',
      'Strong portfolio demonstrating UI design and UX process',
      'Understanding of usability principles and accessibility',
      'Excellent communication and presentation skills'
    ],
    salary: '$90,000 - $120,000',
    salaryRange: { min: 90000, max: 120000 },
    postedAt: '4 days ago',
    postedDate: '2023-06-14',
    tags: ['UX/UI', 'Design', 'Figma', 'User Research', 'Prototyping'],
    featured: false
  },
  {
    id: '7',
    title: 'Financial Analyst',
    company: {
      id: '6',
      name: 'FinEdge',
      logo: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Fintech company revolutionizing banking and financial services through technology.',
      location: 'Chicago, IL',
      industry: 'Financial Technology',
      employees: '201-500',
      website: 'https://www.finedge.example',
      openPositions: 6
    },
    location: 'Chicago, IL',
    type: 'Full-Time',
    experienceLevel: 'entry',
    category: 'finance',
    description: 'FinEdge is looking for a Financial Analyst to join our growing team. You will be responsible for financial modeling, forecasting, and providing insights to support business decisions.',
    responsibilities: [
      'Develop financial models and forecasts',
      'Analyze company financial data and performance metrics',
      'Prepare reports and presentations for executive team',
      'Support budgeting and planning processes',
      'Identify trends and provide recommendations based on financial analysis'
    ],
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      '1-3 years of experience in financial analysis',
      'Strong Excel and financial modeling skills',
      'Experience with financial reporting and analysis',
      'Knowledge of accounting principles',
      'Excellent analytical and problem-solving skills'
    ],
    salary: '$65,000 - $85,000',
    salaryRange: { min: 65000, max: 85000 },
    postedAt: '1 week ago',
    postedDate: '2023-06-11',
    tags: ['Finance', 'Analysis', 'Excel', 'Forecasting', 'Fintech'],
    featured: false
  },
  {
    id: '8',
    title: 'DevOps Engineer',
    company: {
      id: '1',
      name: 'TechNova',
      logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.png?auto=compress&cs=tinysrgb&w=250',
      description: 'Leading tech company specializing in innovative solutions for the digital age.',
      location: 'San Francisco, CA',
      industry: 'Technology',
      employees: '1,000-5,000',
      website: 'https://www.technova.example',
      openPositions: 8
    },
    location: 'Remote',
    type: 'Full-Time',
    experienceLevel: 'mid',
    category: 'technology',
    description: 'TechNova is seeking a skilled DevOps Engineer to strengthen our infrastructure team. You will be responsible for building and maintaining our cloud infrastructure, CI/CD pipelines, and deployment processes.',
    responsibilities: [
      'Design, implement, and maintain cloud infrastructure using AWS/Azure/GCP',
      'Automate deployment pipelines and infrastructure provisioning',
      'Monitor systems and implement security best practices',
      'Troubleshoot and resolve infrastructure issues',
      'Collaborate with development teams to improve delivery efficiency'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Proficiency with infrastructure as code (Terraform, CloudFormation)',
      'Experience with CI/CD tools (Jenkins, GitHub Actions)',
      'Knowledge of containerization (Docker, Kubernetes)'
    ],
    salary: '$110,000 - $150,000',
    salaryRange: { min: 110000, max: 150000 },
    postedAt: '3 days ago',
    postedDate: '2023-06-15',
    tags: ['DevOps', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
    featured: false
  },
  {
    id: '9',
    title: 'Marketing Manager',
    company: {
      id: '3',
      name: 'HealthPlus',
      logo: 'https://images.pexels.com/photos/7722866/pexels-photo-7722866.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Healthcare technology company improving patient care through innovative digital solutions.',
      location: 'Boston, MA',
      industry: 'Healthcare Technology',
      employees: '201-500',
      website: 'https://www.healthplus.example',
      openPositions: 6
    },
    location: 'Boston, MA (Hybrid)',
    type: 'Full-Time',
    experienceLevel: 'senior',
    category: 'marketing',
    description: 'HealthPlus is looking for a Marketing Manager to lead our marketing efforts and drive user acquisition and engagement for our healthcare technology products.',
    responsibilities: [
      'Develop and execute marketing strategies and campaigns',
      'Manage digital marketing channels and optimize performance',
      'Collaborate with product teams on go-to-market strategies',
      'Analyze marketing metrics and adjust strategies accordingly',
      'Manage marketing budget and team members'
    ],
    requirements: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      '5+ years of experience in marketing, preferably in healthcare or technology',
      'Experience with digital marketing channels and strategies',
      'Strong analytical and data-driven decision making',
      'Excellent communication and project management skills',
      'Healthcare industry knowledge preferred'
    ],
    salary: '$100,000 - $130,000',
    salaryRange: { min: 100000, max: 130000 },
    postedAt: '2 days ago',
    postedDate: '2023-06-16',
    tags: ['Marketing', 'Digital Marketing', 'Healthcare', 'Strategy', 'Analytics'],
    featured: false
  },
  {
    id: '10',
    title: 'Sustainability Consultant',
    company: {
      id: '2',
      name: 'GreenEarth',
      logo: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Sustainable solutions company focused on environmental conservation and renewable energy.',
      location: 'Portland, OR',
      industry: 'Environmental Services',
      employees: '501-1,000',
      website: 'https://www.greenearth.example',
      openPositions: 5
    },
    location: 'Remote',
    type: 'Contract',
    experienceLevel: 'mid',
    category: 'consulting',
    description: 'GreenEarth is seeking a Sustainability Consultant to help our clients develop and implement sustainability strategies and environmental management systems.',
    responsibilities: [
      'Conduct sustainability assessments and audits for clients',
      'Develop sustainability strategies and implementation plans',
      'Help clients reduce environmental impact and achieve sustainability goals',
      'Prepare reports and presentations for clients and stakeholders',
      'Stay current with sustainability trends, regulations, and best practices'
    ],
    requirements: [
      'Bachelor\'s degree in Environmental Science, Sustainability, or related field',
      '3+ years of experience in sustainability consulting',
      'Knowledge of sustainability frameworks (GRI, SASB, CDP)',
      'Experience with carbon footprint calculation and reporting',
      'Strong communication and presentation skills',
      'Project management experience'
    ],
    salary: '$80,000 - $110,000',
    salaryRange: { min: 80000, max: 110000 },
    postedAt: '1 week ago',
    postedDate: '2023-06-10',
    tags: ['Sustainability', 'Consulting', 'Environmental', 'Carbon Footprint', 'ESG'],
    featured: false
  },
  {
    id: '11',
    title: 'Full Stack Developer',
    company: {
      id: '4',
      name: 'DataSphere',
      logo: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'AI and machine learning company transforming how businesses leverage data.',
      location: 'Seattle, WA',
      industry: 'Data Science & AI',
      employees: '101-200',
      website: 'https://www.datasphere.example',
      openPositions: 7
    },
    location: 'Seattle, WA',
    type: 'Full-Time',
    experienceLevel: 'mid',
    category: 'technology',
    description: 'DataSphere is looking for a Full Stack Developer to help build out our data analytics platform. You will work on both frontend and backend components of our web applications.',
    responsibilities: [
      'Develop and maintain web applications using modern JavaScript frameworks',
      'Design and implement RESTful APIs and database schemas',
      'Collaborate with product and design teams to implement new features',
      'Optimize applications for performance and scalability',
      'Write clean, maintainable, and well-tested code'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years of experience in full stack development',
      'Proficiency in JavaScript/TypeScript and frameworks (React, Angular, or Vue)',
      'Experience with backend technologies (Node.js, Python, or Java)',
      'Knowledge of database systems (SQL and NoSQL)',
      'Understanding of web development best practices and security'
    ],
    salary: '$100,000 - $140,000',
    salaryRange: { min: 100000, max: 140000 },
    postedAt: '3 days ago',
    postedDate: '2023-06-15',
    tags: ['Full Stack', 'JavaScript', 'React', 'Node.js', 'SQL'],
    featured: false
  },
  {
    id: '12',
    title: 'Graphic Designer',
    company: {
      id: '5',
      name: 'CreativeMinds',
      logo: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=250',
      description: 'Digital design agency known for award-winning user experiences and brand strategies.',
      location: 'New York, NY',
      industry: 'Design & Creative',
      employees: '51-100',
      website: 'https://www.creativeminds.example',
      openPositions: 4
    },
    location: 'New York, NY (Hybrid)',
    type: 'Full-Time',
    experienceLevel: 'entry',
    category: 'design',
    description: 'CreativeMinds is seeking a talented Graphic Designer to join our creative team. You will be responsible for creating visual concepts and designs for various digital and print media.',
    responsibilities: [
      'Create visual designs for digital and print media',
      'Develop brand identities and style guides',
      'Collaborate with clients and team members to understand requirements',
      'Prepare designs for production and implementation',
      'Stay current with design trends and techniques'
    ],
    requirements: [
      'Bachelor\'s degree in Graphic Design, Visual Arts, or related field',
      '1-2 years of professional design experience',
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
      'Strong portfolio demonstrating design skills and creativity',
      'Understanding of design principles and typography',
      'Excellent communication and time management skills'
    ],
    salary: '$60,000 - $80,000',
    salaryRange: { min: 60000, max: 80000 },
    postedAt: '5 days ago',
    postedDate: '2023-06-13',
    tags: ['Graphic Design', 'Adobe', 'Branding', 'Typography', 'Creative'],
    featured: false
  }
];