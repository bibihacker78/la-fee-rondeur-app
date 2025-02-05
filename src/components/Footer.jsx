import React from "react";
 
function Footer(props) {
    return (

      <footer>
        <div className="footer">
        <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-start">
        <h5>Aide</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Suivre ma commande</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Délai de livraison</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aide & question</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Avis clients</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Blog & conseils</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 mb-3 text-start">
        <h5>La fée de la forme guitare</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">À propos</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Nos boutiques</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Nous regoindre</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentions légales</a></li>

        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form >
          <h5>Newsletter</h5>
          <p className="mb-2">Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives, promotions et être au courant des nouveautés.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input type="email" id="newsletter1" class="form-control" placeholder="Email" required />
            <button  type="button">S'INSCRIRE</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© {new Date().getFullYear()} La Fée De La Forme Guitare.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-tiktok"></i></a></li>
      </ul>
    </div>
  </footer>
</div>
       
</div>

        

      </footer>
      

        
    )  
}


export default Footer;
