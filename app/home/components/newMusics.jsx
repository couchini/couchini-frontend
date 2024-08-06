import API from "../../../src/api";

export default function NewMusics({ new_musics }) {
    return (
        <div className="my-4">
            <h1 className="text-white text-lg">New Songs</h1>
            <div className="home-slider">
                {
                    new_musics && new_musics.filter((item, index) => index < 6).map((item) => {
                        console.log(item.singer[0]);
                        return (
                            <div key={item.music_id} className="home-slider-slide">
                                <img
                                    src={API.defaults.baseURL + item.cover}
                                    className="w-full h-24 object-cover rounded-xl"
                                />
                                <h4 className="text-xs md:text-md font-semibold px-1 text-white">{item.name}</h4>
                                <h5 className="text-xs font-extralight text-gray-400 px-1">{item.singer[0].first_name} {item.singer[0].last_name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};