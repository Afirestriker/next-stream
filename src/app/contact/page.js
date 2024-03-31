import styles from "@/app/styles/contact.module.css"
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We&apos;d love to hear <span>from you</span></h2>
                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10011.70719405859!2d2.1638128178388767!3d41.4008359917418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sLa%20Sagrada%20Familia!5e0!3m2!1sen!2sin!4v1696763909214!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapping}
            >
            </iframe>
        </>
    );
};

export default Contact;