export function Typography({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        {children}
    </>
}

Typography.H1 = function TypographyH1({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {children}
    </h1>

}
Typography.H2 = function TypographyH2({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
    </h2>

}
Typography.H3 = function TypographyH3({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
    </h3>

}
Typography.H4 = function TypographyH4({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
    </h4>

}
Typography.P = function TypographyP({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <p className="leading-7 [&:not(:first-child)]:mt-6">
        {children}
    </p>

}
Typography.Muted = function TypographyMuted({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <p className="text-muted-foreground text-sm">{children}</p>
}