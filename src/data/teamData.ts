export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  quote: string;
  initials: string;
  color: string;
}

export interface CoFounder extends TeamMember {
  bio: string;
}

export const coFounders: CoFounder[] = [
  {
    id: 1,
    name: 'Dr. Rahul Sharma',
    role: 'CEO & Co-Founder',
    specialization: 'Cybersecurity Architecture',
    experience: '15+ years',
    bio: 'PhD in Computer Security with extensive experience in enterprise security solutions and threat intelligence.',
    quote: 'Security is not just about technology; it\'s about understanding the threat landscape and staying ahead.',
    initials: 'RS',
    color: 'linear-gradient(135deg, #00d9ff, #0066ff)'
  },
  {
    id: 2,
    name: 'Priya Menon',
    role: 'CTO & Co-Founder',
    specialization: 'IoT & Cloud Security',
    experience: '12+ years',
    bio: 'Expert in IoT security and cloud infrastructure. Led security initiatives for Fortune 500 companies.',
    quote: 'Innovation in security means thinking beyond traditional boundaries and embracing emerging technologies.',
    initials: 'PM',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 3,
    name: 'Aditya Patel',
    role: 'Security Researcher',
    specialization: 'Vulnerability Research',
    experience: '7 years',
    quote: 'Finding zero-days before the attackers do.',
    initials: 'AP',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Senior Security Engineer',
    specialization: 'Penetration Testing',
    experience: '8 years',
    quote: 'Defense is best understood by simulating attacks.',
    initials: 'NG',
    color: 'linear-gradient(135deg, #0066ff, #00d9ff)'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Infrastructure Architect',
    specialization: 'Cloud Security',
    experience: '9 years',
    quote: 'Building secure systems that scale.',
    initials: 'VS',
    color: 'linear-gradient(135deg, #7c3aed, #0066ff)'
  },
  {
    id: 6,
    name: 'Anjali Verma',
    role: 'DevSecOps Engineer',
    specialization: 'CI/CD Security',
    experience: '6 years',
    quote: 'Security in every step of development.',
    initials: 'AV',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 7,
    name: 'Arjun Kumar',
    role: 'IoT Security Specialist',
    specialization: 'Embedded Systems',
    experience: '7 years',
    quote: 'Securing the connected world, one device at a time.',
    initials: 'AK',
    color: 'linear-gradient(135deg, #0066ff, #7c3aed)'
  },
  {
    id: 8,
    name: 'Divya Nair',
    role: 'Product Manager',
    specialization: 'Security Solutions',
    experience: '6 years',
    quote: 'Creating security solutions users actually want to use.',
    initials: 'DN',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  },
  {
    id: 9,
    name: 'Rohan Sharma',
    role: 'Security Analyst',
    specialization: 'Threat Intelligence',
    experience: '5 years',
    quote: 'Data tells the story of every attack.',
    initials: 'RS',
    color: 'linear-gradient(135deg, #00d9ff, #0066ff)'
  },
  {
    id: 10,
    name: 'Prerna Desai',
    role: 'Compliance Specialist',
    specialization: 'Regulatory Compliance',
    experience: '8 years',
    quote: 'Compliance is the foundation of trust.',
    initials: 'PD',
    color: 'linear-gradient(135deg, #0066ff, #00d9ff)'
  }
];
