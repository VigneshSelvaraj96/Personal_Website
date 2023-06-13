import React from "react";
import Terminal from "../about/Terminal";
import "./Portfolio.css";
import scenedetectss from '../../img/scenedetectss.png'

export default function Yelpprojectslide() {
  // function that returns the same template as yelp project but for scene detector
  function project() {
    return (
      <>
        <div className="d-flex container">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-6">
              <h2>Scene Detector + Media Player</h2>
            </div>
            <div className="row d-flex justify-content-around pt-5">
            <div className="col pt-2 sceneborder">
                <img className='sceneborder' src={scenedetectss} alt="scenedetectSS"></img>
              </div>
              </div>
            <div className="row d-flex justify-content-around pt-5">
              <div className="col">
                <h3>
                  <strong>Technologies Used:</strong>
                </h3>
                <p>
                  Python, OpenCV, PySceneDetection, Librosa, PyQT5, PyGame, FFmpeg, Numpy
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-center pt-2">
              <div className="col">
                <h3>Project Description: </h3>
                <p>
                  This is a desktop application that allows users to upload a video file and detect scenes in the video. I built an interactive media Player
                  which has the basic functionalities of a regular media player such as play, pause, stop, rewind, fast forward, volume control, mute, and seek.
                  The media player also has a scene list which displays the scenes detected in the video. The user can click on a scene in the list to jump to that scene in the video.
                  Top level scenes were classified as scenes, and sub scenes were classified as shots. 
                  Scenes within each shot was classfied as a subshot.
                </p>
                <br></br>
                <h3>Developer Comments: </h3>
                <p>
                    Personally, this was one of the most challenging yet interesting projects I have worked on. I had to learn a lot of new technologies and libraries that dealt
                    with video processing and audio processing. I was tasked with building a media player that was able to take in a .wav file and .rgb file, combine them into an
                  .mp4 file and run scene detection algorithms to detect scenes in the video. For scene detection and shot detection, i decided to use PySceneDetection, a python library
                    that uses OpenCV to detect scenes in a video. I also used Librosa to detect beats in the audio file. I used different values for the threshold and min scene length
                    to detect scenes and shots. A low sensitivity value that detects changes in the HSV color space for each frame was used to detect scenes. A higher threshold value 
                    was used to detect shots but this algorithm ran within the start and stop timestamp of each scene, to ensure subclassification. For the subshot classification, I used 
                    a novel idea that i came up with while doing some leetcode problems (what a coincidence!). Taking inspiration from the highest stock profit problem, I ran a loop through
                    the samples of audio file with the start and stop timestamp of each shot. I calculated the difference between the current sample and the next sample. If the difference
                    was greater than the rootmean square of the entire sample, it would indicate a drastic change in the audio levels which i categorized as a subshot. This idea worked seamlessly
                    and my peers and professors were impressed as much as I was! I used PyQT5 to build the GUI for the media player and PyGame to build the media player. 
                <br></br>
                </p>
                </div> 
            </div>
            <div className="d-flex row">
              <div className="col-lg-6 justify-content-center">
                <a class="link-button green-border" href="https://github.com/VigneshSelvaraj96/Yelp_Clone_Angular_Web_App" target="_blank" rel="noreferrer">
                  View Source Code <i class="fa fa-github"></i>
                </a>
              </div>
              <div className="col-lg-6 justify-content-center">
                <a class="link-button green-border" href="https://yelpcloneangular.wl.r.appspot.com/search" target="_blank" rel="noreferrer">
                  View Live Demo <i class="fa fa-external-link"></i>
                </a>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
  return (

  );
}
