/**
 * Componente que maneja la entada de texto para el filtro de nombres
 */

const Filter = ({ searchName, handleSearchName }) => (
    <div>
        Filter shown with <input value={searchName} onChange={handleSearchName} />
    </div>
);

export default Filter;
