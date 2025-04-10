import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLeft: boolean;
  current?: boolean;
}

function TimelineItem({ date, title, description, isLeft, current = false }: TimelineItemProps) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className={`flex items-center ${isLeft ? 'md:w-1/2 md:justify-end md:pr-8' : 'md:order-2 md:w-1/2 md:justify-start md:pl-8'} z-10 mb-4 md:mb-0`}>
          <motion.div 
            className="glass gradient-border p-6 rounded-xl max-w-xs"
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block glass px-3 py-1 rounded-full text-xs text-secondary mb-3">
              {current && <span className="mr-2 bg-green-500 h-2 w-2 rounded-full inline-block"></span>}
              {date}
            </span>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-secondary">{description}</p>
          </motion.div>
        </div>
        <motion.div 
          className="absolute left-8 md:left-1/2 top-6 h-5 w-5 rounded-full bg-purple-500 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        <div className={`${isLeft ? 'md:order-2 md:w-1/2 md:pl-8' : 'md:w-1/2 md:pr-8'}`}></div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const timelineItems = [
    {
      date: "Current Release",
      title: "Beta Launch",
      description: "Initial release with core functionality including Enhance and Rephrase features.",
      isLeft: true,
      current: true
    },
    {
      date: "Q2 2023",
      title: "Agent Mode Release",
      description: "Introduction of the Agent feature for direct AI interaction within text fields.",
      isLeft: false
    },
    {
      date: "Q3 2023",
      title: "Custom Templates",
      description: "Save and reuse your favorite prompt structures for consistent results.",
      isLeft: true
    },
    {
      date: "Q4 2023",
      title: "Team Collaboration",
      description: "Share prompts and templates with team members for collaborative work.",
      isLeft: false
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-secondary text-lg">
            We're constantly working to make Promen better. Here's what we have planned for upcoming releases.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-lavender/30 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
                current={item.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
