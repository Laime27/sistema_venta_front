
import {
    Bell,
    Calendar,
    ChevronDown,
    Home,
    Inbox,
    Layers,
    LogOut,
    Menu,
    MessageSquare,
    Moon,
    PieChart,
    Search,
    Settings,
    Sun,
    User,
    Users,
  } from "lucide-react"
  
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"

    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
      } from "@/components/ui/dropdown-menu"
    
      import {
        useSidebar,
      } from "@/components/ui/sidebar"

      import React from "react"

function DashboardHeader() {

    const { toggleSidebar } = useSidebar()
    const [isDarkMode, setIsDarkMode] = React.useState(false)
  
    // Toggle dark mode
    const toggleDarkMode = () => {
      const newMode = !isDarkMode
      setIsDarkMode(newMode)
  
      // Add or remove dark class from document
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  
    return (
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:max-w-sm" />
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
  
          {/* Dark mode toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
  
          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    )
  }

 export default DashboardHeader;

