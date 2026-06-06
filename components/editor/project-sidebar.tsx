"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose?: () => void
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border-subtle bg-surface-subtle/40 px-6 text-center">
      <p className="text-sm font-medium text-copy-secondary">{label}</p>
      <p className="mt-2 max-w-52 text-xs leading-5 text-copy-muted">
        Projects will appear here once this workspace is connected to project
        data.
      </p>
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      inert={!isOpen ? "" : undefined}
      className={cn(
        "fixed left-4 top-[4.5rem] z-30 flex h-[calc(100vh-5rem)] w-[20rem] flex-col rounded-2xl border border-surface-border bg-surface/90 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]"
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-copy-primary">
          Projects
        </h2>
        <Button
          aria-label="Close project sidebar"
          onClick={onClose}
          size="icon-sm"
          type="button"
          variant="ghost"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs className="min-h-0 flex-1" defaultValue="my-projects">
        <TabsList className="grid w-full grid-cols-2 bg-surface-subtle">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="my-projects">
          <EmptyProjectState label="No personal projects yet" />
        </TabsContent>
        <TabsContent className="mt-4" value="shared">
          <EmptyProjectState label="No shared projects yet" />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 w-full" type="button">
        <Plus className="h-4 w-4" />
        New Project
      </Button>
    </aside>
  )
}
