type BadgeProps = {} & React.ComponentProps<"div">;

export const Badge = ({ className, ...props }: BadgeProps) => (
  <div
    className={`${
      className || ""
    } flex whitespace-nowrap bg-zinc-950/90 text-zinc-50/90 py-1 px-3 rounded-md text-sm`}
    {...props}
  >
    {props.children}
  </div>
);
