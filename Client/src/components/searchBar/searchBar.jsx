import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../../redux/actions';
import styles from '../searchBar/searchBar.module.css'
import { BiSearchAlt2 } from 'react-icons/bi';


export default function SearchBar({ setPage }) {
    const [search, setSearch] = useState('')

    let dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault();
        dispatch(searchRecipes(search));
        setSearch('');
        setPage(1);
    }


    function onInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }


    return (
       
        <div class={`input-group mb-3 ${styles.conteinerSearch}`} >
            <input type="text" class="form-control" placeholder="Search recipe..." onChange={onInputChange} value={search} aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={event=> onSubmit(event)}> <BiSearchAlt2></BiSearchAlt2></button>
        </div>
    )
}