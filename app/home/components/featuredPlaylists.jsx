"use client"
import API from "../../../src/api";
import Link from "next/link";

export default function FeturedPlaylist({ playlists }) {
    return (
        <div className="my-4">
            <h1 className="text-white text-lg">Couchini Playlist</h1>
            <div className="home-slider">
                {
                    playlists && playlists.filter((item, index) => index < 6).map((item) => {
                        return (
                            <Link href={"/home/playlist/" + item.playlist_id} key={item.playlist_id}>
                                <div className="home-slider-slide">
                                    <img
                                        src={API.defaults.baseURL + item.cover}
                                        className="w-full h-24 object-cover rounded-xl"
                                    />
                                    <h4 className="text-xs md:text-md px-1 text-white">{item.title}</h4>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};