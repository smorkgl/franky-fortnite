function Footer() {
    return (
      <footer class="page-footer green darken-1 ">
        <div class="container">
        </div>
        <div class="footer-copyright">
          <div class="container">
            © {new Date().getFullYear()} Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">https://github.com/smorkgl/</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export { Footer }