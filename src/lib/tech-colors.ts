export const techColors: Record<string, string> = {
  "javascript": "#F7DF1E",
  "js": "#F7DF1E",
  "typescript": "#3178C6",
  "ts": "#3178C6",
  "react": "#61DAFB",
  "react.js": "#61DAFB",
  "reactjs": "#61DAFB",
  "next.js": "var(--color-nextjs)",
  "nextjs": "var(--color-nextjs)",
  "node.js": "#68A063",
  "nodejs": "#68A063",
  "node": "#68A063",
  "express": "var(--color-express)",
  "express.js": "var(--color-express)",
  "tailwind css": "#06B6D4",
  "tailwindcss": "#06B6D4",
  "tailwind": "#06B6D4",
  "postgres": "#4169E1",
  "postgresql": "#4169E1",
  "supabase": "#3ECF8E",
  "prisma": "#5A67D8",
  "testing": "#C21325",
  "jest": "#C21325",
  "ci/cd": "#2088FF",
  "github actions": "#2088FF",
  "githubactions": "#2088FF",
  "web vitals": "#F44B21",
  "lighthouse": "#F44B21",
  "a11y": "#1A73E8",
  "accessibility": "#1A73E8",
  "swr": "#0070f3",
  "java": "#007396",
  "python": "#3776AB",
  "html": "#E34F26",
  "html5": "#E34F26",
  "css": "#1572B6",
  "css3": "#1572B6",
  "sql": "#4479A1",
  "mysql": "#4479A1",
  "mongodb": "#13AA52",
  "git": "#F05032",
  "github": "var(--color-github)",
  "vs code": "#007ACC",
  "vscode": "#007ACC",
  "postman": "#FF6C37",
  "notion": "var(--color-notion)",
  "figma": "#F24E1E",
  "jwt": "#FB015B",
  "bcrypt": "#3B5998",
  "webrtc": "#FF5722",
  "socket.io": "var(--color-socketio)",
  "websocket": "#0055ff",
  "cursor": "#38BDF8",
  "antigravity": "#D946EF",
  "gitlab": "#FC6D26",
  "google cloud": "#4285F4",
  "googlecloud": "#4285F4",
  "render": "#ffffff",
  "vercel": "var(--color-vercel)",
  "firebase": "#FFCA28",
  "cloudinary": "#3448C5",
  "netlify": "#00C7B7",
}

export function getTechColor(name: string): string | undefined {
  const cleanName = name.toLowerCase().trim()
  
  // Direct match
  if (techColors[cleanName] !== undefined) {
    return techColors[cleanName]
  }
  
  // Fuzzy match: check if the input contains a known key or vice versa
  for (const [key, val] of Object.entries(techColors)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return val
    }
  }
  
  return undefined
}
