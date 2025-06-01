import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Introduction() {
  return (
    <section id="about" className="py-24 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Vaibhav Bansal
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          With 4+ years of conjuring code, I'm the backstage sorcerer spinning backend systems that blaze, defy chaos, and hum like a cosmic symphony. I revel in morphing knotty logic into nimble microservices, weaving third-party spells, and keeping the digital realm purring. If it scales like a supernova and never stumbles, I'm cackling with glee in the shadows!
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/VaibhavBansal93" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://linkedin.com/in/vaibansal" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="mailto:bansalvaibhav142@gmail.com">
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