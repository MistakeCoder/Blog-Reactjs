import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '../services/authService';
import '../assets/css/home.css';
import { getPostsByFilter } from '../services/postService';

function Home() {

    const router = useNavigate();
    const [data, setData] = useState([]);
    const navigate = (url) => {
        router(url);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getAuth();

            try {
                const res = await getPostsByFilter();
                setData(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <Fragment>
            <div className='row'>
                {
                    data.length > 0 ? (
                        data.map((item) => (
                            <div key={item._id} className="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                <div className="blog-grid">
                                    <div className="blog-grid-img position-relative">
                                        <img alt="img" src={item.image} />
                                    </div>
                                    <div className="blog-grid-text p-4">
                                        <h3 className="h5 mb-3 cursor-pointer text-2-line ">
                                            <div onClick={() => navigate(`/post/${item._id}`)}>{item.title}</div>
                                        </h3>
                                        <p className="display-30 text-3-line ">{item.description}</p>
                                        <div className="meta meta-style2">
                                            <ul>
                                                <li>
                                                    <a href="#!">
                                                        <i className="fas fa-calendar-alt"></i> 10 Jul, {new Date().getFullYear()}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="fas fa-user"></i> User
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="fas fa-comments"></i> 38
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Không có bài viết nào</p>
                    )
                }
            </div>
        </Fragment>
    );
}

export default Home;
