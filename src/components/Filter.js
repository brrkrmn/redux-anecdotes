import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()
    const onFilterChange = (event) => {
        const filter = event.target.value
        dispatch(filterChange(filter))
    }
    return (
        <>
            <h2>Filter</h2>
            <input 
                name="filter"
                onChange={onFilterChange}
            />
        </>
    )
}

export default Filter