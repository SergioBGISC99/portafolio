export interface Curso {
  title: string;
  date: string;
  tech: { name: string; logo: string }[];
  certificateUrl?: string;
}
