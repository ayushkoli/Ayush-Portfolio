import Section from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"

export default function Stats() {
  return (
    <Section id="stats">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Coding Activity</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Contributions Graph */}
        <Card className="border border-border/60 bg-card hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">GitHub Contributions</h3>
              <a 
                href="https://github.com/ayushkoli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View Profile →
              </a>
            </div>
            <div className="flex flex-col justify-center items-center bg-black rounded-lg p-4 overflow-hidden">
              <img
                src={`https://ghchart.rshah.org/ayushkoli`}
                alt="GitHub Contribution Calendar"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* LeetCode Stats */}
        <Card className="border border-border/60 bg-card hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">LeetCode Progress</h3>
              <a 
                href="https://leetcode.com/u/ayushkoli/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View Profile →
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center bg-muted/30 rounded-lg p-4 min-h-[200px]">
                <img
                  src="https://leetcard.jacoblin.cool/ayushkoli?theme=dark&font=Inter"
                  alt="LeetCode Stats"
                  className="w-full h-auto max-w-md"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="text-center text-muted-foreground">
                          <p class="text-lg mb-2">LeetCode Profile</p>
                          <a href="https://leetcode.com/u/ayushkoli/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                            View on LeetCode
                          </a>
                        </div>
                      `
                    }
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
