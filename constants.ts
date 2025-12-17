import { Doctor } from './types';
import { Clock, FileText, UserX, AlertCircle, RefreshCw, CheckCircle, Database, Smartphone } from 'lucide-react';

export const DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', available: true },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'Pediatrics', available: true },
  { id: '3', name: 'Dr. Emily Davis', specialty: 'General Medicine', available: true },
  { id: '4', name: 'Dr. Robert Wilson', specialty: 'Orthopedics', available: false },
];

export const AS_IS_STEPS = [
  { title: 'Patient Visit', desc: 'Patient arrives physically at the hospital.' },
  { title: 'Data Collection', desc: 'Receptionist manually writes details in a register.' },
  { title: 'Paper Forms', desc: 'Patient fills out a physical form.' },
  { title: 'Availability Check', desc: 'Receptionist calls PA to check doctor status.' },
  { title: 'Manual Finance', desc: 'Cash payment calculation and collection.' },
  { title: 'Token Issuance', desc: 'Handwritten slip given to patient.' },
];

export const PAIN_POINTS = [
  {
    title: 'Inefficiencies',
    icon: Clock,
    points: ['Duplicate data entry', 'Excessive paperwork', 'Slow retrieval of records']
  },
  {
    title: 'Bottlenecks',
    icon: UserX,
    points: ['Reception overload during peak hours', 'Delays in finance clearance', 'Doctor availability confusion']
  },
  {
    title: 'Risks',
    icon: AlertCircle,
    points: ['Data loss (paper records)', 'Cash handling errors', 'Patient dissatisfaction & walk-outs']
  }
];

export const INNOVATIONS = [
  {
    title: 'Relevance',
    icon: Database,
    desc: 'Aligns with modern digital healthcare standards, ensuring data integrity and accessibility.'
  },
  {
    title: 'Innovation',
    icon: Smartphone,
    desc: 'Self-service booking, real-time availability sync, and automated digital challan generation.'
  },
  {
    title: 'Feasibility',
    icon: CheckCircle,
    desc: 'Low hardware cost, scalable cloud infrastructure, and minimal staff training required.'
  }
];