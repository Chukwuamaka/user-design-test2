import { StaticImageData } from "next/image";
import team_member_1 from './public/team_member_1.webp';
import team_member_2 from './public/team_member_2.webp';
import team_member_3 from './public/team_member_3.webp';

export interface ReportLabelType {
  label: 'all' | 'started' | 'approved' | 'finished';
  value: number;
}

interface TeamMember {
  name: string;
  image: StaticImageData | string;
}

export interface Project {
  name: string;
  team: string;
  deadline: string;
  team_members: TeamMember[];
  progress: string;
}

export const labels: ReportLabelType[] = [
  { label: 'all', value: 50 },
  { label: 'started', value: 20 },
  { label: 'approved', value: 12 },
  { label: 'finished', value: 17 },
]

export const projects: Project[] = [
  { 
    name: 'App development', team: 'Marketing team', deadline: '1 week', progress: '34%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Web Instructors', team: 'Marketing team', deadline: '4 weeks', progress: '14%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
    ] 
  },
  { 
    name: 'Web3 Managers', team: 'Marketing team', deadline: '5 days', progress: '28%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Data Analysis', team: 'Marketing team', deadline: '2 weeks', progress: '22%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Paystack', team: 'Big data dev', deadline: '14 weeks', progress: '55%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Data managers', team: 'Overlook', deadline: '1.5 weeks', progress: '29%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Cinematography', team: 'Main stream', deadline: '2 days', progress: '4%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
  { 
    name: 'Customer relations', team: 'Feedback', deadline: '3 weeks', progress: '32%',
    team_members: [
      { name: 'Team member 1', image: team_member_1 },
      { name: 'Team member 2', image: team_member_2 },
      { name: 'Team member 3', image: team_member_3 },
    ] 
  },
]