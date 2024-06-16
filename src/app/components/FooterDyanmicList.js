import Link from "next/link";
import footerStyles from '@/app/styles/footer.module.css'

const FooterDynamicList = async ({ heading = '', type = 'movie', limit = 5}) => {
    const url = `${process.env.RAPID_URL}/search/?query=${type}&limit_titles=${limit}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const netflixData = data.titles ?? [];

    return (netflixData.length > 0) && (
        <ul className={footerStyles.box}>
            <li className={footerStyles.link_name}>{heading}</li>
            {
                netflixData.map(index => {
                    return (
                        <li key={index.jawSummary.id}>
                            <Link href={`movies/${index.jawSummary.id}`} title={index.jawSummary.title}>
                                {
                                    index.jawSummary.title.length <= 13
                                        ? index.jawSummary.title
                                        : `${index.jawSummary.title.substring(0, 13).trim()}...`
                                }
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default FooterDynamicList;
