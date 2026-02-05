interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionTitle = ({ subtitle, title, description, centered = false }: SectionTitleProps) => {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      {subtitle && <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-lg text-gray-600 max-w-2xl">{description}</p>}
    </div>
  );
};

export default SectionTitle;