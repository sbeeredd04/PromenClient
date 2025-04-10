import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simplify creating wave patterns for backgrounds
export function getRandomWavePattern(
  index: number,
  options = { brightness: 0.2, contrast: 1.5, hueRotate: 210 }
): string {
  const wavePaths = [
    "M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,64L40,96C80,128,160,192,240,192C320,192,400,128,480,122.7C560,117,640,171,720,176C800,181,880,139,960,138.7C1040,139,1120,181,1200,197.3C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
    "M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,213.3C672,245,768,267,864,256C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,266.7C672,267,768,245,864,240C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ];

  // Use index to pick a pattern or fallback to a default
  const path = wavePaths[index % wavePaths.length] || wavePaths[0];
  const { brightness, contrast, hueRotate } = options;

  return `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23462F9F' fill-opacity='0.7' d='${path}'/%3E%3C/svg%3E")`;
}

// For creating random 3D-looking wave backgrounds
export function createRandomGradient(): string {
  const colors = [
    "rgba(70, 47, 159, 0.7)",  // Purple
    "rgba(30, 32, 44, 0.8)",   // Navy
    "rgba(184, 184, 202, 0.3)" // Lavender
  ];
  
  const startColor = colors[Math.floor(Math.random() * colors.length)];
  const endColor = colors[Math.floor(Math.random() * colors.length)];
  
  return `linear-gradient(135deg, ${startColor}, ${endColor})`;
}

// Create keyboard shortcut display string
export function formatShortcut(shortcut: string): string {
  return shortcut;
}
