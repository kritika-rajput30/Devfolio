import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { coder } from "../assets";
import { styles } from "../styles";
import Reveal from "./Reveal";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_f9lge7n",
        "template_by937ha",
        {
          from_name: form.name,
          to_name: "Kritika",
          from_email: form.email,
          to_email: "kritikarajput.work@gmail.com",
          message: form.message,
        },
        "xSUXSNQa16ExCz0zO"
      )
      .then(
        () => {
          setLoading(false);
          alert("done!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("error");
          alert("error");
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex md:flex-row flex-col px-8 py-20 justify-center gap-8"
    >
      <Reveal className="shadow-md md:w-6/12">
        <div className="md:mx-20 p-8 h-min rounded-2xl border-2 border-current">
          <p className={styles.eyebrow}>Get in touch</p>
          <p className="text-5xl font-bold mb-4">CONTACT ME</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-fog font-medium mb-2">Your Name</span>
              <input
                placeholder="whats your name?"
                onChange={handleChange}
                value={form.name}
                className="bg-current/5 outline-night outline-2 py-4 px-4 placeholder:text-fog rounded-lg border-none font-medium"
                type="text"
                name="name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-fog font-medium mb-2">Your Email</span>
              <input
                placeholder="enter your email here"
                onChange={handleChange}
                value={form.email}
                className="bg-current/5 outline-night outline-2 py-4 px-4 placeholder:text-fog rounded-lg border-none font-medium"
                type="email"
                name="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-fog font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                placeholder="write message here"
                onChange={handleChange}
                value={form.message}
                className="bg-current/5 outline-night outline-2 py-4 px-4 placeholder:text-fog rounded-lg border-none font-medium"
                name="message"
              />
            </label>
            <button
              className="bg-night text-cream text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold rounded-full w-fit"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="md:w-6/12">
        <img className="rounded-3xl" src={coder} alt="" />
      </Reveal>
    </section>
  );
};

export default Contact;
