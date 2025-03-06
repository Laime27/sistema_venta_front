"use client"

import { Card } from "@/components/ui/card"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

import DashboardSidebar from "@/modulos/layouts/sidebar"
import DashboardHeader from "@/modulos/layouts/header"

import { Outlet } from "react-router-dom";

import React, { Children } from "react"

export default function Dashboard() {

  React.useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
             <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}


function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto p-4 sm:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="h-40" />
        <Card className="h-40" />
        <Card className="h-40" />
      </div>
      <div className="mt-6">
        <Card className="h-[calc(100vh-16rem)]" />
      </div>
    </main>
  )
}

