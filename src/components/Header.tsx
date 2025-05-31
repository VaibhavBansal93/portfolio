import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-4">
        <nav className="flex-1">
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
                Experience
              </a>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}