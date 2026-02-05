interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 text-5xl text-blue-900">{icon}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;