import GetPlaylist from "./components/getPlaylist";
import API from "../../../../src/api";


export async function generateStaticParams() {
    const result = await API.get("/home/").then((response) => {
        return response.data.Feature_Playlist
    })
    return result.map((playlist) => {
        return ({
            id: playlist.playlist_id
        })
    })
};

export default function Page({ params }) {
    return (
        <>
            <GetPlaylist />
        </>
    )
};  