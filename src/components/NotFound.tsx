const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-white text-center">
      <h1 className="text-6xl font-bold mb-4">¡Oops!</h1>
      <p className="text-2xl mb-6">La página que buscas no existe.</p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black rounded-lg font-semibold shadow hover:scale-105 transition-all"
      >
        Volver al inicio
      </a>
    </div>
  );
};

export default NotFound;
