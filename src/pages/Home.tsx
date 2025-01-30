import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BeakerIcon,
  ChatBubbleBottomCenterTextIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface NewsletterFormValues {
  email: string;
}

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="card-body">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 text-primary">{icon}</div>
          <h3 className="card-title">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const handleSubmit = (values: NewsletterFormValues) => {
    console.log("Form submitted:", values);
    // TODO: Implement newsletter subscription
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[90vh] bg-gradient-to-br from-base-200 to-base-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("/images/ai-pattern.svg")`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px",
          }}
        />
        <div className="hero-content text-center relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-8 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Stay Ahead with AI Innovations
            </h1>
            <p className="text-xl mb-12 text-neutral-700 font-sans leading-relaxed">
              Join Electromania's newsletter to receive the latest updates on AI
              automation, conversational AI, and avatars for small businesses
              worldwide.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col items-center gap-4">
                  <div className="form-control w-full max-w-md">
                    <Field
                      name="email"
                      type="email"
                      className="input input-bordered w-full shadow-lg text-lg h-14"
                      placeholder="Enter your email"
                    />
                    {errors.email && touched.email && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.email}
                        </span>
                      </label>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-lg shadow-lg text-lg h-14 px-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe to Newsletter
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 font-display"
          >
            Why Choose Electromania?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Driven Success"
              description="Transform your business with our cutting-edge AI solutions that deliver measurable results."
              icon={<BeakerIcon />}
              delay={0}
            />
            <FeatureCard
              title="Conversational AI"
              description="Enhance customer engagement with intelligent chatbots and virtual assistants."
              icon={<ChatBubbleBottomCenterTextIcon />}
              delay={0.2}
            />
            <FeatureCard
              title="Custom Avatars"
              description="Create unique brand personalities with customized AI avatars for your business."
              icon={<UserCircleIcon />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-lg font-display text-neutral-600">
                  Happy Clients
                </div>
                <div className="text-4xl font-bold font-display text-primary mt-2">
                  500+
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-lg font-display text-neutral-600">
                  AI Solutions Deployed
                </div>
                <div className="text-4xl font-bold font-display text-secondary mt-2">
                  1,000+
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-lg font-display text-neutral-600">
                  Success Rate
                </div>
                <div className="text-4xl font-bold font-display text-accent mt-2">
                  98%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-display">
            Our Solutions in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-4 pt-4">
                <img
                  src="/images/ai-automation.svg"
                  alt="AI Automation"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title font-display">AI Automation</h3>
                <p className="text-neutral-600">
                  Streamline your business processes with intelligent
                  automation.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-4 pt-4">
                <img
                  src="/images/chatbot.svg"
                  alt="Conversational AI"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title font-display">Conversational AI</h3>
                <p className="text-neutral-600">
                  Engage customers 24/7 with intelligent chat solutions.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-4 pt-4">
                <img
                  src="/images/avatar.svg"
                  alt="Custom Avatars"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title font-display">Custom Avatars</h3>
                <p className="text-neutral-600">
                  Create unique brand personalities with AI avatars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
