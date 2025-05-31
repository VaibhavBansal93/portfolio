import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led development of microservices architecture, improving system scalability by 300%.',
  },
  {
    title: 'Software Engineer',
    company: 'StartupX',
    period: '2018 - 2020',
    description: 'Developed and maintained full-stack applications using React and Node.js.',
  },
  {
    title: 'Junior Developer',
    company: 'DevCo',
    period: '2016 - 2018',
    description: 'Contributed to frontend development and implemented responsive designs.',
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