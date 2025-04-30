import { Job } from '../types';

// Simple keyword extraction for natural language processing
export const extractSearchParams = (query: string): {
  keywords: string[];
  location?: string;
  type?: string;
  remote?: boolean;
  experience?: string;
} => {
  const keywords: string[] = [];
  const params: any = {};
  
  // Convert to lowercase for consistent matching
  const normalizedQuery = query.toLowerCase();
  
  // Check for remote work
  if (normalizedQuery.includes('remote')) {
    params.remote = true;
    keywords.push('remote');
  }
  
  // Check for locations
  const locationMatches = normalizedQuery.match(/in ([a-z\s]+)/i);
  if (locationMatches) {
    params.location = locationMatches[1].trim();
  }
  
  // Check for job types
  const jobTypes = ['full-time', 'part-time', 'contract', 'freelance', 'internship'];
  jobTypes.forEach(type => {
    if (normalizedQuery.includes(type)) {
      params.type = type;
      keywords.push(type);
    }
  });
  
  // Check for experience level
  const experienceLevels = ['senior', 'junior', 'lead', 'entry'];
  experienceLevels.forEach(level => {
    if (normalizedQuery.includes(level)) {
      params.experience = level;
      keywords.push(level);
    }
  });
  
  // Extract remaining keywords (technologies, roles, etc.)
  const commonWords = ['in', 'at', 'for', 'the', 'a', 'an', 'and', 'or', 'but'];
  normalizedQuery
    .split(' ')
    .filter(word => 
      !commonWords.includes(word) && 
      !keywords.includes(word) && 
      word.length > 2
    )
    .forEach(word => keywords.push(word));
  
  return { ...params, keywords };
};

// Calculate job relevance score based on user profile and job details
export const calculateJobRelevance = (
  job: Job,
  userSkills: string[],
  userExperience: string[],
  appliedJobs: string[],
  savedJobs: string[]
): number => {
  let score = 0;
  
  // Match skills (highest weight)
  const jobSkills = [...job.tags, job.category || ''].map(s => s.toLowerCase());
  userSkills.forEach(skill => {
    if (jobSkills.some(s => s.includes(skill.toLowerCase()))) {
      score += 3;
    }
  });
  
  // Match experience level
  if (userExperience.includes(job.experienceLevel || '')) {
    score += 2;
  }
  
  // Boost score for jobs from companies user has interacted with
  if (appliedJobs.some(id => {
    const appliedJob = mockJobs.find(j => j.id === id);
    return appliedJob?.company.id === job.company.id;
  })) {
    score += 1;
  }
  
  // Slight boost for jobs in companies where user saved positions
  if (savedJobs.some(id => {
    const savedJob = mockJobs.find(j => j.id === id);
    return savedJob?.company.id === job.company.id;
  })) {
    score += 0.5;
  }
  
  return score;
};

// Generate AI-powered company insights
export const generateCompanyInsight = (company: Company): {
  summary: string;
  whyJoinUs: string[];
  culture: string;
} => {
  // This would be replaced with actual AI API calls later
  const benefits = company.benefits || [];
  const employeeCount = parseInt(company.employees.split('-')[0]) || 0;
  
  const whyJoinUs = [
    `Join a ${employeeCount > 1000 ? 'leading' : 'growing'} ${company.industry} company`,
    `Work with cutting-edge technology and innovative solutions`,
    ...benefits.slice(0, 3),
  ];
  
  const culture = `At ${company.name}, we foster a culture of innovation, collaboration, and continuous learning. Our team is passionate about ${company.industry.toLowerCase()} and committed to delivering exceptional results.`;
  
  const summary = `${company.name} is a ${
    employeeCount > 1000 ? 'well-established' : 'dynamic'
  } ${company.industry} company based in ${company.location}. ${
    company.description
  } With ${company.openPositions} open positions, we're rapidly growing and looking for talented individuals to join our team.`;
  
  return {
    summary,
    whyJoinUs,
    culture,
  };
};

// Generate cover letter template
export const generateCoverLetter = (
  job: Job,
  userProfile: {
    name: string;
    experience: string[];
    skills: string[];
    summary: string;
  }
): string => {
  const relevantSkills = job.tags
    .filter(tag => 
      userProfile.skills.some(skill => 
        skill.toLowerCase().includes(tag.toLowerCase())
      )
    )
    .slice(0, 3);
  
  return `Dear ${job.company.name} Hiring Team,

I am writing to express my strong interest in the ${job.title} position at ${job.company.name}. With my background in ${userProfile.experience.join(', ')} and expertise in ${relevantSkills.join(', ')}, I believe I would be a valuable addition to your team.

${userProfile.summary}

What particularly excites me about this opportunity is ${job.description.split('.')[0].toLowerCase()}. ${job.company.name}'s focus on ${job.company.industry} aligns perfectly with my professional goals and experience.

I look forward to discussing how my skills and experience can contribute to ${job.company.name}'s continued success.

Best regards,
${userProfile.name}`;
};