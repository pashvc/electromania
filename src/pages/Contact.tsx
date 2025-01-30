import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: number;
}> = ({ icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-4"
  >
    <div className="w-8 h-8 text-primary">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  </motion.div>
);

const Contact: React.FC = () => {
  const handleSubmit = (values: ContactFormValues) => {
    console.log("Contact form submitted:", values);
    // TODO: Implement contact form submission
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-base-200 to-base-100">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<EnvelopeIcon />}
                    title="Email"
                    content="info@electromania.llc"
                    delay={0.2}
                  />
                  <ContactInfo
                    icon={<PhoneIcon />}
                    title="Phone"
                    content="+1 786 213 5996"
                    delay={0.4}
                  />
                  <ContactInfo
                    icon={<GlobeAltIcon />}
                    title="Website"
                    content="electromania.llc"
                    delay={0.6}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title mb-8">Send us a Message</h2>
                    <div className="space-y-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <Field
                          name="name"
                          className="input input-bordered"
                          placeholder="Your name"
                        />
                        {errors.name && touched.name && (
                          <label className="label">
                            <span className="label-text-alt text-error">
                              {errors.name}
                            </span>
                          </label>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="input input-bordered"
                          placeholder="Your email"
                        />
                        {errors.email && touched.email && (
                          <label className="label">
                            <span className="label-text-alt text-error">
                              {errors.email}
                            </span>
                          </label>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Subject</span>
                        </label>
                        <Field
                          name="subject"
                          className="input input-bordered"
                          placeholder="Message subject"
                        />
                        {errors.subject && touched.subject && (
                          <label className="label">
                            <span className="label-text-alt text-error">
                              {errors.subject}
                            </span>
                          </label>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Message</span>
                        </label>
                        <Field
                          name="message"
                          as="textarea"
                          className="textarea textarea-bordered h-32"
                          placeholder="Your message"
                        />
                        {errors.message && touched.message && (
                          <label className="label">
                            <span className="label-text-alt text-error">
                              {errors.message}
                            </span>
                          </label>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        className="btn btn-primary w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
