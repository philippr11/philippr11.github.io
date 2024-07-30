export async function generateStaticParams() {
    const posts = [
        {
            slug: 'a',
        },
        {
            slug: 'b',
        },
        {
            slug: 'about',
        },
    ];

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function Page({ params }: { params: { slug: string | undefined } }) {
    return <div>My Post: {params.slug}</div>
}