import type { Project, Skill, Experience, Education, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Oki Ramadhan',
  title: 'Software Developer',
  subtitle: 'Software Developer | React.js, Flutter, React Native |',
  email: 'okiramadhan05@gmail.com',
  phone: '+62 895 352 458 582',
  location: 'Kota Bandung, Indonesia',
  bio: 'A dedicated Software Developer with a passion for building beautiful and functional web and mobile applications. Currently studying at Semester 6 while working as a part-time contractor specializing in React.js, Flutter, React Native, and TypeScript.',
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
    skills: ['React.js', 'React Native', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Mobile',
    skills: ['Flutter', 'React Native', 'Dart', 'Firebase'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: 'Current Company',
    position: 'Software Developer (Part-Time)',
    duration: '1 year contract',
    startDate: 'September 1, 2025',
    endDate: 'September 1, 2026',
    description: [
      'Develop responsive web applications using React.js and TypeScript',
      'Build mobile applications with Flutter and React Native',
      'Collaborate with team members using Git and modern development practices',
      'Implement RESTful APIs and integrate with backend services',
    ],
    technologies: ['React.js', 'React Native', 'Flutter', 'TypeScript', 'Firebase'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    school: 'Universitas Kebangsaan Republik Indonesia',
    degree: 'Degree',
    field: 'Computer Science',
    year: 'Semester 6 (Currently Studying)',
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
    demoLink: 'https://play.google.com/store/apps/details?id=com.digitak.siabsen&hl=id',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Portal DJKA - Railway Ministry Management System',
    description: 'Web-based portal for Direktorat Jenderal Kereta Api (DJKA), Ministry of Transportation. A comprehensive platform for managing railway operations, scheduling, and administrative tasks. Built with React.js to deliver a responsive, efficient, and user-friendly interface for national railway data management.',
    image: '/images/djka.png',
    technologies: ['React.js', 'TypeScript', 'Web Development', 'Government IT'],
    demoLink: 'https://portal.djka.kemenhub.go.id',
    githubLink: '#',
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
