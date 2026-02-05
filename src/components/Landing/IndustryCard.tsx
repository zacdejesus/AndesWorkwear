interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
}

const IndustryCard = ({ icon, title }: IndustryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-center text-gray-900">{title}</h3>
    </div>
  );
};

export default IndustryCard;