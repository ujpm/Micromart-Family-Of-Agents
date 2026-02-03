import { Microscope, Bot, Scan, Dna } from 'lucide-react';

export const agents = [
  {
    id: 'pf',
    name: 'MicroSmart PF',
    role: 'Senior Parasitology Agent',
    status: 'active',
    icon: Microscope,
    shortDesc: 'The malaria workhorse. Detects P. falciparum in thin smears.',
    bio: 'Joined the team to relieve human techs from the repetitive strain of counting RBCs. Never gets tired, never complains about eye strain.',
    technical: {
      architecture: 'YOLOv8 + Custom CNN',
      dataset: '5,000+ Annotated Thin Smears',
      precision: '94.5% (Stage Identification)',
      stack: 'PyTorch, FastAPI, OpenCV'
    },
    link: 'https://github.com/ujpm/Microsmart_PF'
  },
  {
    id: 'heme',
    name: 'MicroSmart Heme',
    role: 'Hematology Consultant',
    status: 'beta',
    icon: Bot,
    shortDesc: 'Telegram-based assistant for morphology and report interpretation.',
    bio: 'The "Second Opinion" always on call. Analyzing CBC patterns and flagging inconsistencies in manual differentials.',
    technical: {
      architecture: 'LLM (RAG Pipeline)',
      knowledgeBase: 'WHO Hematology Guidelines',
      interface: 'Telegram Bot API',
      stack: 'LangChain, Vector DB, Python'
    },
    link: 'https://github.com/ujpm/Microsmart'
  },
  {
    id: 'op',
    name: 'MicroSmart O&P',
    role: 'Enteric Pathogen Trainee',
    status: 'concept',
    icon: Dna,
    shortDesc: 'Specialist in identifying intestinal parasites and ova.',
    bio: 'Currently in training. Learning to distinguish between artifact and actual ova in complex backgrounds. A messy job, but someone has to do it.',
    technical: {
      architecture: 'Mask R-CNN (Planned)',
      challenge: 'High background noise/debris differentiation',
      status: 'Data Collection Phase',
      stack: 'TensorFlow'
    },
    link: '#'
  },
  {
    id: 'cyto',
    name: 'MicroSmart Cyto',
    role: 'Cytopathology screener',
    status: 'concept',
    icon: Scan,
    shortDesc: 'Cervical cancer screening assistant (Pap Smears).',
    bio: 'Future recruit dedicated to the Bethesda System. Will focus on flagging HSIL/LSIL regions for human review.',
    technical: {
      architecture: 'Vision Transformer (ViT)',
      focus: 'Cellular abnormality detection',
      status: 'Research Phase',
      stack: 'Keras / PyTorch'
    },
    link: '#'
  }
];