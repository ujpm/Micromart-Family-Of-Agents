import { Microscope, MessageSquare, Biohazard } from 'lucide-react';

export const agents = [
  {
    id: 'pf',
    name: 'MicroSmart PF',
    role: 'Malaria Diagnostics Expert',
    status: 'active',
    description: 'Specializes in detecting Plasmodium falciparum in thin blood smears. High sensitivity computer vision.',
    icon: Microscope,
    link: 'https://github.com/your-username/microsmart-pf',
    linkText: 'View Project',
  },
  {
    id: 'heme',
    name: 'MicroSmart Heme',
    role: 'Hematology Consultant',
    status: 'beta',
    description: 'A Telegram-based bot for analyzing CBC reports and morphology.',
    icon: MessageSquare,
    link: 'https://github.com/your-username/microsmart-heme',
    linkText: 'View Project',
  },
  {
    id: 'stool',
    name: 'MicroSmart Stool',
    role: 'Parasitology Trainee',
    status: 'concept',
    description: 'Currently learning to identify intestinal parasites.',
    icon: Biohazard,
    link: '#',
    linkText: 'Roadmap',
  }
];
