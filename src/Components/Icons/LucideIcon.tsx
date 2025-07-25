import * as Icons from "lucide-react";
import type { ComponentType } from "react";

type LucideIconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
};

const LucideIcon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}: LucideIconProps) => {
  const IconComponent = Icons[name] as ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;

  if (!IconComponent) {
    console.warn(`Lucide icon "${name}" not found.`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default LucideIcon;
