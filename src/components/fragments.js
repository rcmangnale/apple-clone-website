import * as React from "react";

export function Container({children}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export function CtaLink({href, children, darker}) {
    let cls = darker ? "cta-link cta-link-darker" : "cta-link";
    return (
        <a href={href || "#"} className={cls}>
            {children}
        </a>
    )
}

export function Cta({children}) {
    return (
        <div className="cta">
            {children}
        </div>
    )
}

export function Title({children, dark}) {
    let cls = dark? "title title-dark" : "title";
    return (
        <div className={cls}>
            {children}
        </div>
    )
}

export function Hero({children, className}) {
    let cls = className? `hero ${className}` : "hero";
    return (
        <section className={cls}>
            {children}
        </section>
    )
}

export function TitleHeading({
    children, className="title-heading",
    component="h2"
}) {
    return React.createElement(component, {
        children,
        className
    })
}

export function TitleSubHeading({
    children, className="title-sub-heading",
    component="h3"
}) {
    return React.createElement(component, {
        children,
        className
    })
}

export function TitleParagraph({
    children, className="title-paragraph",
    component="p"
}) {
    return React.createElement(component, {
        children,
        className
    })
}
