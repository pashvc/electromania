import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  domMax,
  LazyMotion,
  m,
  MotionConfig,
  usePresence,
} from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface MenuItem {
  text: string;
  to: string;
}

const menuItems: MenuItem[] = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Contact", to: "/contact" },
];

const MobileMenuContent: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <m.div
      {...animations}
      onAnimationComplete={() => !isPresent && safeToRemove?.()}
      className="absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-sm shadow-lg md:hidden overflow-hidden border-t border-base-200"
    >
      <nav className="menu menu-vertical p-4">
        {menuItems.map((item) => (
          <m.li
            key={item.to}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={item.to}
              onClick={onClose}
              className="text-lg font-medium py-3 font-display"
            >
              {item.text}
            </Link>
          </m.li>
        ))}
        <m.li
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <m.button
            className="btn btn-primary w-full text-lg font-display mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </m.button>
        </m.li>
      </nav>
    </m.div>
  );
};

const DesktopMenu: React.FC = () => (
  <div className="flex-none hidden md:block">
    <nav className="flex items-center gap-8">
      {menuItems.map((item) => (
        <m.div key={item.to} whileHover={{ y: -2 }}>
          <Link
            to={item.to}
            className="text-lg font-medium hover:text-primary transition-colors font-display"
          >
            {item.text}
          </Link>
        </m.div>
      ))}
      <m.button
        className="btn btn-primary text-lg font-display"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Subscribe
      </m.button>
    </nav>
  </div>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <LazyMotion features={domMax}>
      <MotionConfig reducedMotion="user">
        <m.header
          className="fixed w-full bg-base-100/95 backdrop-blur-sm shadow-lg z-50 border-b border-base-200"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="text-2xl font-bold">
                <m.span
                  className="font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Electromania
                </m.span>
              </Link>

              <DesktopMenu />

              <div className="flex-none md:hidden">
                <button
                  className="btn btn-ghost btn-circle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <MobileMenuContent onClose={() => setIsMenuOpen(false)} />
          )}
        </m.header>
      </MotionConfig>
    </LazyMotion>
  );
};

export default Navbar;
