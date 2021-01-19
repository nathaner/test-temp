import React from "react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Head from "../components/common/Head";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import { useRouter } from "next/router";

import en from "../locales/en/en";
import fr from "../locales/fr/fr";

export default function Contact() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;
    return (
        <>
            <Head
                title="Vaultinum — Contact us"
                description="Vaultinum answers to any question you may have regarding its solutions or intellectual property."
            />
            <div className="container grid grid-1x2">
                <section className="block">
                    <Heading>{t.contact.contactUs}</Heading>
                    <p>{t.contact.contactMessage}</p>
                    <form>
                        <Input name="firstName" label="First name" type="text" id="firstName" optional />
                        <Input name="lastName" label="Last name" type="lastName" id="lastName" optional />
                        <Input name="email" label="Email" type="email" id="email" />
                        <TextArea label="Message" name="message" id="message" rows={12}></TextArea>
                        <Button>Send</Button>
                    </form>
                </section>
                <section className="block contact-address">
                    <h2>{t.contact.address}</h2>
                    <img src="img/vaultinum-office.jpg" alt="Vaultinum office" />
                    <ul className="list-unstyled">
                        <li>Vaultinum</li>
                        <li>2ème étage, World trade center,</li>
                        <li>Route de pre-bois 29, 1215 Meyrin</li>
                        <li>Geneve aéroport</li>
                        <li>SUISSE</li>
                    </ul>
                </section>
            </div>
        </>
    );
}
