import { Metadata } from 'next';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { Suspense } from 'react';
// import { API_URL } from '../../../(home)/page';

export const metadata: Metadata = {
    title: 'movie'
};

// const getMovie = async (id: string) => {
//     console.log(`fetching movies : ${Date.now()}`);
//     await new Promise(res => setTimeout(res, 2000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// };

// const getVideos = async (id: string) => {
//     console.log(`fetching videos : ${Date.now()}`);
//     await new Promise(res => setTimeout(res, 2000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// };

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    /** 순차적으로 data fetching */
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);

    /** 병렬적으로 data fetching */
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <div>
            {/* <h1>movies detail page</h1> */}
            {/* <h2>{movie.title}</h2>
            {videos.map(el => (
                <h3 key={el.id}>{el.name}</h3>
            ))} */}
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
