import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Add your details",
    description:
      "Users enter their basic info, work history, education, and skills in a simple guided flow.",
  },
  {
    icon: Sparkles,
    title: "Let AI improve it",
    description:
      "RescuMe suggests stronger wording, cleaner bullet points, and better resume structure.",
  },
  {
    icon: Download,
    title: "Export and apply",
    description:
      "The final resume can be previewed, refined, and exported when it is ready to send out.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(82,220,255,0.18),transparent_40%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            How it works
          </Badge>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:leading-11 sm:text-4xl">
            A simple flow that guides users from blank page to polished resume.
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Keep the experience short, clear, and confidence-building. The goal is to make
            resume building feel less stressful.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.title}
                className="rounded-3xl gap-2 border-border/70 bg-card shadow-sm"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted-foreground">
                      0{index + 1}
                    </span>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}