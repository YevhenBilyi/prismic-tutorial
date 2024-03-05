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
        <Comp className={clsx("px-4 py-5 md:py-5 md:px-6 lg:py-5", classname)}
         {...restProps}>
            <div className="mx-auto w-full max-w-6xl">
                {children}
            </div>
        </Comp>
    )
}