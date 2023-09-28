// pages/[slug].js

import { useRouter } from 'next/router';

const DynamicPage = ({ data }) => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>{slug}</h1>
            <p>{data}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    // Fetch data based on the slug parameter
    const { slug } = context.query;
    const res = await fetch(`https://api.example.com/data/${slug}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default DynamicPage;
