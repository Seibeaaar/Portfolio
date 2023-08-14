import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "./SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [successfullySent, setSuccessfullySent] = useState<boolean>(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_ib7mur8',
      'template_kzv143c',
      {
        from_name: name,
        to_name: 'Yurii',
        from_email: email,
        to_email: 'yurii.baryliak@gmail.com',
        message
      },
      'E-ErTIaiOC8lD_I3A'
    ).then(() => {
      setSuccessfullySent(true);
      alert('Thank you, your email has been sent');
    }).catch(e => {
      alert('Hmm, something went wrong');
    }).finally(() => {
      setLoading(false);
      setEmail('');
      setName('');
      setMessage('');
    })
  };

  const generateButtonText = () => {
    if (loading) {
      return 'Sending...'
    };
    return successfullySent ? 'Sent' : 'Send';
  }

  return (
    <SectionWrapper id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          <form className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your name:</span>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email:</span>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your message:</span>
              <textarea
                rows={7}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Feel free to leave any message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl`}
              onClick={onSubmit}
              disabled={loading || successfullySent}
            >
              {generateButtonText()}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.5, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
