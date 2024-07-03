import React from 'react';
import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
    console.log(`fetching movies : ${Date.now()}`);
    await new Promise(res => setTimeout(res, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);

    return <h6>{movie.title}</h6>;
}
