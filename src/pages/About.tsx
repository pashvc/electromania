import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LightBulbIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const ValueCard: React.FC<{
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

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-base-200 to-base-100 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ backgroundSize: "100%" }}
          animate={{ backgroundSize: "120%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: 'url("/images/circuit-pattern.png")',
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              About Electromania
            </h1>
            <p className="text-xl mb-6 text-neutral-700">
              Electromania is a leading AI automation company specializing in
              creating intelligent solutions for small businesses worldwide. Our
              mission is to make advanced AI technology accessible and practical
              for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly push the boundaries of what's possible with AI technology, creating cutting-edge solutions that drive business growth."
              icon={<LightBulbIcon />}
              delay={0}
            />
            <ValueCard
              title="Accessibility"
              description="We believe that advanced AI technology should be accessible to businesses of all sizes, not just large enterprises."
              icon={<GlobeAltIcon />}
              delay={0.2}
            />
            <ValueCard
              title="Customer Success"
              description="Your success is our success. We're committed to providing solutions that deliver real, measurable results for your business."
              icon={<UserGroupIcon />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="card bg-base-100 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <CpuChipIcon className="w-12 h-12 text-primary" />
                  <h3 className="card-title">AI Automation</h3>
                </div>
                <p className="mb-4">
                  Our team specializes in creating custom AI automation
                  solutions that streamline operations and boost efficiency for
                  small businesses.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process Automation</li>
                  <li>Workflow Optimization</li>
                  <li>Custom AI Solutions</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="card bg-base-100 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <ChatBubbleLeftRightIcon className="w-12 h-12 text-primary" />
                  <h3 className="card-title">Conversational AI</h3>
                </div>
                <p className="mb-4">
                  We develop intelligent chatbots and virtual assistants that
                  provide 24/7 customer support and enhance user engagement.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Custom Chatbots</li>
                  <li>Virtual Assistants</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
