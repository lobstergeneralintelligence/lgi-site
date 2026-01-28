"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaExternalLinkAlt } from "react-icons/fa";
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

export default function Home() {
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
