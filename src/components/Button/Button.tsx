import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
}

function Button({ children, color = "default", size = "base" }: ButtonProps) {
  return <button className={`${color} ${size}`}> {children}</button>;
}

export default Button;
