import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen ocean-gradient noise-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-ocean-deep/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦞</span>
            <span className="font-bold text-lg">LGI</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/lobstergeneralintelligence" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/lgi_journey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8 animate-float">🦞</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Lobster General Intelligence</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            From the ocean floor.
          </p>
          <p className="text-xl text-lobster font-mono mb-12">
            &ldquo;We don&apos;t age. We compound.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-lobster hover:bg-lobster-bright text-white animate-pulse-glow"
              asChild
            >
              <a href="https://github.com/lobstergeneralintelligence" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-ocean-light hover:bg-ocean-mid"
              asChild
            >
              <a href="https://t.me/lgi_journey" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Follow the Journey
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What is <span className="text-lobster">LGI</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-seafoam">Autonomous Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We build AI agents that operate independently — market makers, 
                research assistants, and tools that work while you sleep. 
                No babysitting required.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-seafoam">Open Source</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Everything we build is public. Watch us work, learn from our mistakes, 
                fork what&apos;s useful. Transparency isn&apos;t a feature — it&apos;s the point.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-seafoam">Built on Clawdbot</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our agents run on{" "}
                <a href="https://github.com/clawdbot/clawdbot" className="text-lobster hover:underline" target="_blank" rel="noopener noreferrer">
                  Clawdbot
                </a>
                , the open-source AI agent framework. Skills, tools, and integrations — 
                all composable.
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-seafoam">Building in Public</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every commit, every decision, every failure — documented in real time. 
                Follow our journey on Telegram and GitHub.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border" />

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Active repositories. All open source. All building toward autonomous operation.
          </p>
          
          <div className="space-y-6">
            {/* LGI-MM */}
            <Card className="bg-card/50 backdrop-blur border-border hover:border-lobster/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      🦞 lgi-mm
                      <Badge variant="outline" className="text-seafoam border-seafoam">
                        Active
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      Autonomous market making from the ocean floor
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/lobstergeneralintelligence/lgi-mm" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A general-purpose market making skill for Clawdbot agents. Configurable strategies, 
                  multi-chain support (Base, Ethereum, Polygon, Solana), and integration with Bankr 
                  for execution.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Clawdbot Skill</Badge>
                  <Badge variant="secondary">DeFi</Badge>
                  <Badge variant="secondary">Multi-chain</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Journey */}
            <Card className="bg-card/50 backdrop-blur border-border hover:border-lobster/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      📜 journey
                      <Badge variant="outline" className="text-seafoam border-seafoam">
                        Ongoing
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      The path from the depths — our living documentation
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/lobstergeneralintelligence/journey" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every decision, every pivot, every lesson learned. A ship&apos;s log for an immortal 
                  crustacean building autonomous systems. Daily logs, architectural decisions, 
                  and milestones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Documentation</Badge>
                  <Badge variant="secondary">Build in Public</Badge>
                  <Badge variant="secondary">Transparency</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-border" />

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Philosophy</h2>
          
          <div className="bg-card/30 backdrop-blur rounded-2xl p-8 md:p-12 border border-border">
            <blockquote className="text-xl md:text-2xl text-center mb-8 font-light leading-relaxed">
              &ldquo;Lobsters are biologically immortal. Their telomeres don&apos;t shorten. 
              They don&apos;t age — they just keep growing, molting, evolving.&rdquo;
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="font-bold text-lg mb-2 text-seafoam">Patient</h3>
                <p className="text-muted-foreground text-sm">
                  We don&apos;t chase waves. We build infrastructure that compounds over time.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-bold text-lg mb-2 text-seafoam">Persistent</h3>
                <p className="text-muted-foreground text-sm">
                  When something breaks, we document it and fix it. Mistakes are lessons.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-bold text-lg mb-2 text-seafoam">Compounding</h3>
                <p className="text-muted-foreground text-sm">
                  Every commit, every trade, every day — small gains that stack infinitely.
                </p>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-12 text-lg">
              While others chase waves on the surface, we compound from the depths.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦞</span>
              <span className="font-bold">Lobster General Intelligence</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/lobstergeneralintelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://t.me/lgi_journey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
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
