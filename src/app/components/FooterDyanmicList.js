import Link from "next/link";

const FooterDynamicList = async ({ type = 'movie', limit = 5}) => {
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

    return (
        netflixData.map(index => {
            return (
                <li>
                    <Link href={`movies/${index.jawSummary.id}`} title={index.jawSummary.title}>
                        {
                          index.jawSummary.title.length < 27
                           ? index.jawSummary.title
                           : `${index.jawSummary.title.substring(0, 27).trim()}...`
                        }
                    </Link>
                </li>
            )
        })
    );

}

export default FooterDynamicList;
