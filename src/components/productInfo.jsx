import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Modal from './modal';

function ProductInfo() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const handleData = async () => {
            const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
            const res = response.data;
            const matchingShow = await res.find((item) => item.show.id == id);
            setData(matchingShow);
        };
        handleData();
    }, [id]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {data.length === 0 ? (
                "loading."
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 h-screen">
                    <div className="md:col-span-1 lg:col-span-5 flex justify-center items-center">
                        <div className="h-[600px]">
                            <img
                                src={data.show?.image?.original}
                                className="max-w-full max-h-full"
                                alt="images"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-1 px-6 lg:col-span-7 text-white flex flex-col justify-between my-20 lg:pe-32 text-xl ">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl md:text-5xl font-semibold text-black">
                                {data.show?.name}
                            </h1>
                            <h1 className="text-black">{data.show?.premiered}</h1>
                        </div>
                        <p className="text-black">
                            Rating :{" "}
                            <span>{data.show?.rating?.average}</span>
                        </p>
                        <p className="text-black">{data.show?.summary}</p>
                        <p className="text-black">
                            Status : <span className="text-red-500">{data.show?.status}</span>
                        </p>
                        <Link to={data.show?.url} className="text-black">
                            Url: <span className="text-blue-500">{data.show?.url}</span>
                        </Link>

                        <Link to={data.show?.officialSite} className="text-black">
                            Official Url:{" "}
                            <span className="text-blue-500">{data.show?.officialSite}</span>
                        </Link>
                        <Link
                            to={data.show._links.previousepisode?.href}
                            className="text-black"
                        >
                            Previous Episode:{" "}
                            <span className="text-blue-500">
                                {data.show._links.previousepisode?.href}
                            </span>
                        </Link>
                        <div className="flex gap-6 justify-center sm:justify-normal">
                            <button className="bg-red-600 hover:bg-red-700 max-w-max mt-2 sm:mt-0 px-6 py-1 rounded-md" onClick={() => { navigate('/products') }}>
                                Back
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 max-w-max mt-2 sm:mt-0 px-6 py-1 rounded-md" onClick={handleOpenModal}>
                                Book Now
                            </button>
                        </div>
                        <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} data={data} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductInfo;
