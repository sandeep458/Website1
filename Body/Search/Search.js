import React from 'react'
import "./Search.css";
import hero from "../../../Images/hero.jpg";
function Search() {
    return (
        <div>
            <div className = "imageHolder">
                <img src = {hero}alt={""}></img>
     <form class="example" action="/action_page.php">
  <input type="text" placeholder="Search.." name="search"></input>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
            </div>
           
        </div>
    );
}

export default Search;
