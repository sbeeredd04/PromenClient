import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  usage: z.string().min(1, { message: "Please select how you plan to use prom10." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function BetaSignupSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      usage: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      console.log('Form data:', data);
      setIsSubmitting(false);
      
      toast({
        title: "Registration successful!",
        description: "You've been added to our beta program waiting list.",
      });
      
      form.reset();
    }, 1500);
  };

  const benefits = [
    "Early access to all features",
    "Provide feedback that shapes development",
    "Premium features free during beta period"
  ];

  return (
    <section id="beta" className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <motion.div 
          className="glass gradient-border p-8 md:p-12 rounded-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                Join Our <span className="gradient-text">Beta</span>
              </h2>
              <p className="text-secondary text-lg mb-8">
                Be among the first to experience prom10 and help shape its future. Sign up for our beta program today.
              </p>
              <ul className="space-y-3 text-secondary mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary">Name</FormLabel>
                        <FormControl>
                          <Input 
                            glassmorphism 
                            placeholder="Your name" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary">Email</FormLabel>
                        <FormControl>
                          <Input 
                            glassmorphism 
                            type="email" 
                            placeholder="Your email" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="usage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary">How do you plan to use prom10?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger glassmorphism className="w-full">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="writing">Content Writing</SelectItem>
                            <SelectItem value="coding">Programming/Coding</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                            <SelectItem value="personal">Personal Use</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="gradient" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Join Beta Program"}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-secondary mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
