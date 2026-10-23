import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Importing the button from your theme
import { Terminal } from "lucide-react"; // Importing a tech icon
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        // Kept the original logging logic, since it's useful for debugging
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (
    // Used 'bg-background' to make sure the background stays dark like the rest of the site
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      
      {/* Decorative circle with pulse animation */}
      <div className="p-6 rounded-full bg-primary/10 mb-6 animate-pulse">
        <Terminal className="h-12 w-12 text-primary"/>
      </div>

      <h1 className="text-4xl font-bold mb-2 text-foreground">404</h1>
      
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! It looks like the path <span className="text-primary font-mono bg-primary/10 px-1 rounded">{location.pathname}</span> doesn't exist.
      </p>

      {/* Styled button instead of a plain link */}
      <Link to="/">
        <Button className="bg-primary hover:bg-primary/80 transition-all duration-300">
          Back to Home
        </Button>
      </Link>
    </div>);
};
export default NotFound;
