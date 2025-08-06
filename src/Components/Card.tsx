import { X, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import Button from "./Button";

interface Data {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  subTitle?: string;
  description: string;
  color: string;
  list?: string[];
  listIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  button?: string;
  annotation?: string;
}

interface CardProps {
  data: Data;
  squareIcon?: boolean;
  onClick?: () => void;
}

const Card = ({ data, squareIcon = false, onClick }: CardProps) => {
  const Icon = data.icon ?? X;
  const ListIcon = data.listIcon ?? X;
  return (
    <div
      className={`group p-8 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-sm border rounded-2xl transition-all duration-300 hover:scale-105 ${
        data.color == "neon-blue"
          ? "border-neon-blue/30 hover:border-neon-blue neon-glow-blue-hover"
          : data.color == "neon-pink"
          ? "border-neon-pink/30 hover:border-neon-pink neon-glow-pink-hover"
          : data.color == "neon-purple"
          ? "border-neon-purple/30 hover:border-neon-purple neon-glow-purple-hover"
          : data.color == "neon-green"
          ? "border-neon-green/30 hover:border-neon-green neon-glow-green-hover"
          : data.color == "neon-yellow"
          ? "border-neon-yellow/30 hover:border-neon-yellow neon-glow-yellow-hover"
          : data.color == "neon-orange"
          ? "border-neon-orange/30 hover:border-neon-orange neon-glow-orange-hover"
          : ""
      } `}
    >
      {data.annotation && (
        <div className="absolute -top-5 left-0 w-full flex justify-center">
          <span
            className={`px-4 py-2 font-bold rounded-full uppercase text-foreground-light ${
              data.color == "neon-blue"
                ? "bg-neon-blue"
                : data.color == "neon-pink"
                ? "bg-neon-pink"
                : data.color == "neon-purple"
                ? "bg-neon-purple"
                : data.color == "neon-green"
                ? "bg-neon-green"
                : data.color == "neon-yellow"
                ? "bg-neon-yellow"
                : data.color == "neon-orange"
                ? "bg-neon-orange"
                : ""
            }`}
          >
            {data.annotation}
          </span>
        </div>
      )}
      {data.icon && (
        <div
          className={`${
            squareIcon ? "w-18 h-18 rounded-lg" : "w-16 h-16 rounded-full"
          }  flex items-center justify-center mb-6 transition-colors duration-300 ${
            data.color == "neon-blue"
              ? "bg-neon-blue/20"
              : data.color == "neon-pink"
              ? "bg-neon-pink/20"
              : data.color == "neon-purple"
              ? "bg-neon-purple/20"
              : data.color == "neon-green"
              ? "bg-neon-green/20"
              : data.color == "neon-yellow"
              ? "bg-neon-yellow/20"
              : data.color == "neon-orange"
              ? "bg-neon-orange/20"
              : ""
          }`}
        >
          <Icon
            className={`${squareIcon ? "w-8 h-8" : "w-8 h-8"} ${
              data.color == "neon-blue"
                ? "text-neon-blue"
                : data.color == "neon-pink"
                ? "text-neon-pink"
                : data.color == "neon-purple"
                ? "text-neon-purple"
                : data.color == "neon-green"
                ? "text-neon-green"
                : data.color == "neon-yellow"
                ? "text-neon-yellow"
                : data.color == "neon-orange"
                ? "text-neon-orange"
                : ""
            }`}
          />
        </div>
      )}

      <h3
        className={`font-retro  font-bold  ${
          !data.icon ? "text-center text-2xl mb-2" : "text-xl mb-4"
        } ${
          data.color == "neon-blue"
            ? "text-neon-blue"
            : data.color == "neon-pink"
            ? "text-neon-pink"
            : data.color == "neon-purple"
            ? "text-neon-purple"
            : data.color == "neon-green"
            ? "text-neon-green"
            : data.color == "neon-yellow"
            ? "text-neon-yellow"
            : data.color == "neon-orange"
            ? "text-neon-orange"
            : ""
        }`}
      >
        {data.title}
      </h3>
      {data.subTitle && (
        <h3
          className={`font-bold mb-4 text-center text-3xl ${
            data.color == "neon-blue"
              ? "text-neon-blue"
              : data.color == "neon-pink"
              ? "text-neon-pink"
              : data.color == "neon-purple"
              ? "text-neon-purple"
              : data.color == "neon-green"
              ? "text-neon-green"
              : data.color == "neon-yellow"
              ? "text-neon-yellow"
              : data.color == "neon-orange"
              ? "text-neon-orange"
              : ""
          }`}
        >
          {data.subTitle}
        </h3>
      )}

      <p className="text-foreground-light dark:text-foreground-dark leading-relaxed">
        {data.description}
      </p>

      {data.list && (
        <ul className="text-foreground-light dark:text-foreground-dark mt-8 space-y-4 mb-8">
          {data.list.map((l, index) => (
            <li className="flex gap-4 " key={index}>
              <span>
                <ListIcon
                  className={`${
                    data.color == "neon-blue"
                      ? "text-neon-blue"
                      : data.color == "neon-pink"
                      ? "text-neon-pink"
                      : data.color == "neon-purple"
                      ? "text-neon-purple"
                      : data.color == "neon-green"
                      ? "text-neon-green"
                      : data.color == "neon-yellow"
                      ? "text-neon-yellow"
                      : data.color == "neon-orange"
                      ? "text-neon-orange"
                      : ""
                  }`}
                />
              </span>
              {l}
            </li>
          ))}
        </ul>
      )}

      {data.button && (
        <Button
          type="button"
          text={data.button}
          color={data.color}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default Card;
