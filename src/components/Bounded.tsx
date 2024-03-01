import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    classname?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Bounded({
    as: Comp = "section",
    classname,
    children,
    ...restProps
}: BoundedProps){

    return (
        <Comp className={clsx("px-4 py-16 md:py-14 md:px-6 lg:py-16", classname)}
         {...restProps}>
            <div className="mx-auto w-full max-w-6xl border">
                {children}
            </div>
        </Comp>
    )
}