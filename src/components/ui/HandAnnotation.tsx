type HandAnnotationProps = {
  children: React.ReactNode;
  className?: string;
};

export function HandAnnotation({ children, className = "" }: HandAnnotationProps) {
  return (
    <p className={`font-hand ${className}`} style={{ transform: "rotate(-2deg)" }}>
      {children}
    </p>
  );
}
