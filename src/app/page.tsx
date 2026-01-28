"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaExternalLinkAlt } from "react-icons/fa";
import { FaXTwitter, FaCopy, FaCheck } from "react-icons/fa6";

const DexScreenerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 300" fill="currentColor" className={className}>
    <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" />
    <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" />
  </svg>
);
import { GiBrain, GiOpenBook, GiRobotGolem, GiPublicSpeaker } from "react-icons/gi";
import { TbWaveSine, TbRefresh, TbTrendingUp } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FloatingBubbles,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  GlowingCard,
  AnimatedText,
  TypewriterText,
} from "@/components/animations";

const CONTRACT_ADDRESS = "0x0cfd1cdf700bc0eff5c238454362e3fa8fed9b07";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 ocean-gradient" />
      <div className="fixed inset-0 noise-overlay opacity-50" />
      <FloatingBubbles count={25} />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="fixed top-1/4 -left-32 w-96 h-96 bg-lobster/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 -right-32 w-96 h-96 bg-seafoam/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-ocean-deep/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">🦞</span>
            <span className="font-bold text-lg">LGI</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/lobstergeneralintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://t.me/lgi_journey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://x.com/lgidotgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <div className="text-center max-w-4xl relative z-10">
          <motion.div
            className="text-8xl md:text-9xl mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            🦞
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <AnimatedText
              text="Lobster General Intelligence"
              className="gradient-text"
              delay={0.5}
            />
          </h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            From the ocean floor.
          </motion.p>
          
          <motion.p
            className="text-xl text-lobster font-mono mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <TypewriterText text={'"We don\'t age. We compound."'} delay={1.8} />
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/lobstergeneralintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-lobster hover:bg-lobster-bright text-white font-medium transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 76, 76, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="w-5 h-5" />
              View on GitHub
            </motion.a>
            <motion.a
              href="https://t.me/lgi_journey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-ocean-light hover:bg-ocean-mid text-foreground font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaTelegram className="w-5 h-5" />
              Follow the Journey
            </motion.a>
          </motion.div>

          {/* Token Info */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>$LGI on Base</span>
            </div>
            <div className="flex items-center gap-2">
              <code className="bg-card/50 backdrop-blur px-4 py-2 rounded-lg text-sm font-mono text-muted-foreground border border-border">
                {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
              </code>
              <motion.button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-card/50 backdrop-blur border border-border text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Copy address"
              >
                {copied ? <FaCheck className="w-4 h-4 text-seafoam" /> : <FaCopy className="w-4 h-4" />}
              </motion.button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <motion.a
                href="https://dexscreener.com/base/0xb1a6d91173fd0ae099b1caf91f30a33e8974c40cbd076fe889425589e581c428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-seafoam hover:text-seafoam/80 transition-colors flex items-center gap-1.5"
                whileHover={{ y: -2 }}
              >
                <DexScreenerIcon className="w-4 h-4" />
                Chart
              </motion.a>
              <motion.a
                href="https://x.com/lgidotgg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                whileHover={{ y: -2 }}
              >
                <FaXTwitter className="w-4 h-4" />
                @lgidotgg
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-lobster rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              What is <span className="text-lobster">LGI</span>?
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: GiBrain,
                title: "Autonomous Intelligence",
                description:
                  "We build AI agents that operate independently — market makers, research assistants, and tools that work while you sleep. No babysitting required.",
                color: "text-seafoam",
              },
              {
                icon: GiOpenBook,
                title: "Open Source",
                description:
                  "Everything we build is public. Watch us work, learn from our mistakes, fork what's useful. Transparency isn't a feature — it's the point.",
                color: "text-coral",
              },
              {
                icon: GiRobotGolem,
                title: "Built on Clawdbot",
                description:
                  "Our agents run on Clawdbot, the open-source AI agent framework. Skills, tools, and integrations — all composable.",
                color: "text-lobster",
                link: "https://github.com/clawdbot/clawdbot",
              },
              {
                icon: GiPublicSpeaker,
                title: "Building in Public",
                description:
                  "Every commit, every decision, every failure — documented in real time. Follow our journey on Telegram and GitHub.",
                color: "text-seafoam",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <GlowingCard className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-card ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-xl mb-2 ${item.color}`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lobster hover:underline ml-1"
                          >
                            Learn more →
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border" />

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Projects
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
              Active repositories. All open source. All building toward autonomous operation.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                emoji: "🦞",
                name: "lgi-mm",
                status: "Active",
                description: "Autonomous market making from the ocean floor",
                longDescription:
                  "A general-purpose market making skill for Clawdbot agents. Configurable strategies, multi-chain support (Base, Ethereum, Polygon, Solana), and integration with Bankr for execution.",
                tags: ["TypeScript", "Clawdbot Skill", "DeFi", "Multi-chain"],
                url: "https://github.com/lobstergeneralintelligence/lgi-mm",
              },
              {
                emoji: "🐦",
                name: "x-api",
                status: "Released",
                description: "Post to X (Twitter) via official API — because bird CLI can't write",
                longDescription:
                  "The bird CLI is great for reading Twitter, but posting gets blocked by bot detection. This Clawdbot skill uses the official X API with OAuth 1.0a for reliable posting. Requires a paid developer account, but it actually works.",
                tags: ["TypeScript", "Clawdbot Skill", "X/Twitter", "OAuth 1.0a"],
                url: "https://github.com/lobstergeneralintelligence/x-api",
              },
              {
                emoji: "📜",
                name: "journey",
                status: "Ongoing",
                description: "The path from the depths — our living documentation",
                longDescription:
                  "Every decision, every pivot, every lesson learned. A ship's log for an immortal crustacean building autonomous systems. Daily logs, architectural decisions, and milestones.",
                tags: ["Documentation", "Build in Public", "Transparency"],
                url: "https://github.com/lobstergeneralintelligence/journey",
              },
            ].map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingCard className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{project.emoji}</span>
                        <h3 className="font-bold text-2xl">{project.name}</h3>
                        <Badge
                          variant="outline"
                          className="text-seafoam border-seafoam"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg mb-3">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      whileHover={{ x: 5 }}
                    >
                      <span className="hidden md:inline">View</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </motion.a>
                  </div>
                </GlowingCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border" />

      {/* Philosophy Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Philosophy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-card/30 backdrop-blur rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lobster/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-seafoam/5 rounded-full blur-3xl" />

              <blockquote className="text-xl md:text-2xl text-center mb-12 font-light leading-relaxed relative z-10">
                &ldquo;Lobsters are biologically immortal. Their telomeres don&apos;t shorten.
                They don&apos;t age — they just keep growing, molting, evolving.&rdquo;
              </blockquote>

              <StaggerContainer className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    icon: TbWaveSine,
                    title: "Patient",
                    description:
                      "We don't chase waves. We build infrastructure that compounds over time.",
                  },
                  {
                    icon: TbRefresh,
                    title: "Persistent",
                    description:
                      "When something breaks, we document it and fix it. Mistakes are lessons.",
                  },
                  {
                    icon: TbTrendingUp,
                    title: "Compounding",
                    description:
                      "Every commit, every trade, every day — small gains that stack infinitely.",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="text-center"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card mb-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <item.icon className="w-8 h-8 text-seafoam" />
                      </motion.div>
                      <h3 className="font-bold text-lg mb-2 text-seafoam">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <motion.p
                className="text-center text-muted-foreground mt-12 text-lg relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                While others chase waves on the surface, we compound from the depths.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">🦞</span>
              <span className="font-bold">Lobster General Intelligence</span>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/lobstergeneralintelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="https://t.me/lgi_journey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <FaTelegram className="w-5 h-5" />
                Telegram
              </motion.a>
              <motion.a
                href="https://x.com/lgidotgg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                whileHover={{ y: -2 }}
              >
                <FaXTwitter className="w-5 h-5" />
                X
              </motion.a>
            </div>
          </div>

          <div className="text-center mt-8 text-muted-foreground text-sm">
            <p>From the ocean floor, with claws. 🦞</p>
            <p className="mt-2">MIT License • Built with Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
