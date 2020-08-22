import React from "react";
import {Link,BrowserRouter as Router} from "react-router-dom";
import {language} from "../language";
function Layout({children}){
 return (
    <Router>
         <div className="container">
             <header>
                 <div className="title">
                     <img src="/images/world.svg" width="32" height="32"/>
                     <Link to="/">{language.title}</Link>
                 </div>
                 <nav>
                     <ul>
                         <li><img src="/images/github.svg" width="16" height="16"/> <a href="https://github.com/ilyasbat">{language.github}</a></li>
                         <li><img src="/images/youtube.svg" width="16" height="16"/> <a href="https://www.youtube.com/channel/UCfNGJmeuzO-KHHALUeFeyWw"> {language.youtube}</a></li>

                     </ul>
                 </nav>
             </header>
             <section className="content">
                 {children}
             </section>
             <footer>
                 <div className="text">&copy; {language.year} {language.thanks}</div>
                 <div className="links">
                     <a href="https://www.flaticon.com/">{language.flaticon}</a> /
                     <a href="https://restcountries.eu/">{language.restcountries}</a> /
                     <a href="https://www.psdgraphics.com/backgrounds/world-map-background/">{language.psdgraphic}</a>
                 </div>
             </footer>
         </div>
    </Router>
 )
}
export default Layout
