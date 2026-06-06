"use client"

import { useRef, useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export function EditorWorkspaceShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navToggleRef = useRef<HTMLButtonElement>(null)

  return (
    <main className="relative min-h-dvh overflow-hidden bg-base pt-14">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((current) => !current)}
        navToggleRef={navToggleRef}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navToggleRef={navToggleRef}
      />

      <section className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center px-6">
        <div className="rounded-2xl border border-surface-border bg-surface/60 px-6 py-5 text-center backdrop-blur">
          <p className="text-sm font-medium text-copy-secondary">
            Editor canvas shell
          </p>
          <p className="mt-2 text-xs text-copy-muted">
            The reusable editor chrome is ready for the canvas implementation.
          </p>
        </div>
      </section>
    </main>
  )
}
