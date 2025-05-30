const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  