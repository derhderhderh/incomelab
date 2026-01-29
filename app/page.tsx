"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/lib/auth-context"
import { getFeaturedCourses, courses } from "@/lib/courses"
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Zap,
  CheckCircle,
  Play,
} from "lucide-react"

function LandingContent() {
  const featuredCourses = getFeaturedCourses()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                Build AI-Powered Income
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
                Transform Your Skills Into
                <span className="block text-accent"> Sustainable Revenue</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Expert-led courses designed to help you build AI-powered income streams. Learn from real entrepreneurs who have built successful businesses.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="gap-2">
                  <Link href="/courses">
                    Browse Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                  <Link href="#features">
                    <Play className="h-4 w-4" />
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">6+</div>
                <div className="mt-1 text-sm text-muted-foreground">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="mt-1 text-sm text-muted-foreground">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="mt-1 text-sm text-muted-foreground">Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">Lifetime Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Courses</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start building your AI-powered income with our most popular courses
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose IncomeLab?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to succeed in the AI economy
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 bg-card shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Expert Content</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn from entrepreneurs who have built real AI businesses
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Action-Oriented</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Practical lessons designed to get you results fast
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Community</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Connect with other learners and share your progress
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-card shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Proven Results</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Join students who have built successful income streams
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Learn What Fits Your Goals</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose from a variety of topics to match your interests
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "AI Business", count: 2, icon: Zap },
                { title: "Development", count: 1, icon: BookOpen },
                { title: "Freelancing", count: 1, icon: Users },
                { title: "Finance", count: 1, icon: Trophy },
                { title: "Beginner", count: 1, icon: Play },
              ].map((category) => (
                <Link
                  key={category.title}
                  href="/courses"
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <category.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} course{category.count > 1 ? "s" : ""}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pay once, access forever. No subscriptions.
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-3">
                {courses.slice(0, 3).map((course) => (
                  <Card key={course.id} className={course.isFeatured ? "border-accent shadow-lg" : ""}>
                    <CardContent className="p-6">
                      {course.isFeatured && (
                        <Badge className="mb-4 bg-accent text-accent-foreground">Most Popular</Badge>
                      )}
                      <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-foreground">${course.price}</span>
                        <span className="text-muted-foreground"> one-time</span>
                      </div>
                      <ul className="mt-6 space-y-3">
                        {course.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full" variant={course.isFeatured ? "default" : "outline"} asChild>
                        <Link href={`/course/${course.id}`}>Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-foreground p-8 sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-background sm:text-4xl">
                  Ready to Build Your AI Income?
                </h2>
                <p className="mt-4 text-lg text-background/80">
                  Join thousands of students who are transforming their skills into sustainable revenue streams.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild className="gap-2">
                    <Link href="/register">
                      Start Learning Today
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function HomePage() {
  return (
    <AuthProvider>
      <LandingContent />
    </AuthProvider>
  )
}
