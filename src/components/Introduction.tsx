import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Introduction() {
  return (
    <section id="about" className="py-24 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Software Engineer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Passionate about creating elegant solutions to complex problems. Specialized in full-stack development
          with expertise in React, Node.js, and cloud technologies.
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="mailto:contact@example.com">
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </a>
        </Button>
      </div>
      <Card className="mt-8">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
          alt="Coding workspace with laptop and coffee"
          className="w-full h-[300px] object-cover rounded-t-lg"
          loading="lazy"
        />
      </Card>
    </section>
  );
}