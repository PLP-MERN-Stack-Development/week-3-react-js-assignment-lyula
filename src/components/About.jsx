function About() {
  return (
    <section className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mt-12 mb-16 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">
        About This Project
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
        <span className="font-bold">Modern Task Manager</span> is a responsive
        React application built with Vite and styled using Tailwind CSS. It
        demonstrates best practices in component architecture, state management,
        hooks, and API integration.
      </p>
      <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li>✅ Add, complete, and filter your tasks with a beautiful UI</li>
        <li>✅ Explore live data from a public API with search and pagination</li>
        <li>✅ Enjoy seamless light/dark mode switching</li>
        <li>✅ Fully responsive and mobile-friendly design</li>
      </ul>
      <p className="text-md text-gray-500 dark:text-gray-400">
        Created by{" "}
        <a
          href="https://github.com/lyula"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Zack Lyula
        </a>{" "}
        as a demonstration of modern React and Tailwind CSS development.
      </p>
    </section>
  );
}

export default About;