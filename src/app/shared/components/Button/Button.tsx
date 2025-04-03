const Button = ({ type, className, children }: { type: "submit" | "reset" | "button"; className: string; children: React.ReactNode }) => {
    return (
      <button type={type} className={`transition duration-200 ${className}`}>
        {children}
      </button>
    );
  };
  
  export default Button;
  