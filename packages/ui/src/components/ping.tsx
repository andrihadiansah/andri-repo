type PingProps = {
  color?: string;
  size?: number;
};

export function Ping({ color = "green-500", size = 3 }: PingProps) {
  const sizeClass = `h-${size} w-${size}`;
  const bgClass = `bg-${color}`;

  return (
    <span className={`relative flex ${sizeClass}`}>
      <span
        className={`absolute inline-flex ${sizeClass} animate-ping rounded-full ${bgClass} opacity-75`}
      />
      <span
        className={`relative inline-flex ${sizeClass} ${bgClass} rounded-full`}
      />
    </span>
  );
}
