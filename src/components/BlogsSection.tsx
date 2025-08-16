import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of STEM Education in Schools",
      excerpt:
        "Exploring how modern technology and innovative teaching methods are revolutionizing science education.",
      author: "Dr. Sarah Johnson",
      date: "2024-03-15",
      category: "Education",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Building Character Through Extracurricular Activities",
      excerpt:
        "How sports, arts, and community service shape student personality and leadership skills.",
      author: "Prof. Michael Chen",
      date: "2024-03-10",
      category: "Student Life",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Preparing Students for Digital Citizenship",
      excerpt:
        "Teaching responsible technology use and digital literacy in the modern classroom.",
      author: "Ms. Emily Rodriguez",
      date: "2024-03-08",
      category: "Technology",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "The Importance of Mental Health in Education",
      excerpt:
        "Creating supportive environments that prioritize student well-being and emotional growth.",
      author: "Dr. James Wilson",
      date: "2024-03-05",
      category: "Wellness",
      readTime: "7 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Education",
    "Student Life",
    "Technology",
    "Wellness",
  ];

  return (
    <section id="blogs" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Latest{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest in education, student life, and
            institutional developments. Discover insights from our educators and
            thought leaders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <Card
              key={post.id}
              className="card-educational mb-12 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image placeholder */}
                  <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground">Featured Article</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="bg-accent text-accent-foreground mb-4 w-fit">
                      Featured
                    </Badge>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-lg">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <Button className="btn-hero w-fit group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card key={post.id} className="card-educational group">
                <CardContent className="p-6">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary/40" />
                  </div>

                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>

                  <h4 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates,
            educational insights, and news from Al Imran Group of Institutions
            "JJ High School".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
