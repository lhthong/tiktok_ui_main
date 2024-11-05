import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Upload() {
    const [fileDisplay, setFileDisplay] = useState(null);
    const [caption, setCaption] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'video/mp4') {
            setFileDisplay(URL.createObjectURL(file));
        }
    };

    const handleClearVideo = () => {
        setFileDisplay(null);
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const handlePost = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            alert('Video posted!');
        }, 1000);
    };

    return (
        <div className={cx('upload-container')}>
            <div className={cx('upload-header')}>
                <h2>Upload video</h2>
                <p>Post a video to your account</p>
            </div>

            <div className={cx('upload-content')}>
                {!fileDisplay ? (
                    <label htmlFor="fileInput" className={cx('file-upload-area')}>
                        <Icon icon="majesticons:cloud-upload" width="40" />
                        <div className={cx('upload-text')}>Select video to upload</div>
                        <div className={cx('upload-subtext')}>Or drag and drop a file</div>
                        <div className={cx('file-type-info')}>MP4</div>
                        <div className={cx('file-type-info')}>Up to 30 minutes</div>
                        <div className={cx('file-type-info')}>Less than 2 GB</div>
                        <div className={cx('upload-button')}>Select file</div>
                        <input type="file" id="fileInput" hidden accept=".mp4" onChange={handleFileChange} />
                    </label>
                ) : (
                    <div className={cx('video-preview-container')}>
                        <video className={cx('video-preview')} autoplay loop muted src={fileDisplay} />
                        <div className={cx('video-info')}>
                            <div className={cx('video-name')}>
                                <Icon icon="clarity:success-standard-line" width="16" />
                                <span>Video name</span>
                            </div>
                            <button onClick={handleClearVideo} className={cx('change-video-button')}>
                                Change
                            </button>
                        </div>
                    </div>
                )}

                <div className={cx('caption-container')}>
                    <div className={cx('caption-header')}>
                        <span>Caption</span>
                        <span className={cx('caption-counter')}>{caption.length}/150</span>
                    </div>
                    <input
                        value={caption}
                        onChange={handleCaptionChange}
                        maxLength="150"
                        type="text"
                        className={cx('caption-input')}
                    />
                    <div className={cx('action-buttons')}>
                        <button onClick={handleClearVideo} className={cx('discard-button')}>
                            Discard
                        </button>
                        <button onClick={handlePost} className={cx('post-button')}>
                            Post
                        </button>
                    </div>
                </div>
            </div>

            {isUploading && (
                <div className={cx('loading-overlay')}>
                    <Icon className={cx('loading-icon')} icon="mingcute:loading-line" width="100" />
                </div>
            )}
        </div>
    );
}

export default Upload;
