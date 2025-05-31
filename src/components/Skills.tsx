import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Globe, Layout } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    skills: ['Node.js', 'Express', 'Python', 'Java'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Globe,
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold tracking-tighter mb-12">Technical Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}