"use client"
import "../../../../../static/styles/home/styles.css";
import { useParams } from "next/navigation";
import API from "../../../../../src/api";
import { useMemo, useState } from "react";
import Loading from "../../../../components/loading";
import Info from "./info";


export default function getPlaylist() {
    const [playlist, setPlaylist] = useState();
    const [showLoading, setShowLoading] = useState(true);
    const params = useParams();
    const getData = async () => {
        await API.get(`/playlist/${params.id}/`).then((response) => {
            setPlaylist(response.data.playlist)
            console.log(response.data.playlist)
        }).catch((error) => {
            error.response && error.response.status === 401 && getData();
        }).finally(() => setTimeout(() => setShowLoading(false), 400));
    };
    useMemo(() => getData(), []);
    return (
        <>
            <div className="bg-image"></div>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <div>
                    {
                        playlist && <Info playlist={playlist} />
                    }
                </div>
            }
        </>
    )
};