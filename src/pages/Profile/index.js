import React from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import avatar from '~/assets/images/avata.png';
const cx = classNames.bind(styles);
function Profile() {
    return (
        <div className={cx('profile-container')}>
            <div className={cx('profile-header')}>
                <div className={cx('profile-info')}>
                    <img className={cx('profile-avatar')} src={avatar} alt="User avatar" />
                    <div className={cx('profile-details')}>
                        <h2 className={cx('profile-username')}>Le Huy Thong</h2>
                        <p className={cx('profile-username-small')}>lhthong</p>
                        <button className={cx('edit-profile-button')}>
                            <b>Edit profile</b>
                        </button>
                    </div>
                </div>
                <div className={cx('profile-stats')}>
                    <span className={cx('stat')}>
                        <b>10K</b> Following
                    </span>
                    <span className={cx('stat')}>
                        <b>44K</b> Followers
                    </span>
                    <span className={cx('stat')}>
                        <b>3K</b> Likes
                    </span>
                </div>
                <p className={cx('profile-bio')}>This is the bio section</p>
            </div>

            <div className={cx('profile-tabs')}>
                <span className={cx('active-tab')}>Videos</span>
                <span className={cx('tab')}>Liked</span>
            </div>

            <div className={cx('profile-videos')}>
                <div className={cx('video-item')}>
                    <iframe
                        className={cx('video')}
                        width="100%"
                        //height="315"
                        src="https://www.youtube.com/embed/ZOoJ_l9Nugw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Profile;
