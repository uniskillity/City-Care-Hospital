export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
}

export interface AppointmentData {
  patientName: string;
  contactNumber: string;
  doctorId: string;
  reason: string;
  date: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon?: any;
}

export enum ProcessType {
  AS_IS = 'AS_IS',
  TO_BE_MANUAL = 'TO_BE_MANUAL',
  TO_BE_AUTO = 'TO_BE_AUTO'
}