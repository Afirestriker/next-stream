import Image from "next/image";

const ServerDown = () => {
    return (
        <>
            <Image loading="lazy" src="/dreamer.svg" width="700" height="500" style={{marginLeft: "auto", marginRight: "auto"}} />
            <p>"Looks like you've hit a pause button! ⏸️ Take this moment to unwind, grab a good book (check our footer for recommendations!), and we'll be back up and running soon. "</p>
        </>
    );
}

export default ServerDown;
