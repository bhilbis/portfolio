import { Code2, Filter, Monitor, Palette, Rocket, Server, Smartphone } from "lucide-react";

// ===================== Project Data =====================
export const allProjects = [
  {
    id: 1,
    title: "Website SMKN 1 Purwosari",
    subtitle: "School Website",
    description: "A modern school website featuring an intuitive dashboard designed to provide a clear overview of school data and activities with beautiful, easy-to-understand data visualizations.",
    tech: ["NextJS", "TypeScript", "TailwindCSS", "Motion"],
    category: "web",
    primaryTech: "nextjs",
    color: "from-cyan-400 to-blue-600",
    accent: "cyan",
    demoUrl: "https://www.smkn1purwosari.sch.id/public/",
    icon: [Monitor]
  },
  {
    id: 2,
    title: "Ticketing App",
    subtitle: "Ticketing System",
    description: "A comprehensive ticketing system with an advanced dashboard that provides valuable insights through stunning and easy-to-understand data visualizations.",
    tech: ["NextJS", "Laravel", "TailwindCSS", "Motion", "MySQL"],
    category: "web",
    primaryTech: ["nextjs", "laravel"],
    color: "from-cyan-400 to-blue-600",
    accent: "cyan",
    githubUrl: "https://github.com/bhilbis/ukk-ticketing-app",
    icon: [Monitor, Server]
  },
  {
    id: 3,
    title: "Peripheral",
    subtitle: "Peripheral E-commerce",
    description: "An e-commerce platform designed for users to shop for computer peripherals and accessories with a seamless and intuitive mobile experience.",
    tech: ["Flutter", "dart", "Firebase"],
    category: "mobile",
    primaryTech: "flutter",
    color: "from-emerald-400 to-teal-600",
    accent: "emerald",
    githubUrl: "https://github.com/bhilbis/flutter-peripheral",
    icon: [Smartphone]
  },
  // {
  //   id: 4,
  //   title: "Shopping Companion",
  //   subtitle: "AR Shopping App",
  //   description: "Mobile shopping app dengan AR product preview, barcode scanning, dan price comparison features.",
  //   tech: ["Flutter", "Dart", "Firebase", "ARCore"],
  //   category: "mobile",
  //   primaryTech: "flutter",
  //   color: "from-blue-400 to-indigo-600",
  //   accent: "blue",
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   metrics: { users: "8K+", performance: "97.8%", rating: "4.7" },
  //   icon: [Smartphone]
  // },
];

export const techStacks = [
  { id: 'all', label: 'All Tech', color: 'from-gray-400 to-gray-600' },
  { id: 'react', label: 'React/RN', color: 'from-cyan-400 to-blue-500' },
  { id: 'nextjs', label: 'Next.js', color: 'from-purple-400 to-pink-500' },
  { id: 'laravel', label: 'Laravel', color: 'from-red-400 to-orange-500' },
  { id: 'flutter', label: 'Flutter', color: 'from-blue-400 to-indigo-500' }
];

export const categories = [
  { id: 'all', label: 'All', icon: Filter },
  { id: 'web', label: 'Web', icon: Monitor },
  { id: 'mobile', label: 'Mobile', icon: Smartphone }
];

// ===================== About Data =====================
export const interests = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and elegant code' },
  { icon: Palette, title: 'Design Systems', description: 'Creating consistent user experiences' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and efficiency' },
];

export const experience = [
  {
    year: 'Until Now',
    title: 'Full Stack Developer',
    description: 'Built multiple client projects technologies.'
  },
  {
    year: 'July-Dec 2024',
    title: 'Intern Frontend Developer at 3PM Solutions',
    description: 'Specialized in creating responsive and accessible user interfaces.'
  },
  {
    year: '2022-2025',
    title: 'Started Coding Journey In SMK N 1 Purwosari',
    description: 'Began learning web development and fell in love with creating digital solutions.'
  }
]