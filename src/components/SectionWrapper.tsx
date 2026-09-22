import { ReactNode } from "react";

interface Props {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  number,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-block text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1 mb-4 tracking-wider">
            SECTION {number}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-500 max-w-3xl">{subtitle}</p>
          )}
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}
