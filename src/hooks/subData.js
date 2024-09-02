import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const getAllArticles = async () => {
    try {
        const { data } = await axios.get(`http://localhost:4000/api/subjects/feed`);
        console.log('Data received from API:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Re-throw the error so react-query can handle it
    }
};

function useArticlesQuery() {
    const {
        isLoading: isArticlesLoading,
        data: articles,
        error: ArticlesError,
    } = useQuery({
        queryKey: ["articles"],
        queryFn: getAllArticles,
        refetchOnWindowFocus: true,
        staleTime: 0,
        cacheTime: 0
    })
    return {
        isArticlesLoading,
        articles,
        ArticlesError,
    };
}

export default useArticlesQuery;


