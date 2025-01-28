// data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Bathroom Renovation',
      description: 'A complete overhaul of a residential bathroom with modern fixtures.',
      image: '/images/project/1.webp',
      link: '/projects/bathroom-renovation',
    },
    {
      id: 2,
      title: 'Kitchen Plumbing Installation',
      description: 'Installed new plumbing systems in a contemporary kitchen setup.',
      image: '/images/project/2.webp',
      link: '/projects/kitchen-plumbing',
    },
    {
      id: 3,
      title: 'Commercial Office Restroom Upgrade',
      description: 'Upgraded the plumbing in a commercial office building’s restrooms to improve efficiency and compliance.',
      image: '/images/project/3.webp',
      link: '/projects/commercial-office-restroom',
    },
    {
      id: 4,
      title: 'Outdoor Sprinkler System Installation',
      description: 'Designed and installed an efficient outdoor sprinkler system for a large residential garden.',
      image: '/images/project/4.webp',
      link: '/projects/outdoor-sprinkler-system',
    },
    {
      id: 5,
      title: 'Water Heater Replacement',
      description: 'Replaced an outdated water heater with a new energy-efficient model in a family home.',
      image: '/images/project/5.webp',
      link: '/projects/water-heater-replacement',
    },
    {
      id: 6,
      title: 'Sewer Line Repair',
      description: 'Conducted a trenchless sewer line repair to fix leaks without disrupting the landscaping.',
      image: '/images/project/6.webp',
      link: '/projects/sewer-line-repair',
    },
    {
      id: 7,
      title: 'Gas Line Installation',
      description: 'Installed new gas lines for a residential kitchen, ensuring safety and compliance with local codes.',
      image: '/images/project/7.webp',
      link: '/projects/gas-line-installation',
    },
    {
      id: 8,
      title: 'Radiant Floor Heating System',
      description: 'Implemented a radiant floor heating system in a newly constructed home for enhanced comfort.',
      image: '/images/project/8.webp',
      link: '/projects/radiant-floor-heating',
    },
    {
      id: 9,
      title: 'Eco-Friendly Greywater System',
      description: 'Installed a greywater recycling system to promote water conservation in a sustainable home.',
      image: '/images/project/9.webp',
      link: '/projects/greywater-system',
    },
  ];
  
  