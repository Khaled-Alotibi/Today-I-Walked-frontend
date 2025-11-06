export default function AboutUs() {
  return (
    <div className="h-screen w-screen text-amber-100 flex justify-center items-center">
      <div className="flex flex-col w-2/3 h-2/3 gap-3 justify-start p-6 bg-stone-900 rounded-xl  border-orange-500 border">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

        <p className="text-lg ">
          This project was built as a learning experience. The goal is to
          practice full-stack development, connect a React front end with a
          Django REST API, and get hands-on experience with features like
          authentication, posting, liking, and working with a real database.
        </p>

        <p className="italic text-sm mt-auto text-center opacity-70">
          Thanks for visiting
        </p>
      </div>
    </div>
  );
}
