"use client"
import { lazy, useEffect, useMemo, useState } from "react";
const FeturedPlaylists = lazy(() => import("./featuredPlaylists"));
import API from "../../../src/api";
import Loading from "../../components/loading";
import Cookies from "js-cookie";

export default function GetData() {
    const [featuredPlaylists, setFeaturedPlaylists] = useState();
    const [showLoading, setShowLoading] = useState(true);

    const getData = async () => {
        await API.get("/home/").then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
            error.response && error.response.status === 401 && setTimeout(() => getData() , 4000);
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
                </div>
            }
        </>
    )
};