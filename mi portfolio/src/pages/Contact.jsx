 function Contact() {
    return (
      <main>
        <h1>Contacto</h1>
        <form>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu email" />
          <textarea placeholder="Tu mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </main>
    );
  }
  
  export default Contact