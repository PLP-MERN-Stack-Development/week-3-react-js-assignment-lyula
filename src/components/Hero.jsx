function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center py-12 px-4 mb-1">
      <h1 className="text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg">
        Welcome to Your Modern React App
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Manage tasks, explore API data, and enjoy a beautiful, responsive UI with light/dark mode.
      </p>
      <div className="flex justify-center gap-4 mb-0">
        <a href="/api" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition text-lg">
          Explore API
        </a>
        <a href="/" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-bold shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition text-lg">
          Manage Tasks
        </a>
      </div>
    </section>
  );
}

export default Hero;