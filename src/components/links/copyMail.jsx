import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "joaquinignacioclark@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <div className="my-7 flex max-w-full flex-col items-center gap-3 sm:flex-row">
      <p className="break-all font-technical text-sm text-ink">{email}</p>
      <button
        onClick={copyToClipboard}
        className="terminal-button cursor-pointer gap-2 px-3 py-1.5"
      >
        <FaRegCopy />
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
