import * as React from "react";
import {
    Container, Cta, CtaLink, Title, Hero,
    TitleHeading, TitleSubHeading, TitleParagraph
} from "./fragments";


function IPhone14Pro(){
    return (
        <Hero className="iphone-14-pro">
            <Container>
                <Title>
                    <TitleHeading>
                        iPhone 14 Pro
                    </TitleHeading>
                    <TitleSubHeading>
                        Pro. Beyond.
                    </TitleSubHeading>
                </Title>
                <Cta>
                    <CtaLink>{"Learn more >"}</CtaLink>
                    <CtaLink>{"Buy >"}</CtaLink>
                </Cta>
            </Container>
        </Hero>
    )
}

function IPhone14() {
    return (
        <Hero className="iphone-14">
            <Container>
                <Title dark>
                    <TitleHeading>
                        iPhone 14
                    </TitleHeading>
                    <TitleSubHeading>
                        Big and bigger.
                    </TitleSubHeading>
                    <TitleParagraph>
                        iPhone 14 Plus available starting 10.7
                    </TitleParagraph>
                    <Cta>
                        <CtaLink darker>
                            {"Learn more >"}
                        </CtaLink>
                        <CtaLink darker>
                            {"Shop >"}
                        </CtaLink>
                    </Cta>
                </Title>
            </Container>
        </Hero>
    )
}

function Watch() {
    return (
        <Hero className="watch">
            <Container>
                <Title dark>
                    <TitleHeading className="title-heading-watch"/>
                    <TitleSubHeading className="title-paragraph2">
                        A healthy leap ahead.
                    </TitleSubHeading>
                </Title>
                <Cta>
                    <CtaLink darker>{"Learn more >"}</CtaLink>
                    <CtaLink darker>{"Buy >"}</CtaLink>
                </Cta>
            </Container>
        </Hero>
    )
}

function Grid() {
    return (
        <div className="grid-container">
            <Hero className="watch-se">
                <Container>
                    <Title dark>
                        <TitleHeading className="title-heading-watch-se"/>
                        <TitleSubHeading className="title-paragraph-3">
                            A great deal to love.
                        </TitleSubHeading>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Learn more >"}</CtaLink>
                        <CtaLink darker>{"Buy >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
            <Hero className="watch-ultra">
                <Container>
                    <Title dark>
                        <TitleHeading className="title-heading-watch-ultra"/>
                        <TitleSubHeading className="title-paragraph-4">
                            Adventure awaits.
                        </TitleSubHeading>
                        <TitleParagraph>
                            Available starting 9.23
                        </TitleParagraph>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Learn more >"}</CtaLink>
                        <CtaLink darker>{"Order now >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
            <Hero className="fitness">
                <Container>
                    <Title dark>
                        <TitleHeading className="title-heading-fitness"/>
                        <TitleParagraph className="title-paragraph5" component="h5">
                            Fitness for everyone.
                            <br/> Now all you need iPhone.
                        </TitleParagraph>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Learn more >"}</CtaLink>
                        <CtaLink darker>{"Notify me >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
            <Hero className="airpods-pro">
                <Container>
                    <Title>
                        <TitleHeading>Airpods Pro</TitleHeading>
                        <TitleSubHeading>Rebuilt from the sound up.</TitleSubHeading>
                        <TitleParagraph className="title-paragraph6">
                            Available starting 9.23
                        </TitleParagraph>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Learn more >"}</CtaLink>
                        <CtaLink darker>{"Order now >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
            <Hero className="college">
                <Container>
                    <Title dark>
                        <TitleHeading className="title-heading-red" component="h5">
                            Offer ends 9.26
                        </TitleHeading>
                        <TitleHeading component="h3">
                            Get supercharged <br/> for college
                        </TitleHeading>
                        <TitleParagraph className="title-paragraph7">
                            Last chance to get a gift card.
                        </TitleParagraph>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Shop now >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
            <Hero className="card">
                <Container>
                    <Title dark>
                        <TitleHeading className="title-heading-card"/>
                        <TitleParagraph className="title-paragraph8" component="h5">
                            Get up to 3% Daily Cash back <br/> with every purchase.
                        </TitleParagraph>
                    </Title>
                    <Cta>
                        <CtaLink darker>{"Learn more >"}</CtaLink>
                        <CtaLink darker>{"Apply now >"}</CtaLink>
                    </Cta>
                </Container>
            </Hero>
        </div>
    )
}

export default function Section() {
    return (
        <React.Fragment>
            <IPhone14Pro/>
            <IPhone14/>
            <Watch/>
            <Grid/>
        </React.Fragment>
    )
}