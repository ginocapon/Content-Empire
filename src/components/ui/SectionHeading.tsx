interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-viola/10 text-viola">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-gray-300" : "text-grigio-text"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
