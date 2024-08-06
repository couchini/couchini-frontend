"use client"
import { lazy, useEffect, useMemo, useState } from "react";
import API from "../../../src/api";
import Loading from "../../components/loading";
const FeturedPlaylists = lazy(() => import("./featuredPlaylists"));
const Genres = lazy(() => import("./genres"));


export default function GetData() {
    const [featuredPlaylists, setFeaturedPlaylists] = useState();
    const [showLoading, setShowLoading] = useState(true);
    const [genres,setGenres] = useState();

    const getData = async () => {
        await API.get("/home/").then((response) => {
            setFeaturedPlaylists(response.data.Feature_Playlist);
            setGenres(response.data.genre);
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
                !showLoading && <div>
                    {
                        featuredPlaylists && <FeturedPlaylists playlists={featuredPlaylists} />
                    }
                    {
                        genres && <Genres genres={genres} />
                    }
                </div>
            }
        </>
    )
};