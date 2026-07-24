import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import emailjs from "@emailjs/browser";

import { contactConfig } from "../../config/contact";


type Status = "idle" | "sending" | "success" | "error";


export default function ContactForm() {

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [status, setStatus] = useState<Status>("idle");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));

  }



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    if (!captchaToken) {

      setStatus("error");

      return;

    }


    setStatus("sending");


    try {

      await emailjs.send(
        contactConfig.emailServiceId,
        contactConfig.emailTemplateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        {
          publicKey: contactConfig.emailPublicKey,
        }
      );


      setStatus("success");


      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });


      setCaptchaToken(null);


    } catch (error) {

      console.error(
        "Erreur lors de l'envoi du formulaire :",
        error
      );


      setStatus("error");

    }

  }



  return (

    <form
      onSubmit={handleSubmit}
      className="
        rounded-soft
        bg-white
        p-8
        shadow-antique
        space-y-5
      "
    >


      <div>

        <label
          className="form-label"
          htmlFor="name"
        >
          Nom
        </label>


        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          type="text"
        />

      </div>



      <div>

        <label
          className="form-label"
          htmlFor="email"
        >
          Email
        </label>


        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          type="email"
        />

      </div>



      <div>

        <label
          className="form-label"
          htmlFor="phone"
        >
          Téléphone
        </label>


        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          type="tel"
        />

      </div>



      <div>

        <label
          className="form-label"
          htmlFor="message"
        >
          Votre projet
        </label>


        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input"
        />

      </div>



      <Turnstile
        siteKey={contactConfig.turnstileSiteKey}

        onSuccess={(token) => {

          setCaptchaToken(token);

        }}

        onExpire={() => {

          setCaptchaToken(null);

        }}

        onError={() => {

          setCaptchaToken(null);

          setStatus("error");

        }}
      />



      <button
        disabled={
          status === "sending" ||
          !captchaToken
        }
        type="submit"
        className="
          button-primary
          w-full
        "
      >

        {
          status === "sending"
            ? "Envoi en cours..."
            : "Envoyer ma demande"
        }

      </button>



      {
        status === "success" && (

          <p
            className="
              text-green-700
              text-sm
            "
          >
            Votre demande a bien été envoyée.
            Nous vous répondrons rapidement.
          </p>

        )
      }



      {
        status === "error" && (

          <p
            className="
              text-red-700
              text-sm
            "
          >
            Impossible d'envoyer votre demande.
            Vérifiez le CAPTCHA puis réessayez.
          </p>

        )
      }


    </form>

  );
}