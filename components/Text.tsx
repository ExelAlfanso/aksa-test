import React, { JSX } from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

export function Text({ as = "p", className, ...props }: TextProps) {
  return React.createElement(as, { className, ...props });
}

export function HeaderOne({ className, ...props }: TextProps) {
  return (
    <Text
      as="h1"
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${className || ""}`}
      {...props}
    />
  );
}

export function HeaderTwo({ className, ...props }: TextProps) {
  return (
    <Text
      as="h2"
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ${className || ""}`}
      {...props}
    />
  );
}

export function HeaderThree({ className, ...props }: TextProps) {
  return (
    <Text
      as="h3"
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ${className || ""}`}
      {...props}
    />
  );
}
