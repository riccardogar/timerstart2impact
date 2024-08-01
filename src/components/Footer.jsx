import React from "react";

function Footer() {
  return (
    <footer className="h-20 flex items-center justify-center bg-blue-500">
      <p className="text-lg">
        Created by{" "}
        <a
          href="https://github.com/riccardogar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Riccardo Garutti
        </a>
        .
      </p>
    </footer>
  );
}
export default Footer;
