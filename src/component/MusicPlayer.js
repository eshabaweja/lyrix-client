import React, { useState, useEffect } from 'react';
import LyricsDisplay from './LyricsDisplay';
import ProgressBar from './MusicControls'
// Import additional libraries for audio playback (explained later)
const MusicPlayer = () => {

    // JSX for the MusicPlayer component
    return (
        <div className="music-player">
            MusicPlayer
            <LyricsDisplay/>
            <ProgressBar/>
        </div>
    );
};

export default MusicPlayer;
