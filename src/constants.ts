import { Experience, Education, Certification, Recognition } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'hci-1',
    period: 'Jun 2025 – Mar 2026',
    company: 'Health Careers International',
    role: 'Technical Project Coordinator',
    description: [
      'Lead project scheduling and cross-functional coordination for healthcare digital transformation.',
      'Managing end-to-end SDLC using Agile methodologies and Scrum framework.'
    ],
    icon: 'Stethoscope',
    isCurrent: true
  },
  {
    id: 'hci-2',
    period: 'Oct 2023 – May 2025',
    company: 'Health Careers International',
    role: 'Business Analyst',
    description: [
      'Created 30+ Power BI dashboards for operational insights and stakeholder reporting.',
      'Conducted competitor analysis and identified market gaps for technical solutions.',
      'Drafted SLAs, SOWs, and detailed technical documentation (BRD/FRS).'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'profinch',
    period: 'Feb 2022 – Apr 2023',
    company: 'Profinch Solutions',
    role: 'Consultant',
    description: 'Core Consultant for Oracle FLEXCUBE implementation. Managed banking modules including SWIFT, RTGS, and Core Banking migrations for financial institutions. Facilitated technical workshops and gap analysis sessions.',
    icon: 'Building2'
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'mba',
    degree: 'MBA in HR Finance',
    institution: 'Strategic Management & Financial Analysis'
  },
  {
    id: 'bcom',
    degree: 'Bachelor of Commerce (BCom)',
    institution: 'University of Calicut'
  },
  {
    id: 'ds',
    degree: 'Data Science Diploma',
    institution: 'Predictive Modeling and Data Visualization'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', name: 'BIDA®, FMVA®, CBCA® (CFI)' },
  { id: 'c2', name: 'SAP Financial Accounting' },
  { id: 'c3', name: 'Six Sigma Green Belt' }
];

export const RECOGNITIONS: Recognition[] = [
  {
    id: 'r1',
    title: 'Certificate of Achievement',
    date: 'Feb 2024',
    description: 'Recognized for Power Platform automation excellence.',
    icon: 'Award'
  },
  {
    id: 'r2',
    title: 'Certificate of Appreciation',
    date: 'Deployment Excellence',
    description: 'On-time delivery and stakeholder satisfaction for Clinsoft.',
    icon: 'Medal'
  }
];

export const TECHNICAL_ECOSYSTEM = [
  'Monday.com', 'Power Apps', 'Power BI', 'SharePoint', 'SQL', 'Oracle DB',
  'MySQL', 'SAP', 'Figma', 'Visio', 'Camunda BPMN', 'JIRA'
];

export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida/ADBb0uh-dg7qjBT7hzSqLv9mrNE6xA2ZL-_Z6r7P0owB466V-w90-gR-P8jLROhpqN4vH-zKs6mUbd-0UQusBAjJQlKRvPWGTQIAj5OO7nS19fxIY23cregLRVzwud_p79U4ghtJcSjOMnvzqWQ2sWTnXL5rVrTtQUmc0Yw2Dr_VIFhUiXsDniAkCNwmqbyUHDPeWiSaIqX5TzU-u7TaYhDNR_PwgHNLlG8711y1u6FyXb0K0dkueNtkudlcwswvEPbiIC04qIhvRpYfHyM";
