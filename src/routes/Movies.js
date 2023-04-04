import {gql, useApolloClient, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const allMovies = gql`
    {
        allMovies {
            id
            title
        }
        allTweets {
            id
            text
            author {
                fullName
            }
        }
    }   
`;

function Movies() {
    const { data, loading, error } = useQuery(allMovies);
    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>error :(</h1>
    }

    return (
        <div>
            <h1>movie</h1>
            <ul>
                {
                    data.allMovies.map(movie =>
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Movies;
