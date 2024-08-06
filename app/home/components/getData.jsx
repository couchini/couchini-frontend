"use client"
import { lazy, useMemo, useState } from "react";
import API from "../../../src/api";
import Loading from "../../components/loading";
const FeturedPlaylists = lazy(() => import("./featuredPlaylists"));
const Genres = lazy(() => import("./genres"));
const NewSongs = lazy(() => import("./newMusics"));


export default function GetData() {
    const [featuredPlaylists, setFeaturedPlaylists] = useState();
    const [showLoading, setShowLoading] = useState(true);
    const [newMusics, setNewMusics] = useState();
    const [genres, setGenres] = useState();

    const getData = async () => {
        await API.get("/home/").then((response) => {
            setFeaturedPlaylists(response.data.Feature_Playlist);
            setGenres(response.data.genre);
            setNewMusics(response.data.new_musics);
        }).catch((error) => {
            error.response && error.response.status === 401 && getData();
        }).finally(() => setTimeout(() => setShowLoading(false), 400));
    };

    useMemo(() => {
        getData();
    }, []);

    return (
        <>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <div className="mb-12">
                    {
                        featuredPlaylists && <FeturedPlaylists playlists={featuredPlaylists} />
                    }
                    {
                        newMusics && <NewSongs new_musics={newMusics} />
                    }
                    {
                        genres && <Genres genres={genres} />
                    }
                </div>
            }
        </>
    )
};