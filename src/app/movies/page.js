import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const netflixShows = data.titles ?? [];
    // console.log(data);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series and Movies</h1>
                    <div className={styles.card_section}>
                        {
                            netflixShows.map(show => {
                                return <MovieCard key={show.jawSummary.id} {...show} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;