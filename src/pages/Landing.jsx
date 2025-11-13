import { Link } from "react-router";
function Landing() {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center gap-6 sm:gap-8">
        <blockquote className="space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance text-amber-100 px-2">
            I have <i>walked</i> myself into my best thoughts,
            <br />
            and I know of no thought so burdensome that one cannot walk away
            from it.
          </p>
          <footer className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-8 sm:w-12 md:w-16 bg-amber-100 " />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic">
              Søren Kierkegaard
            </p>
            <div className="h-px w-8 sm:w-12 md:w-16 bg-amber-100" />
          </footer>
        </blockquote>

        <div className="flex flex-row gap-2 sm:gap-3">
          <Link
            to="/Signup"
            className="bg-orange-600 text-amber-100 px-3 sm:px-6 md:px-7 lg:px-9 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            Get Started
          </Link>
          <Link
            to="AboutUs"
            className="bg-orange-600 text-amber-100 px-3 sm:px-6 md:px-7 lg:px-9 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
