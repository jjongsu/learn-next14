import { API_URL } from '../app/(home)/page';

const getVideos = async (id: string) => {
    console.log(`fetching videos : ${Date.now()}`);
    await new Promise(res => setTimeout(res, 5000));
    // throw new Error('something broke!!');
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
