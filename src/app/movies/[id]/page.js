import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const MovieSlug = async ({params}) => {
    const id = params.id;

    const url = `${process.env.RAPID_URL}/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const showData = data[0].details ?? {};
    // console.log(data);

    const imageUrl = (showData.backgroundImage.url.length) ? showData.backgroundImage.url : "/noimage.svg";

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>
                Netflix \ <span> {showData.type}</span>
            </h2>
            <div className={styles.card_section}>
                <Image src={imageUrl} alt={showData.title} width={700} height={400}/>
                <div>
                    <h1>{showData.title}</h1>
                    <p>{showData.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieSlug;