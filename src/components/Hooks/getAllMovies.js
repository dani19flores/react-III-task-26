import { useEffect, useState } from "react";
import axios from "axios";

const useAllMovies = (url, filterFunction) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setResponse(res.data);
                setLoading(false);
            } catch(err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    useEffect(() => {
        if (response) {
            const filtered = response.filter(filterFunction);
            setFilteredData(filtered);
        }
    }, [response, filterFunction]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm && response) {
            const filtered = response.filter(item =>
                filterFunction(item).toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchTerm, response, filterFunction]);

    return { loading, error, filteredData, handleSearch, searchTerm };
};

export default useAllMovies;
