import { forwardRef } from "react";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={` ${
          className || ""
        } flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-950/10 bg-zinc-50 px-3 py-2 text-zinc-950/90 outline-none ring-zinc-950/90 ring-offset-2 ring-offset-zinc-50 hover:bg-zinc-950/5 focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-50/10 dark:bg-zinc-950 dark:text-zinc-50/90 dark:ring-zinc-50/90 dark:ring-offset-zinc-950 dark:hover:bg-zinc-50/5`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
