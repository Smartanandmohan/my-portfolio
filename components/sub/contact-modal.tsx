import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[90%] max-w-[400px] rounded-2xl border border-cyan-500/30 bg-[#030014]/90 p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Choose how you'd like to get in touch. I usually respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:dubeyanand7255@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Email Me</span>
                  <span className="text-xs text-gray-400">dubeyanand7255@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/917255943294"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-green-500/50 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <FaWhatsapp className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">WhatsApp</span>
                  <span className="text-xs text-gray-400">+91 7255943294</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
