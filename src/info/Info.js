import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vignesh",
    lastName: "Selvaraj",
    initials: "S.V", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are the little bullet points on the homepage

        {
            emoji: '🌎',
            text: 'Based in Los Angeles'
        },
        {
            emoji: "💼",
            text: "CS Grad Student at University of Southern California (USC). Expected Grad: Dec 2023"
        },
        {
            emoji: "📧",
            text: "vs96005@usc.edu"
        },
        {
            emoji: "🚀",
            text: "Since I love Space, scroll down to see Nasa's Astronomy Picture of the Day (Refreshed everyday)"
        }
    ],
    socials: [
        {
            link: "https://https://www.facebook.com/vignesh.selvaraj.31/.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/viggyy_s/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/VigneshSelvaraj96",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vignesh-selvaraj96/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],

    
}