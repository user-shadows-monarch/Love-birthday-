* {
    box-sizing: border-box;
}


:root {

    --pink: #ff4f91;
    --hot: #ff176f;
    --rose: #d92568;

    --gold: #ffd59a;

    --dark: #070817;
    --deep: #11091c;

}


html,
body {

    margin: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;

    background: var(--dark);

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    color: white;

}


button {

    font: inherit;

}


/* ================================= */
/* GENERAL PAGE SYSTEM */
/* ================================= */

.page {

    position: absolute;

    inset: 0;

    min-height: 100dvh;

    display: flex;

    justify-content: center;

    overflow: hidden;

    opacity: 0;

    pointer-events: none;

    transform: scale(1.03);

    transition:
        opacity .8s ease,
        transform .8s ease;

}


.page.active {

    opacity: 1;

    pointer-events: auto;

    transform: scale(1);

}


/* ================================= */
/* PAGE 1 */
/* ================================= */

.page1 {

    background:

        radial-gradient(
            circle at 50% 38%,
            rgba(255,40,120,.20),
            transparent 24%
        ),

        radial-gradient(
            circle at 50% 90%,
            rgba(255,91,143,.12),
            transparent 38%
        ),

        linear-gradient(
            180deg,
            #050714 0%,
            #10091a 55%,
            #17091b 100%
        );

}


/* ================================= */
/* STARS */
/* ================================= */

.stars,
.stars:before,
.stars:after {

    position: absolute;

    inset: 0;

    content: "";

    background-image:

        radial-gradient(
            circle,
            rgba(255,255,255,.9) 0 1px,
            transparent 1.5px
        );

    background-size: 91px 91px;

    opacity: .32;

    animation: drift 18s linear infinite;

}


.stars:before {

    background-size: 137px 137px;

    transform: translate(25px,40px);

    opacity: .25;

}


.stars:after {

    background-size: 67px 67px;

    transform: translate(-20px,-30px);

    opacity: .18;

}


@keyframes drift {

    to {

        transform:
            translateY(90px);

    }

}


/* ================================= */
/* CITY GLOW */
/* ================================= */

.city-glow {

    position: absolute;

    bottom: -8%;

    left: -20%;

    width: 140%;

    height: 34%;

    background:

        linear-gradient(
            to top,
            rgba(255,35,111,.22),
            transparent 75%
        );

    filter: blur(25px);

}


/* ================================= */
/* PAGE 1 CONTENT */
/* ================================= */

.intro {

    position: relative;

    width: min(92%,430px);

    height: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

    padding:
        12vh
        22px
        50px;

    z-index: 2;

}


.small-line {

    font:

        600 11px/1.2
        Arial,
        sans-serif;

    letter-spacing: 4px;

    text-transform: uppercase;

    color: #ffb3ce;

    margin-bottom: 35px;

}


h1 {

    font-size: 31px;

    line-height: 1.18;

    font-weight: 400;

    margin: 0;

    color: white;

    text-shadow:
        0 0 22px
        rgba(255,79,145,.35);

}


h1 span {

    font-size: 22px;

    color: #ffc5d9;

    font-style: italic;

}


/* ================================= */
/* HEART */
/* ================================= */

.heart-wrap {

    position: relative;

    width: 145px;

    height: 145px;

    margin:
        42px 0 20px;

    display: grid;

    place-items: center;

}


.heart {

    font-family: Arial;

    font-size: 75px;

    color: #ff4f91;

    text-shadow:

        0 0 18px #ff2d7d,

        0 0 55px
        rgba(255,45,125,.8);

    animation:
        heartbeat 1.7s
        ease-in-out infinite;

    z-index: 2;

}


.heart-ring {

    position: absolute;

    width: 125px;

    height: 125px;

    border:
        1px solid
        rgba(255,112,164,.45);

    border-radius: 50%;

    animation:
        ring 2.5s
        ease-out infinite;

}


@keyframes heartbeat {

    0%,
    100% {

        transform: scale(1);

    }

    15% {

        transform: scale(1.12);

    }

    30% {

        transform: scale(1);

    }

}


@keyframes ring {

    0% {

        transform: scale(.75);

        opacity: .8;

    }

    100% {

        transform: scale(1.35);

        opacity: 0;

    }

}


/* ================================= */
/* INTRO TEXT */
/* ================================= */

