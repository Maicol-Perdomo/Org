import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.linkedin.com/in/maicol-perdomo/">
          <img src="/img/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://github.com/Maicol-Perdomo">
          <img src="/img/github.png" alt="Github" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Maicol Perdomo</strong>
    </footer>
  );
};

export default Footer;
