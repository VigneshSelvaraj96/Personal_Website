import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import {useState, useEffect} from 'react';
import manchester from '../../img/manchester.png';




export default function Home() {

   const [time, setTime] = useState(new Date());
   useEffect(() => {
   const timerID = setInterval(() => tick(), 1000);
   return () => clearInterval(timerID);
 });

 const tick = () => {
   setTime(new Date());
 };

const LosAngelesTime = new Date(time.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })).toLocaleTimeString();

const myImageStyle = { width: '35px', height: '35px', objectFit: 'cover', verticalAlign: 'text-top'};

   return (
      <><Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.ball}>⚽</span>
            </h1>
            <h2>I'm {info.position} and an avid <img src={manchester} style={myImageStyle} ></img> Fan</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
               <EmojiBullet emoji={'⏰'} text={`The current time for me is: ${LosAngelesTime}`} />
            </Box>
         </Box>
      </Box><Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {info.socials.map((social, index) => (
               <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
         </Box></>
   )
}