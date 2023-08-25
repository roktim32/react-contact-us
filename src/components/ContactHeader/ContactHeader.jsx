import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  console.log(styles);
  return (
    <div className={styles.contact_section}>
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
        libero eget ipsum blandit sollicitudin nec at sem. Phasellus vel euismod
        sem. Sed quis nisl ipsum. Mauris euismod ex et molestie rhoncus. Ut
        auctor a mauris vitae tristique nunc.Sed quis nisl ipsum. Mauris euismod
        ex et molestie rhoncus. Ut auctor a mauris vitae tristique nunc.
      </p>
    </div>
  );
};

export default ContactHeader;