.intro-text {

    font-size: 17px;

    line-height: 1.65;

    color: #ead8e1;

    margin:
        5px 0 28px;

}


.intro-text strong {

    color: #fff0a9;

    font-weight: 400;

}


/* ================================= */
/* BUTTON */
/* ================================= */

.begin-btn {

    border:
        1px solid
        rgba(255,112,164,.65);

    background:
        rgba(255,34,110,.12);

    color: white;

    border-radius: 999px;

    padding:
        13px 23px;

    cursor: pointer;

    box-shadow:
        0 0 24px
        rgba(255,38,116,.12);

    font:

        600 14px
        Arial,
        sans-serif;

    letter-spacing: 1px;

    display: flex;

    gap: 18px;

    align-items: center;

}


.begin-btn b {

    font-size: 20px;

    color: #ff9bbc;

}


.begin-btn:active {

    transform: scale(.96);

}


.bottom-label {

    position: absolute;

    bottom: 20px;

    font:

        10px
        Arial,
        sans-serif;

    letter-spacing: 2px;

    color: #c78fa7;

}


/* ================================= */
/* PAGE 2 */
/* ================================= */

.page2 {

    background:

        radial-gradient(
            circle at 50% 45%,
            rgba(255,54,118,.15),
            transparent 30%
        ),

        linear-gradient(
            145deg,
            #090714,
            #180916 55%,
            #090713
        );

    align-items: center;

}


.page2:before {

    content: "";

    position: absolute;

    inset: 0;

    background:

        radial-gradient(
            circle at 20% 20%,
            rgba(255,255,255,.08)
            0 1px,
            transparent 2px
        );

    background-size: 70px 70px;

    opacity: .25;

}


/* ================================= */
/* LETTER SCENE */
/* ================================= */

.letter-scene {

    position: relative;

    z-index: 2;

    width: min(90%,410px);

    display: flex;

    align-items: center;

    flex-direction: column;

    margin-top: -5vh;

}


.letter-title {

    font-size: 25px;

    font-style: italic;

    color: #ffd0df;

    margin-bottom: 30px;

    text-shadow:
        0 0 15px
        rgba(255,70,130,.35);

}


/* ================================= */
/* ENVELOPE */
/* ================================= */

.envelope {

    position: relative;

    width: min(88vw,350px);

    height: 225px;

    border: 0;

    border-radius: 7px;

    background:

        linear-gradient(
            145deg,
            #7d123c,
            #be245d
        );

    box-shadow:

        0 25px 60px
        rgba(0,0,0,.55),

        0 0 35px
        rgba(255,35,105,.18);

    cursor: pointer;

    overflow: hidden;

    transition:
        transform .3s;

}


.envelope:active {

    transform: scale(.96);

}


/* Envelope bottom folds */

.envelope:before,
.envelope:after {

    content: "";

    position: absolute;

    bottom: 0;

    width: 0;

    height: 0;

    border-style: solid;

    z-index: 1;

}


.envelope:before {

    left: 0;

    border-width:
        0 175px 115px 0;

    border-color:
        transparent
        #a61b50
        transparent
        transparent;

}


.envelope:after {

    right: 0;

    border-width:
        0 0 115px 175px;

    border-color:
        transparent
        transparent
        #92133f
        transparent;

}


/* ================================= */
/* ENVELOPE FLAP */
/* ================================= */

.flap {

    position: absolute;

    top: 0;

    left: 0;

    width: 0;

    height: 0;

    border-left:
        175px solid transparent;

    border-right:
        175px solid transparent;

    border-top:
        112px solid #d7346c;

    z-index: 3;

    transform-origin: top;

    transition:
        transform .8s ease;

}


/* ================================= */
/* HEART SEAL */
/* ================================= */

.seal {

    position: absolute;

    z-index: 4;

    left: 50%;

    top: 104px;

    transform:
        translate(-50%,-50%);

    width: 50px;

    height: 50px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    background: #5e0a2e;

    border:
        2px solid
        #f59ab8;

    color: #ffbed2;

    font:

        30px
        Arial;

    box-shadow:

        0 0 20px
        rgba(255,100,160,.35);

    transition: .5s;

}


/* ================================= */
/* ENVELOPE TEXT */
/* ================================= */

.letter-text {

    position: absolute;

    z-index: 2;

    inset:
        95px 0 auto;

    text-align: center;

    font:

        600 15px
        Arial,
        sans-serif;

    letter-spacing: .5px;

}


