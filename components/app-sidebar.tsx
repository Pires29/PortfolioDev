"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Github,
  Linkedin,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"


import { FaGithub, FaLinkedin } from "react-icons/fa";


import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "about.html",
      url: "#landing",
      icon: SquareTerminal,
      image: "/html5-logo.png",
      isActive: true,
    },
    {
      title: "skills.css",
      url: "#landing",
      icon: Bot,
      image: "/css_icon.png",
    },
    {
      title: "projects.js",
      url: "#projects",
      icon: BookOpen,
      image: "/js.png",
    },
    {
      title: "contactos.json",
      url: "#contactos",
      icon: Settings2,
      image: "/json.png",
    },
  ],
  navSecondary: [
    {
      title: "Github",
      url: "https://github.com/Pires29",
      icon: Github,
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/renato-pires-580a51266/",
      icon: Linkedin,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}
