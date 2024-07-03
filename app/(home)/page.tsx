import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../constants';

export const metadata = {
    title: 'Home'
};

const getMovies = async () => {
    // await new Promise(res => setTimeout(res, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
};

export default async function HomePage() {
    /** client side rendering 방식 */
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // };
    // useEffect(() => {
    //     getMovies();
    // }, []);

    /** server side rendering */
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {/* <h1>Hello!</h1> */}
            {/* {isLoading ? 'Loading...' : JSON.stringify(movies)} */}
            {/* {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))} */}
            {movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />;
            })}
        </div>
    );
}
