import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

const getMovie = gql`
    query($movieId: ID) {
        movie(id:$movieId) {
            id
            title
        }
    }
`;

function Movie() {
    const params = useParams();
    const { data, loading, error } = useQuery(getMovie, {
        variables: {
            movieId: params.id
        }
    });
    console.log('test :::: ', data);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>error :(</h1>
    }

    return (
        <div>
            <h1>{data.movie.title}</h1>
        </div>
    );
}

export default Movie;
