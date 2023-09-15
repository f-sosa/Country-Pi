import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Countries.css";
import { getCountries } from "../../redux/actions";
import Country from "../Country/Country";
import Filter from "../Filters/Filter";

const Countries = () => {
  const dispacth = useDispatch();

  const countries = useSelector((state) => state.countriesFilter);

 
  //Se ejecuta solamente una sola vez
  useEffect(() => {
    dispacth(getCountries());
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = countries.slice(firstIndex, lastIndex);
  const npage = Math.ceil(countries.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
     
    <div className="countries">
      
      <Filter/>
      <br />
      <div className="content">
      {records.map((country) => {

          return (
            <Country
              key = {country.id}
              id = {country.id}
              name = {country.name}
              image = {country.image}
              continent = {country.continent}
            />
          );
      })}
      </div>
      <br />
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link"        
            onClick={prevPage}>Prev</a>
          </li>
          {
  numbers.map((n, i) => (
    <li className={`page-item  ${currentPage === n ? 'active' : ''}`} key={i}>
      <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>             
    </li>
  ))
}
           <li className="page-item">
            <a href="#" className="page-link"        
            onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );

function prevPage() {
if(currentPage !== firstIndex) {
  setCurrentPage(currentPage - 1);
}
}

function changeCPage (id) {
setCurrentPage(id);
}

function nextPage() {
if(currentPage !== lastIndex) {
  setCurrentPage(currentPage + 1);
}
}

};
export default Countries;
