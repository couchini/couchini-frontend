"use client"
import {useMemo, useState} from "react";
import Loading from "../components/loading";
import API from "../../src/api";

export default function Page() {
    const [showLoading,setShowLoading] = useState(true);
    const [albums,setAlbums] = useState();
    const [ playlists , setPlaylists ] = useState();
    const getData = async () => {
    };
    useMemo(() => getData(),[]);
    return (
        <>
            <div className="bg-image"></div>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <div>
                    hello
                </div>
            }
        </>
    )
};