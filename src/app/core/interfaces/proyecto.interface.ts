export interface Proyecto {
  title: string;
  description: string;
  publicUrl?: string;
  adminUrl?: string;
  tech: {
    name: string;
    logo: string;
  }[];
}
