import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'Software Deveolopment Engineer II',
    company: 'Microsoft, Windows Cross Device Platform',
    period: 'April 2025 - Present',
    description: 'Powering smarter devices with real-time magic using a low-latency context-sharing platform (DCF) over BLE! Crafting cool features for seamless discovery, fast data, and battery-friendly vibes across Android & Windows!',
  },
  {
    title: 'Software Deveolopment Engineer II',
    company: 'Lowe\'s India Pvt Ltd - Payments Platform',
    period: 'June 2024 - March 2025',
    description: 'Developed a high-throughput, event-driven Checks API to manage payments, SKUs, and private label workflows using Spring Boot and Reactor. Enhanced it with multi-tender support and contract sync with Synchrony, ensuring scalability and smooth orchestration.',
  },
  {
    title: 'Associate Software Engineer',
    company: 'Lowe\'s India Pvt Ltd - Payments Platform',
    period: 'August 2021 - May 2024',
    description: 'Spearheaded the shift from IBM DataPower to open-source KONG, unlocking smoother, secure connectivity and faster issue resolution without vendor roadblocks. Built real-time, PCI-compliant data pipelines and helped launch the EzApply API to streamline credit card sign-ups and elevate the self-checkout experience.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold tracking-tighter mb-12">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <div className="text-sm text-muted-foreground">
                {exp.company} • {exp.period}
              </div>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}