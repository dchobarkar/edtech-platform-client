import React from 'react';
import { Player, BigPlayButton, LoadingSpinner, ControlBar, ReplayControl, ForwardControl, VolumeMenuButton, PlaybackRateMenuButton } from 'video-react';
import CurrentTimeDisplay from 'video-react/lib/components/time-controls/CurrentTimeDisplay';
import TimeDivider from 'video-react/lib/components/time-controls/TimeDivider';

import CModal from '../CModal/CModal';

import './VideoPlayer.css';

const VideoPlayer = React.memo(function VideoPlayer(props) {
    const videoHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div onContextMenu={(e) => videoHandler(e)}>
            <CModal
                show={props.show}
                onHide={props.showVideoModalHandler}>
                <Player autoPlay>

                    <source src={props.lectureVideo} />

                    <BigPlayButton position="center" />
                    <LoadingSpinner />

                    <ControlBar className="my-class">
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={10} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.75, 0.5]} order={7.1} />
                        <VolumeMenuButton vertical />
                    </ControlBar>

                </Player>
            </CModal>
        </div>
    )
})

export default VideoPlayer;