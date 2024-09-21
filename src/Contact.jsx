import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Form from "./Components/Form";

const Contact = () => {
  return (
    <div
      className="py-16 px-4 bg-gradient-to-b from-gray-700 to-gray-900 text-white"
      id="contact"
    >
      <div className="max-w-[1000px] mx-auto text-center mb-10">
        <h2 className="text-5xl font-semibold mb-6 text-blue-400">
          Contact <span className="text-gray-200">Me</span>
        </h2>
        <p className="text-lg text-gray-400">
          Reach out for any questions or collaboration inquiries!
        </p>
      </div>

      {/* Side-by-side layout */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-start space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>

          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-blue-400" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-gray-400">marongamadou6@gmail.com</p>
            </div>
          </div>

          {/* Phone Section (Clickable link) */}
          <div className="flex items-center space-x-4">
            <a href="tel:+2203740652" className="flex items-center space-x-4">
              <AiOutlinePhone className="text-3xl text-blue-400" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-gray-400">+220 374 0652</p>
              </div>
            </a>
          </div>

          {/* Location Section */}
          <div className="flex items-center space-x-4">
            <AiOutlineEnvironment className="text-3xl text-blue-400" />
            <div>
              <p className="text-lg font-semibold">Location</p>
              <p className="text-gray-400">Banjul, The Gambia</p>
            </div>
          </div>
        </motion.div>

        <Form />
      </div>
    </div>
  );
};

export default Contact;
