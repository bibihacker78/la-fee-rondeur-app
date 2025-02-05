import React from "react";

const Trier = () => {

    return (
        <div className="trie">   
       
            <div className="col-6" id="section-trie">
            <h3>Sirop</h3>
            <div className="navigation " >
            <nav class="woocommerce-breadcrumb breadcrumbs ">
            <a href="#">Accueil</a> 
            <span class="divider"> / </span> <a href="#">Sirop</a> 
            <span class="divider"> / </span> Démaquillant 
            </nav>
            </div>
            </div>

           <div className="col-4"> 
            <form action="" className="section-trie2" >
                <label for="trier">Trier par:</label>
                <select id="trier" name="trier">
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="name-asc">Nom croissant</option>
                    <option value="name-desc">Nom décroissant</option>
                </select>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16"></svg>
                </span>

            </form>
           </div>
           
        
    
            
        </div>
    );
};

export default Trier;