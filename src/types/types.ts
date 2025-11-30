import { LucideIcon } from "lucide-react";

export interface TechStackProps {
  tech: string;
}

export interface CTAButtonProps {
  href: string;
  text: string;
  icon: LucideIcon;
}

export interface SocialLinkProps {
  icon: LucideIcon;
  link: string;
}