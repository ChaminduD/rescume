import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutTemplate, Sparkles, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI writing that feels natural",
    description:
      "Help users generate strong resume text without sounding robotic or overstuffed.",
  },
  {
    icon: LayoutTemplate,
    title: "Clean ATS-friendly layouts",
    description:
      "Offer simple resume structures that stay readable for both humans and applicant systems.",
  },
  {
    icon: ShieldCheck,
    title: "Guided improvements",
    description:
      "Suggest better bullet points, stronger skills, and clearer summaries as users edit.",
  },
  {
    icon: Zap,
    title: "Fast export and updates",
    description:
      "Keep the editing flow quick so users can build, refine, and export without friction.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(60,166,187,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(82,220,255,0.18),transparent_40%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            Features
          </Badge>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:leading-11 sm:text-4xl">
            Everything focused on helping users build a better resume faster.
          </h2>

          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            RescuMe should feel simple on the surface, but powerful underneath. The
            design should guide users without making them think too much.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-border/70 bg-card shadow-sm transition-transform hover:-translate-y-1"
              >
                <CardHeader className="space-y-4 md:flex md:items-start md:gap-6">
                  <div className="bg-primary/10 h-auto md:h-full max-w-40 rounded-2xl">
                    <div className="flex h-12 w-12 md:shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}