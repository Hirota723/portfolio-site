import { Card } from "@/components/ui/card";
import Skill from "@/types/skill";

const ToolSkillCard = ({ icon: Icon, title }: Skill) => {
  return (
    <Card className="p-4 shadow-md flex items-center space-x-4">
      <Icon className="w-8 h-8" />
      <h4 className="text-lg font-medium">{title}</h4>
    </Card>
  );
};

export default ToolSkillCard;
