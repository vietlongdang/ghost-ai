"use client"

import { type RefObject } from "react"
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  navToggleRef?: RefObject<HTMLButtonElement | null>
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  navToggleRef,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="fixed inset-x-0 top-0 z-40 grid h-14 grid-cols-[1fr_auto_1fr] items-center border-b border-surface-border bg-surface/90 px-4 backdrop-blur-xl">
      <div className="flex items-center justify-start">
        <Button
          ref={navToggleRef}
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          onClick={onToggleSidebar}
          size="icon"
          type="button"
          variant="ghost"
        >
          <SidebarIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-sm font-medium tracking-wide text-copy-secondary">
          Ghost AI
        </span>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Show when="signed-out">
          <SignInButton>
            <Button size="sm" type="button" variant="ghost">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="sm" type="button">
              Sign up
            </Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}
