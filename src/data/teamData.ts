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
    name: 'Dr. Manish Kumar',
    role: 'Co-Founder & Director',
    specialization: 'Cybersecurity Architecture, Cryptography',
    experience: '15+ years',
    bio: 'Associate Professor, Department of Mathematics, BITS Pilani Hyderabad Campus',
    quote: 'Security is not just about technology; it\'s about understanding the threat landscape and staying ahead.',
    initials: 'MK',
    color: 'linear-gradient(135deg, #00d9ff, #0066ff)'
  },
  /*{
    id: 2,
    name: 'Co-Founder 2',
    role: 'CTO & Co-Founder',
    specialization: 'IoT & Cloud Security',
    experience: '12+ years',
    bio: 'Expert in IoT security and cloud infrastructure. Led security initiatives for Fortune 500 companies.',
    quote: 'Innovation in security means thinking beyond traditional boundaries and embracing emerging technologies.',
    initials: 'PM',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  }*/
];

export const teamMembers: TeamMember[] = [
  {
    id: 3,
    name: 'Srijen Raja',
    role: 'Web Developer',
    specialization: 'Front-End and App Development',
    experience: '8 years',
    quote: 'Finding zero-days before the attackers do.',
    initials: 'SR',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 4,
    name: 'Anand Venkataraman',
    role: 'Web Developer',
    specialization: 'Front-End Development',
    experience: '8 years',
    quote: 'Defense is best understood by simulating attacks.',
    initials: 'AV',
    color: 'linear-gradient(135deg, #0066ff, #00d9ff)'
  },
  {
    id: 5,
    name: 'Rushil Mohan',
    role: 'Web Developer',
    specialization: 'Cloud Security and Front-End Development',
    experience: '8 years',
    quote: 'Building secure systems that scale.',
    initials: 'RM',
    color: 'linear-gradient(135deg, #7c3aed, #0066ff)'
  },
  {
    id: 6,
    name: 'Varun V',
    role: 'Cybersecurity Intern',
    specialization: 'MSc Economics',
    experience: '7 years',
    quote: 'Security in every step of development.',
    initials: 'VV',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 7,
    name: 'Tushar Bhide',
    role: 'IoT Security Intern',
    specialization: 'MSc. Economics and B.E. Computer Science',
    experience: '6 years',
    quote: 'Securing the connected world, one device at a time.',
    initials: 'TB',
    color: 'linear-gradient(135deg, #0066ff, #7c3aed)'
  },
  {
    id: 8,
    name: 'Ishaan Singh',
    role: 'Embedded Systems Intern',
    specialization: 'MSc. Physics and B.E. Mathematics and Computing',
    experience: '6 years',
    quote: 'Creating security solutions users actually want to use.',
    initials: 'IS',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  },
  {
    id: 9,
    name: 'Havish Grandhi',
    role: 'Security Analysis Intern',
    specialization: 'MSc. Mathematics',
    experience: '6 years',
    quote: 'Data tells the story of every attack.',
    initials: 'HG',
    color: 'linear-gradient(135deg, #00d9ff, #0066ff)'
   },
//   {
//     id: 10,
//     name: 'Prerna Desai',
//     role: 'Compliance Specialist',
//     specialization: 'Regulatory Compliance',
//     experience: '8 years',
//     quote: 'Compliance is the foundation of trust.',
//     initials: 'PD',
//     color: 'linear-gradient(135deg, #0066ff, #00d9ff)'
//   }
 ];
