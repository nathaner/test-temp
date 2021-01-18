import React from "react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Heading from "../components/common/Heading";
import Head from "../components/common/Head";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";

export default function Contact() {
    return (
        <>
            <Head
                title="Vaultinum — Contact us"
                description="Vaultinum answers to any question you may have regarding its solutions or intellectual property."
            />
            <div className="container grid grid-1x2">
                <section className="block">
                    <Heading>Contact us</Heading>
                    <p>
                        We are eager to discuss your business needs and answer
                        any questions you may have. Enter your details and we’ll
                        get back to you shortly.
                    </p>
                    <form>
                        <Input
                            name="firstName"
                            label="First name"
                            type="text"
                            id="firstName"
                            optional
                        />
                        <Input
                            name="lastName"
                            label="Last name"
                            type="lastName"
                            id="lastName"
                            optional
                        />
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />
                        <TextArea
                            label="Message"
                            name="message"
                            id="message"
                            rows={12}
                        ></TextArea>
                        <Button>Send</Button>
                    </form>
                </section>
                <section className="block contact-address">
                    <h2>Address</h2>
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
