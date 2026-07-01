import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-16 max-w-2xl pt-28 sm:pt-32"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted">{description}</p>
    </motion.div>
  );
}
