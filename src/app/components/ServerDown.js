import Image from "next/image";

const imageStyle = {
    marginLeft: "auto",
    marginRight: "auto"
};

const ServerDown = () => {
    return (
        <>
            <Image loading="lazy" alt="server down and maintenance" src="/dreamer.svg" width="700" height="500" style={imageStyle} />
            <p>Looks like you&apos;ve hit a pause button! ⏸️ Take this moment to unwind, grab a good book (check our footer for recommendations!), and we&apos;ll be back up and running soon.</p>
        </>
    );
}

export default ServerDown;
