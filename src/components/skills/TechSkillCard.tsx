import { Card, CardContent } from "@/components/ui/card";
import Skill from "@/types/skill";

const TechSkillCard = ({ icon: Icon, title, description }: Skill) => (
  <Card className="p-4 shadow-lg">
    <CardContent className="flex flex-col items-center text-center space-y-4">
      <Icon className="w-10 h-10" />
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
    </CardContent>
  </Card>
);

export default TechSkillCard;
