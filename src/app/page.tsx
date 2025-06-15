"use client";
import React, { useState } from "react";
import {
  Play,
  Zap,
  Shield,
  Download,
  Code2,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Mail,
  Twitter,
  MessageCircle,
  BookOpen,
  Laptop,
  GraduationCap,
  Clock,
  Target,
  Video,
  Brain,
} from "lucide-react";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8">
            <span className="mb-8 inline-flex items-center rounded-full border border-purple-700/50 bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
              <Sparkles className="mr-2 h-4 w-4" />
              Closed Beta Launching Soon
            </span>
          </div>

          <h1 className="mb-8 text-5xl leading-tight font-bold md:text-7xl">
            Turn{" "}
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Natural Language
            </span>
            <br />
            Into Stunning Animations
          </h1>

          <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            AI-powered Manim video generator that creates technical explainer
            videos from simple descriptions. No code or animation skills
            required.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex transform items-center rounded-xl bg-gradient-to-r from-purple-600 to-emerald-500 px-8 py-4 text-lg font-semibold transition-all hover:scale-105 hover:from-purple-700 hover:to-emerald-600 hover:shadow-2xl hover:shadow-purple-500/25">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              Try Demo Scene
            </button>
            <button className="flex items-center rounded-xl border-2 border-gray-600 px-8 py-4 text-lg font-semibold transition-all hover:border-purple-500 hover:bg-purple-500/10">
              <Video className="mr-2 h-5 w-5" />
              Watch Sample Animation
            </button>
          </div>

          {/* Demo Preview */}
          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-r from-purple-600/20 to-emerald-500/20 p-1">
              <div className="rounded-2xl bg-gray-800 p-8">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className="text-left">
                    <h3 className="mb-4 text-lg font-semibold text-purple-300">
                      Input Prompt:
                    </h3>
                    <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-emerald-300">
                      "Create an animation showing how a neural network
                      processes data through multiple layers"
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="mb-4 text-lg font-semibold text-emerald-300">
                      Generated Output:
                    </h3>
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-700">
                      <div className="flex items-center text-gray-400">
                        <Play className="mr-2 h-8 w-8" />
                        Video Preview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gray-800/50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              From educators to developers, PromptMotion makes technical
              animation accessible to all
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast Generation",
                description:
                  "Average render time under 60 seconds with 95%+ success rate",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI-Powered Scripts",
                description:
                  "GPT generates optimized Manim code from natural language descriptions",
                color: "from-purple-500 to-blue-500",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Rendering",
                description:
                  "Docker-based isolation ensures safe execution of generated code",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: <Code2 className="h-8 w-8" />,
                title: "Editable Code",
                description:
                  "Fine-tune generated scripts with our integrated CodeMirror editor",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant Download",
                description:
                  "MP4 output ready for immediate use in presentations and videos",
                color: "from-pink-500 to-red-500",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Scene History",
                description:
                  "Keep track of all your animations with comprehensive logs",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-700 bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-r p-3 ${feature.color} mb-6 transition-transform group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold transition-colors group-hover:text-purple-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 transition-colors group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Four simple steps from idea to animation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Describe Your Scene",
                description:
                  "Write a natural language description of the animation you want to create",
                icon: <MessageCircle className="h-6 w-6" />,
              },
              {
                step: "02",
                title: "AI Generates Code",
                description:
                  "Our AI converts your description into optimized Manim Python code",
                icon: <Brain className="h-6 w-6" />,
              },
              {
                step: "03",
                title: "Secure Rendering",
                description:
                  "Code runs safely in isolated Docker containers to generate your video",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                step: "04",
                title: "Download & Share",
                description:
                  "Get your MP4 video ready for presentations, YouTube, or social media",
                icon: <Download className="h-6 w-6" />,
              },
            ].map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-sm font-bold text-purple-300">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="absolute top-10 left-full hidden h-0.5 w-full bg-gradient-to-r from-purple-600 to-emerald-500 opacity-30 lg:block"></div>
                  )}
                </div>
                <h3 className="mb-4 text-xl font-semibold transition-colors group-hover:text-purple-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 transition-colors group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gray-800/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Built For{" "}
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Creators
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Whether you're teaching, explaining, or presenting, PromptMotion
              has you covered
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <GraduationCap className="h-12 w-12" />,
                title: "Technical Educators",
                description:
                  "YouTubers, instructors, and online course creators",
                examples: [
                  "Algorithm visualizations",
                  "Math concept explanations",
                  "Physics simulations",
                ],
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: <Laptop className="h-12 w-12" />,
                title: "Developers",
                description: "Engineers creating explainers and documentation",
                examples: [
                  "System architecture diagrams",
                  "API workflow animations",
                  "Database operations",
                ],
                color: "from-emerald-500 to-blue-500",
              },
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Students & Founders",
                description: "Learning and building educational products",
                examples: [
                  "Presentation visuals",
                  "Concept demonstrations",
                  "Product explainers",
                ],
                color: "from-purple-500 to-pink-500",
              },
            ].map((audience, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-700 bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:bg-gray-700"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-r p-4 ${audience.color} mb-6`}
                >
                  {audience.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold">
                  {audience.title}
                </h3>
                <p className="mb-6 text-gray-400">{audience.description}</p>
                <div className="space-y-2">
                  <p className="mb-3 text-sm font-medium text-purple-300">
                    Perfect for:
                  </p>
                  {audience.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-emerald-400" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Success{" "}
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Our targets for delivering exceptional user experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "< 60s",
                label: "Average Render Time",
                icon: <Clock className="h-8 w-8" />,
              },
              {
                number: "95%+",
                label: "Render Success Rate",
                icon: <Target className="h-8 w-8" />,
              },
              {
                number: "1,000+",
                label: "User-Submitted Scenes",
                icon: <Users className="h-8 w-8" />,
              },
              {
                number: "100+",
                label: "Active Creators",
                icon: <Sparkles className="h-8 w-8" />,
              },
            ].map((metric, index) => (
              <div key={index} className="group text-center">
                <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-500 p-8 transition-transform hover:scale-105">
                  <div className="mb-4 flex justify-center text-white transition-transform group-hover:scale-110">
                    {metric.icon}
                  </div>
                  <div className="mb-2 text-3xl font-bold text-white">
                    {metric.number}
                  </div>
                  <div className="text-purple-100">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section
        id="beta"
        className="bg-gradient-to-r from-purple-900/20 to-emerald-900/20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Beta
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
            Be among the first to experience the future of technical animation.
            Get early access and help shape the product.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mb-12 max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-gray-600 bg-gray-800 px-6 py-4 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="flex transform items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-emerald-500 px-8 py-4 font-semibold transition-all hover:scale-105 hover:from-purple-700 hover:to-emerald-600 disabled:transform-none disabled:opacity-50"
              >
                {isSubmitted ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <>
                    Join Beta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="text-sm text-gray-400">
            5–6 week MVP timeline • Targeting educators & dev communities
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default App;
