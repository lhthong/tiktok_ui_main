import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Comment, Bookmark, Share, Tym, Cong } from '~/components/Icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('kendo')}>
                    <div className={cx('mode')}>
                        <div className={cx('car')}>
                            <iframe
                                className={cx('video')}
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/ZOoJ_l9Nugw"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('cheng')}>
                <div className={cx('use-info')}>
                    <a className={cx('avatar')} href="/@_bapgiangbo_">
                        <div className={cx('kid')}>
                            <span className={cx('kaito')}>
                                <img
                                    alt="_bapgiangbo_"
                                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ae3ce5bb827dc2498fe1f6f1de7bd786.jpeg?lk3s=a5d48078&amp;nonce=10735&amp;refresh_token=68b5359f08a68e584309a4ed940d0323&amp;x-expires=1728590400&amp;x-signature=mqDTJQ26eohasFbIc%2B9E5s7UxjU%3D&amp;shp=a5d48078&amp;shcp=b59d6b55"
                                    className={cx('img-avatar')}
                                />
                            </span>
                        </div>
                    </a>
                    <button className={cx('cong')}>
                        <div className={cx('caeo')}>
                            <Cong />
                        </div>
                    </button>
                </div>
                <button type="button" className={cx('channo')}>
                    <span className={cx('span')}>
                        <Tym />
                    </span>
                    <strong className={cx('number-like')}>60.2k</strong>
                </button>
                <button type="button" className={cx('channo')}>
                    <span className={cx('span')}>
                        <Comment />
                    </span>
                    <strong className={cx('number-like')}>10.2k</strong>
                </button>
                <button type="button" className={cx('channo')}>
                    <span className={cx('span')}>
                        <Bookmark />
                    </span>
                    <strong className={cx('number-like')}>9k</strong>
                </button>
                <button type="button" className={cx('channo')}>
                    <span className={cx('span')}>
                        <Share />
                    </span>
                    <strong className={cx('number-like')}>4k</strong>
                </button>
            </div>
        </div>
    );
}

export default Home;
