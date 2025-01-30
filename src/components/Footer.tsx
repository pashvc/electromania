import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerLinks = [
    { text: "About Us", to: "/about" },
    { text: "Services", to: "/services" },
    { text: "Contact", to: "/contact" },
    { text: "Privacy Policy", to: "/privacy" },
  ];

  return (
    <footer className="footer footer-center p-10 bg-neutral text-neutral-content relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ backgroundSize: "100%" }}
        animate={{ backgroundSize: "120%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'url("/images/circuit-pattern.svg")',
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <motion.p
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Email: info@electromania.llc
            </motion.p>
            <motion.p
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Phone: +1 786 213 5996
            </motion.p>
            <motion.p
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Website: electromania.llc
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={link.to}>{link.text}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Stay updated with our latest AI innovations
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pr-16"
                />
                <motion.button
                  className="btn btn-primary absolute top-0 right-0 rounded-l-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Electromania. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
