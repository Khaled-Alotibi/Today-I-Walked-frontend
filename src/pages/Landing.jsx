import DarkVeil from "@/components/DarkVeil";
function Landing() {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen h-screen flex flex-col items-center justify-center px-12 text-center gap-8">
        <blockquote className="space-y-8">
          <p className="text-4xl text-balance text-amber-100 ">
            I have <i>walked</i> myself into my best thoughts,
            <br />
            and I know of no thought so burdensome that one cannot walk away
            from it.
          </p>
          <footer className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-amber-100 " />
            <p className="text-lg text-muted-foreground italic">
              Søren Kierkegaard
            </p>
            <div className="h-px w-16 bg-amber-100" />
          </footer>
        </blockquote>

        <div className="flex flex-row gap-3 ">
          <button className="bg-orange-600 text-amber-100 px-9 py-4 rounded-2xl cursor-pointer">
            Get Started
          </button>
          <button className="bg-orange-600 text-amber-100 px-9 py-4 rounded-2xl cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
