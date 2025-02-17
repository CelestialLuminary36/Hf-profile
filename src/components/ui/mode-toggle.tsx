import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button" // 需要创建一个自己的 Button 组件
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ModeToggle = () => {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme") || "system")

  useEffect(() => {
    // Set theme on page load
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Store the theme in localStorage
    localStorage.setItem("theme", theme || "system")
  }, [theme])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle
