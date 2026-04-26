import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(82,220,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(60,166,187,0.14),transparent_30%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent/15 border border-accent/30 px-4 py-2 text-sm text-muted-foreground">
            AI Resume Builder for modern job seekers
          </div>

          <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            Build a resume that feels made for the job.
          </h1>

          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            RescuMe helps users create polished, ATS-friendly resumes with AI guidance,
            fast editing, and clean export-ready layouts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#preview"
            >
                <Button
                    variant="default"
                    className="h-12 px-6"
                >
                    Start building
                </Button>
            </Link>
            <Link
              href="#features"
            >
                <Button
                    variant="outline"
                    className="h-12 px-6"
                >
                    See features
                </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <div id="preview" className="relative rounded-3xl border bg-card p-4 shadow-sm">
            <span className="absolute right-36 top-1 rounded-full bg-foreground text-card shadow-xl shadow-accent/50 px-3 py-1">Fast setup</span>
            <span className="absolute left-12 bottom-14 rounded-full bg-foreground text-card shadow-xl shadow-accent/50 px-3 py-1">ATS-friendly</span>
            <span className="absolute right-5 bottom-34 w-max rounded-full bg-foreground text-card shadow-xl shadow-accent/50 px-3 py-1">AI-assisted writing</span>
            
            <div className="rounded-2xl border bg-muted p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Resume preview</p>
                  <p className="text-sm text-muted-foreground">Clean, modern, export-ready</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>

              <div className="space-y-4">
                <div className="h-4 w-2/3 rounded-full bg-foreground/10" />
                <div className="h-3 w-full rounded-full bg-foreground/10" />
                <div className="h-3 w-5/6 rounded-full bg-foreground/10" />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="h-24 rounded-2xl bg-background" />
                  <div className="h-24 rounded-2xl bg-background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}