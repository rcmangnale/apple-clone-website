import * as React from "react";
import { Container } from "./fragments";

const items = [
    {href: "index.html", navlinkClass: "nav-link-apple",
            className: "nav-items-hidden"},
    {body: "Store"},
    {body: "Mac"},
    {body: "iPad"},
    {body: "iPhone"},
    {body: "Watch"},
    {body: "Airpods"},
    {body: "TV & Home"},
    {body: "Only on Apple"},
    {body: "Accessories"},
    {body: "Support"},
    {navlinkClass: "nav-link-search"},
    {navlinkClass: "nav-link-bag"}
]


function NavLink({children, className, href}) {
    let classes = className ?
        `nav-link ${className}` : "nav-link";
    return (
        <a href={href || '#'} className={classes}>
            {children}
        </a>
    )
}

function NavItem({navLinkClass, children, className, href}) {
    let classes = className ?
        `nav-item ${className}` : "nav-item";
    return (
        <li className={classes}>
            <NavLink className={navLinkClass} href={href}>
                {children}
            </NavLink>
        </li>
    )
}

function Hamburger({active})
{
    let [isActive, setActive] = React.useState(active);
    let classes = active ? "mobile-menu active" : "mobile-menu";
    return (
        <li className="nav-list nav-list-mobile" onClick={() => {
            setActive(!isActive);
            document.querySelector("header")
            .classList.toggle("active");
        }}>
            <div className={classes}>
                <span className="line line-top"/>
                <span className="line line-bottom"/>
            </div>
        </li>
    )
}

function NavList()
{
   return (
        <ul className="nav-list nav-list-larger">
            {items.map((props, index) => (
                <NavItem {...props} key={index}>
                    {props.body}
                </NavItem>
            ))}
        </ul>
   )
}

function NavListMobile() {
    return (
        <ul className="nav-list nav-list-mobile">
            <Hamburger active={false}/>
            <NavItem href="index.html" navLinkClass="nav-link-apple"/>
            <NavItem navLinkClass="nav-link-bag"/>
        </ul>
    )
}

export default function NavBar() {
    return (
        <Container>
            <nav className="nav">
                <NavListMobile/>
                <NavList/>
            </nav>
        </Container>
    )
}
