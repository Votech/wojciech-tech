import footerStyles from "../styles/components/footer.module.scss";

import React from "react";

import Underline from "../components/underline";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.main}>
          <div className={footerStyles.left}>
            <div className={footerStyles.title}>
              <h1>
                Let's connect <br /> <span>digitally</span>
              </h1>
            </div>
          </div>
          <div className={footerStyles.right}>
            <div className={footerStyles.link}>
              <Underline>
                <a
                  href="mailto: mietlinski.wojtek@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </Underline>
            </div>

            <div className={footerStyles.link}>
              <Underline>
                <a
                  href="https://www.linkedin.com/in/wojciech-mietlinski/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Underline>
            </div>

            <div className={footerStyles.link}>
              <Underline>
                <a
                  href="https://github.com/Votech"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Underline>
            </div>
          </div>
        </div>

        <div className={footerStyles.copyright}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            style={{ marginRight: "4px" }}
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z" />
          </svg>
          <h4>{year} Wojciech Mietlinski</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