.letter-text span {

    font-weight: 400;

    font-size: 12px;

    color: #ffc4d8;

}


.hint {

    font-size: 14px;

    color: #a98a9a;

    font-style: italic;

    margin-top: 24px;

}


/* ================================= */
/* ROSES + CANDLE */
/* ================================= */

.rose {

    position: absolute;

    font-size: 45px;

    filter:
        drop-shadow(
            0 0 12px
            rgba(255,40,100,.3)
        );

    opacity: .8;

}


.rose1 {

    left: 7%;

    top: 13%;

    transform: rotate(-18deg);

}


.rose2 {

    right: 6%;

    bottom: 16%;

    transform: rotate(20deg);

}


.candle {

    position: absolute;

    right: 10%;

    top: 14%;

    font-size: 40px;

    filter:
        drop-shadow(
            0 0 18px
            rgba(255,180,80,.45)
        );

}


/* ================================= */
/* BACK BUTTON */
/* ================================= */

.back-btn {

    position: absolute;

    left: 20px;

    top: 22px;

    border: 0;

    background: transparent;

    color: #d99aae;

    font-size: 25px;

    z-index: 5;

}


/* ================================= */
/* LETTER MESSAGE */
/* ================================= */

.letter-message {

    position: absolute;

    inset: 0;

    z-index: 10;

    display: grid;

    place-items: center;

    padding: 25px;

    background:
        rgba(3,2,10,.72);

    backdrop-filter: blur(8px);

    opacity: 0;

    pointer-events: none;

    transition:
        opacity .5s;

}


.letter-message.show {

    opacity: 1;

    pointer-events: auto;

}


.message-card {

    width: min(90vw,370px);

    padding:
        32px 25px;

    border:
        1px solid
        rgba(255,119,164,.4);

    border-radius: 22px;

    background:

        linear-gradient(
            160deg,
            rgba(65,10,37,.96),
            rgba(17,8,26,.97)
        );

    box-shadow:

        0 20px 70px
        rgba(0,0,0,.55),

        0 0 30px
        rgba(255,35,110,.12);

    text-align: center;

}


.mini-heart {

    color: #ff6098;

    font-size: 28px;

    margin-bottom: 12px;

}


.message-card p {

    font-size: 17px;

    line-height: 1.7;

    color: #f7dce7;

    margin:
        0 0 22px;

}


/* ================================= */
/* VOICE BUTTON */
/* ================================= */

.voice-btn {

    border:
        1px solid
        rgba(255,112,164,.65);

    background:
        rgba(255,34,110,.12);

    color: white;

    border-radius: 999px;

    padding:
        13px 23px;

    cursor: pointer;

    font:
        12px
        Arial,
        sans-serif;

    margin-bottom: 12px;

}


/* ================================= */
/* CONTINUE BUTTON */
/* ================================= */

.continue-btn {

    border:
        1px solid
        rgba(255,112,164,.65);

    background:
        rgba(255,34,110,.12);

    color: white;

    border-radius: 999px;

    padding:
        13px 23px;

    cursor: pointer;

    font:
        12px
        Arial,
        sans-serif;

    display: block;

    margin: auto;

}


/* ================================= */
/* PAGE 3 TEMPORARY */
/* ================================= */

.page3 {

    background:

        radial-gradient(
            circle,
            #42102e,
            #080712 70%
        );

    align-items: center;

}


.future-page {

    text-align: center;

    padding: 30px;

}


.future-page > div {

    font-size: 70px;

}


.future-page h1 {

    font-size: 32px;

}


.future-page p {

    color: #d9b4c5;

    margin-bottom: 30px;

}


/* ================================= */
/* SMALL PHONES */
/* ================================= */

@media (max-height: 680px) {

    .intro {

        padding-top: 7vh;

    }

    .heart-wrap {

        margin:
            22px 0 8px;

        width: 110px;

        height: 110px;

    }

    .heart {

        font-size: 58px;

    }

    .intro-text {

        margin-bottom: 18px;

    }

    h1 {

        font-size: 27px;

    }

    .envelope {

        height: 190px;

    }

    .flap {

        border-left-width: 160px;

        border-right-width: 160px;

        border-top-width: 95px;

    }

    .envelope:before {

        border-width:
            0 160px 95px 0;

    }

    .envelope:after {

        border-width:
            0 0 95px 160px;

    }

}
