import type { ReactNode } from "react";
import { FileText, Network, Sparkles } from "lucide-react";

interface AuthPageShellProps {
  children: ReactNode;
  heading: string;
  supportingText: string;
}

export function AuthPageShell({
  children,
  heading,
  supportingText,
}: AuthPageShellProps) {
  const featureItems = [
    {
      icon: Sparkles,
      title: "AI Architecture Generation",
      body: "Describe your system, then map it into nodes and edges on a live canvas.",
    },
    {
      icon: Network,
      title: "Real-time Collaboration",
      body: "Live cursors, presence indicators, and shared node editing across your team.",
    },
    {
      icon: FileText,
      title: "Instant Spec Generation",
      body: "Export a complete Markdown technical spec directly from the canvas graph.",
    },
  ];

  return (
    <main className="grid min-h-dvh bg-base lg:grid-cols-2">
      <section className="hidden min-h-dvh border-r border-surface-border bg-surface px-10 py-8 lg:flex lg:flex-col xl:px-14">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-brand/30 bg-brand text-xs font-bold text-background shadow-lg shadow-black/20">
            G
          </div>
          <div className="text-base font-semibold tracking-tight text-copy-primary">
            Ghost AI
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center pb-10">
          <h1 className="max-w-[38rem] text-4xl font-semibold leading-tight tracking-normal text-copy-primary xl:text-[3rem]">
            {heading}
          </h1>
          <p className="mt-7 max-w-[34rem] text-base leading-8 text-copy-muted">
            {supportingText}
          </p>

          <ul className="mt-16 space-y-8">
            {featureItems.map(({ icon: Icon, title, body }) => (
              <li className="flex gap-5" key={title}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand-dim text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-copy-secondary">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-copy-muted">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-copy-faint">
          Copyright 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex min-h-dvh items-center justify-center bg-base px-5 py-8 sm:px-8">
        <div className="w-full max-w-[34rem]">{children}</div>
      </section>
    </main>
  );
}
