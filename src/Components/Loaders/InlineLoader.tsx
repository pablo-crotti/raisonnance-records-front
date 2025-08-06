import "./InlineLoader.css";
interface InlineLoaderProps {
  color: string;
}
const InlineLoader = ({ color }: InlineLoaderProps) => {
  return (
    <div
      className={`loader ${
        color == "neon-blue"
          ? "texbefore:bgon-blue"
          : color == "neon-pink"
          ? "before:bg-neon-pink"
          : color == "neon-purple"
          ? "before:bg-neon-purple"
          : color == "neon-green"
          ? "before:bg-neon-green"
          : color == "neon-yellow"
          ? "before:bg-neon-yellow"
          : color == "neon-orange"
          ? "before:bg-neon-orange"
          : ""
      }`}
    ></div>
  );
};

export default InlineLoader;
