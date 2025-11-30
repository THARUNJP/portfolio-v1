// --------------------
// Memoized Components
// --------------------

import { FC, memo } from "react";
import { CTAButtonProps, SocialLinkProps, TechStackProps } from "../types/types";
import { Github, Linkedin, Sparkles } from "lucide-react";

// --------------------
// STATUS BADGE
// --------------------

export const StatusBadge: FC = memo(() => (
  <div className="inline-block" data-aos="zoom-in" data-aos-delay="300">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-700"></div>

      <div className="relative px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
        <span className="text-sm font-medium text-gray-700 flex items-center">
          <Sparkles className="w-4 h-4 mr-1 text-indigo-500" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

// --------------------
// MAIN TITLE
// --------------------

export const MainTitle: FC = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="500">
    <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
      <span className="relative inline-block">
        <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Frontend
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

// --------------------
// TECH STACK PILL
// --------------------

export const TechStack: FC<TechStackProps> = memo(({ tech }) => (
  <div className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
    {tech}
  </div>
));

// --------------------
// CTA BUTTON
// --------------------

export const CTAButton: FC<CTAButtonProps> = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl opacity-50 blur-md group-hover:opacity-80 transition-all duration-500"></div>

      <div className="relative h-11 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center overflow-hidden">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-all duration-300">
          {text}
          <Icon
            className={`w-4 h-4 ${
              text === "Contact Me"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300`}
          />
        </span>
      </div>
    </button>
  </a>
));

// --------------------
// SOCIAL LINK BUTTON
// --------------------

export const SocialLink: FC<SocialLinkProps> = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition"></div>

      <div className="relative rounded-xl bg-white border border-gray-200 shadow-sm p-2 flex items-center justify-center group-hover:border-gray-300 transition-all">
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
      </div>
    </button>
  </a>
));

