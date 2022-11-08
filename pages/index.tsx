import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

import { Container, Header, SearchInput, SearchResults } from '../components';
import { shuffleArray } from 'utils';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (e: any) => {
        setSearchTerm(e.target.value);
    };

    const debouncedSearchTerm = useMemo(() => {
        return debounce(handleSearch, 500);
    }, []);

    const getNasaImagesRequest = async () => {
        setLoading(true);
        const response = await fetch(
            `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`
        );
        const data = await response.json();
        if (data.collection.items) {
            setResults(shuffleArray(data.collection.items.slice(0, 24)));
            setLoading(false);
        }
        return true;
    };

    useEffect(() => {
        getNasaImagesRequest();
    }, [searchTerm]);

    useEffect(() => {
        return () => {
            debouncedSearchTerm.cancel();
        };
    });

    return (
        <Container>
            <Header title="NASA Image Search" />
            <SearchInput
                name="search"
                label="search"
                placeholder="Search NASA images..."
                onChange={debouncedSearchTerm}
                onSubmit={() => getNasaImagesRequest()}
                className="mt-4 mb-7"
            />
            <SearchResults loading={loading} results={results} />
        </Container>
    );
}
