import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (show) => {
    const {id = '', type = '', title = '', synopsis = '', backgroundImage = {}} = show.jawSummary ?? {};
    const imageUrl = (backgroundImage.url.length) ? backgroundImage.url : "/noimage.svg";

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={imageUrl} alt={title} width={260} height={150}/>
                </div>
                <div className={styles.card_data}>
                    <h2>{title.length <= 18 ? title : `${title.substring(0, 18).trim()}...`}</h2>
                    <p>{synopsis.substring(0, 80)}...</p>
                    <Link href={`movies/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
