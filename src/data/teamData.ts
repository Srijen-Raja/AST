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
  {
    id: 2,
    name: 'Mrs. Deepika Kesarwani',
    role: 'Director & Co-Founder',
    specialization: 'M.Com in Commerce',
    experience: '6+ years',
    bio: 'GST Filing Expert.',
    quote: 'Innovation in security means thinking beyond traditional boundaries and embracing emerging technologies.',
    initials: 'DK',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 6,
    name: 'Varun V',
    role: 'Cybersecurity Intern',
    specialization: 'MSc Economics',
    initials: 'VV',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 3,
    name: 'Srijen Raja',
    role: 'Intern',
    specialization: 'Front-End and App Development',
    initials: 'SR',
    color: 'linear-gradient(135deg, #00d9ff, #7c3aed)'
  },
  {
    id: 4,
    name: 'Anand Venkataraman',
    role: 'Intern',
    specialization: 'Front-End Development',
    initials: 'AV',
    color: 'linear-gradient(135deg, #0066ff, #00d9ff)'
  },
  {
    id: 5,
    name: 'Rushil Mohan',
    role: 'Intern',
    specialization: 'Cloud Security and Front-End Development',
    initials: 'RM',
    color: 'linear-gradient(135deg, #7c3aed, #0066ff)'
  },
  
  {
    id: 7,
    name: 'Tushar Bhide',
    role: 'IoT Security Intern',
    specialization: 'MSc. Economics and B.E. Computer Science',
    initials: 'TB',
    color: 'linear-gradient(135deg, #0066ff, #7c3aed)'
  },
  {
    id: 8,
    name: 'Ishaan Singh',
    role: 'Embedded Systems Intern',
    specialization: 'MSc. Physics and B.E. Mathematics and Computing',
    initials: 'IS',
    color: 'linear-gradient(135deg, #7c3aed, #00d9ff)'
  },
  {
    id: 9,
    name: 'Havish Grandhi',
    role: 'Security Analysis Intern',
    specialization: 'MSc. Mathematics',
    initials: 'HG',
    color: 'linear-gradient(135deg, #00d9ff, #0066ff)'
   }
 ];
