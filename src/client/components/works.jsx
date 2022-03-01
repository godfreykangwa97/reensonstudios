import React from "react";
import { LightBox } from "react-lightbox-pack"
import {Link} from "react-router-dom";

const data = [

        {
            "id":  1,
            "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/274247608_473534084153263_1161499020254088475_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=3Tm2eM0OuPwAX-8T-4u&_nc_ht=scontent.flun3-1.fna&oh=00_AT-r9QKGWsg2YDGSinAmATX0c-dFG9dyTz2e-lev05DkBA&oe=6223A616",
            "title":  "Lorem Ipsum",
            "description":
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
        {
            "id":  2,
            "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/274268232_473534070819931_4086054635734603812_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=RnxkdXHh78UAX_qPH_u&_nc_ht=scontent.flun3-1.fna&oh=00_AT_BaSO4nHVjWg-z1esr0il07mifIoRP1ZGJNSWTipNlKA&oe=62232DF8",
            "title":  "Lorem Ipsum",
            "description":
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
        },
    {
        "id":  3,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/273643283_468436767996328_8562473868305598698_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=KOrqWUtF_8kAX9KgpTO&_nc_ht=scontent.flun3-1.fna&oh=00_AT-dRZqDkioLVADU21dzXHbZP7nloI05LF5WOo8cRTVV2w&oe=62234D87",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id":  4,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/272795926_461983545308317_6240732928974331408_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=Y_pw_WeYbTwAX-Gk-bL&_nc_ht=scontent.flun3-1.fna&oh=00_AT9Sqct8IxnM1Af3o9yy3Tn_g8Uk0wORnOWfUwjc7IHqDQ&oe=62232783",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id":  5,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/273634218_468436707996334_9146827008776422037_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=FvXOTkET9cwAX-pQuM1&_nc_ht=scontent.flun3-1.fna&oh=00_AT_1p3wE_c04vegDI_vBsVPADeOLTxhu-UCmzNUULubCPw&oe=62224E30",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id":  6,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/273048717_467093604797311_7721811370197879526_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=97PrY7opjroAX-yRVyj&_nc_ht=scontent.flun3-1.fna&oh=00_AT_kmKrHHa2DsiO4SCvJmYpKi1AG86KaDAIp3NsYfLIi9Q&oe=62229432",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id":  7,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/273163669_464874971685841_4315816415516909560_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=YbSfEzmQgREAX_9XPEz&_nc_ht=scontent.flun3-1.fna&oh=00_AT_KpoX4CIHBiDiF9g581eh7zcCElT1g5_8I9yS-xOmPzw&oe=62234B24",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id":  8,
        "image":  "https://scontent.flun3-1.fna.fbcdn.net/v/t39.30808-6/272970895_462589555247716_1961320235735369777_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=TuR_J235zH8AX8mLkwG&_nc_ht=scontent.flun3-1.fna&oh=00_AT8XHqrf5oo_z-TF_VHf6A2BoLeF0kC5wNievH5g99tGsw&oe=6222B524",
        "title":  "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    }
    ];



const  HomeWorks = () => {

    // State
    const [toggle, setToggle] =  React.useState(false);
    const [sIndex, setSIndex] =  React.useState(0);

    // Handler
    const  lightBoxHandler  = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <div className="home-works padding-top-bottom-2rem">
            <div className="wrapper">
                <div className="home-opening text-left">
                    <h1>Recent works</h1>
                    <p>the content below is copyrighted under reenson studios,</p>
                    <p>therefore re-producing or use on unauthorised contents is prohibited.</p>
                </div>
                <div className="works-gallery margin-top-2rem">
                    {data.map((item, index) => (
                           <div className="img-holder">
                               <img
                                   key={item.id}
                                   src={item.image}
                                   alt={item.title}
                                   style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
                                   onClick={() => {
                                       lightBoxHandler(true, index);
                                   }}
                               />
                               {/*<h5>{item.title}</h5>*/}
                           </div>
                    ))}

                    <LightBox
                        state={toggle}
                        event={lightBoxHandler}
                        data={data}
                        imageWidth="60vw"
                        imageHeight="70vh"
                        thumbnailHeight={50}
                        thumbnailWidth={50}
                        setImageIndex={setSIndex}
                        imageIndex={sIndex}
                    />
                </div>
                <div className="closing text-center margin-top-2rem">
                   <Link to="/works" className="orange">See all</Link>
                </div>
            </div>
        </div>
    );
};
export default HomeWorks;