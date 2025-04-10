import React, { useState, useEffect } from 'react';
import { Home, Info, Layers, Play, FileCheck, Download, Book } from 'lucide-react';
import { Link } from 'wouter';

interface SidebarProps {
  activeSectionId: string;
}

export default function Sidebar({ activeSectionId }: SidebarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: <Home className="sidebar-icon" /> },
    { id: 'why', name: 'Why Promen', icon: <Info className="sidebar-icon" /> },
    { id: 'how', name: 'How It Works', icon: <Play className="sidebar-icon" /> },
    { id: 'features', name: 'Features', icon: <Layers className="sidebar-icon" /> },
    { id: 'roadmap', name: 'Roadmap', icon: <FileCheck className="sidebar-icon" /> },
    { id: 'beta', name: 'Join Beta', icon: <Download className="sidebar-icon" /> },
  ];

  // Function to scroll to a section when clicking on sidebar item
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed left-0 top-0 bottom-0 w-20 md:w-64 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-95' : 'opacity-100'
      }`}
    >
      <div className="glass h-full flex flex-col px-2 py-8 overflow-hidden">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start px-4 mb-8">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
            <div className="h-8 w-8 bg-white/90 rounded-sm flex items-center justify-center">
              P
            </div>
          </div>
          <h1 className="hidden md:block text-2xl font-bold ml-3 tracking-tight">Promen</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <div
                  className={`sidebar-item ${activeSectionId === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span className="hidden md:block">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Links */}
        <div className="mt-auto space-y-2">
          <div className="sidebar-item">
            <Book className="sidebar-icon" />
            <span className="hidden md:block">Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
}