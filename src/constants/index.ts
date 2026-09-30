import type { Project, Skill, Experience, Education, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Oki Ramadhan',
  title: 'Frontend Developer',
  subtitle: 'Frontend Developer | React.js, Next.js, Flutter, React Native, TypeScript',
  email: 'okiramadhan05@gmail.com',
  phone: '+62 877-9218-4448',
  location: 'Bandung, West Java, Indonesia',
  bio: 'A passionate Frontend & Mobile Developer specializing in React.js, Next.js, Flutter, React Native, and TypeScript. Experienced in building enterprise systems, mobile applications, and high-performance digital platforms.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-oki-r-a3a3272a9/',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/okiramadhan_',
    icon: 'instagram',
  },
  {
    platform: 'Email',
    url: 'mailto:okiramadhan05@gmail.com',
    icon: 'email',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Laravel'],
  },
  {
    category: 'Mobile',
    skills: ['Flutter', 'React Native', 'Dart', 'Android Development', 'iOS Development', 'Firebase'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'RESTful API', 'Leaflet', 'ApexCharts'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: 'PT. Metanouva Informatika (Digitak)',
    position: 'Frontend Developer (Full-time)',
    duration: 'Present',
    startDate: 'September 2026',
    endDate: 'Present',
    description: [
      'Architect and build high-performance web applications and mobile solutions',
      'Develop modern frontend interfaces with Next.js, React.js, and TypeScript',
      'Implement complex multi-role systems, state management, and real-time features',
      'Collaborate closely with cross-functional teams to deliver scalable enterprise products',
    ],
    technologies: ['Next.js', 'React.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Laravel'],
  },
  {
    id: 2,
    company: 'PT. Metanouva Informatika (Digitak)',
    position: 'Frontend Developer (Part-time)',
    duration: '1 yr',
    startDate: 'September 2025',
    endDate: 'August 2026',
    description: [
      'Developing web and mobile applications for government sector clients',
      'Mobile App: Built Pasar Jaya attendance system using Flutter (Android & iOS)',
      'Web App: Created Portal DJKA frontend using React.js with responsive design',
      'Integrated REST APIs and implemented state management (Provider, Redux)',
      'Collaborated with cross-functional teams using Agile methodology',
      'Conducted testing and optimization for improved performance',
    ],
    technologies: ['Flutter', 'React.js', 'TypeScript', 'Redux', 'REST API', 'Firebase'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    school: 'Universitas Kebangsaan Republik Indonesia',
    degree: 'Degree',
    field: 'Computer Science',
    year: 'Semester 7 (Currently Studying)',
    description: 'Focusing on software development',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'HRIS Pasar Jaya - Employee Attendance System',
    description: 'Mobile application for employee attendance management developed for BUMD Pasar Jaya Jakarta. Features real-time attendance tracking, employee data management, absence reporting, and seamless synchronization across multiple devices. Built with Flutter for cross-platform compatibility (iOS & Android).',
    image: '/images/hris-pasar-jaya.png',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
    demoLink: 'https://play.google.com/store/apps/details?id=com.digitak.siabsen&pcampaignid=web_share',
  },
  {
    id: 2,
    title: 'Portal DJKA - Railway Ministry Management System',
    description: 'Web-based portal for Direktorat Jenderal Kereta Api (DJKA), Ministry of Transportation. A comprehensive platform for managing railway operations, scheduling, and administrative tasks. Built with React.js to deliver a responsive, efficient, and user-friendly interface for national railway data management.',
    image: '/images/djka.png',
    technologies: ['React.js', 'TypeScript', 'Web Development', 'Government IT'],
    demoLink: 'https://portal.djka.kemenhub.go.id/',
  },
  {
    id: 3,
    title: 'BumDesMartNukita - Village MSME Digital Marketplace',
    description: 'Enterprise full-stack marketplace platform empowering local MSMEs in Desa Lengkong, Bandung. Features a 5-role RBAC architecture (Super Admin, BUMDes, Seller, Courier, Customer), live courier tracking with Leaflet, real-time analytics with ApexCharts, automated Midtrans payment gateway, WhatsApp & FCM notifications, and high-performance background job processing.',
    image: '/images/bumdesmartnukita.png',
    technologies: ['Next.js (App Router)', 'Laravel 12', 'TypeScript', 'Tailwind CSS v4', 'Midtrans', 'Leaflet', 'Redis', 'MySQL'],
    demoLink: 'https://bumdesmartnukita.com/',
  },
];

export const NAVIGATION_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
