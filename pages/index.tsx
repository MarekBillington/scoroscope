import Head from 'next/head';
import Image from 'next/image';
import React, {useState} from 'react';
import Link from "next/link";

const Home = () => {
    const [title, setTitle] = useState("");
    const [retro, setRetro] = useState("");
    const [graph, setGraph] = useState({});

    /**
     * return sprint horoscope
     */
    async function newSprintScope() {
        const rand = Math.floor(1 + Math.random() * (5 - 1));
        console.log(rand)
        await fetch(`api/sprintscope/${rand}`)
            .then(res => res.json())
            .then((data) => {
                setTitle(data.title)
                setRetro(data.retro)
                // get image to view
                setGraph(data.graph)
            })
    }

    return (
        <>
            <Head>
                <title>Sprint Horoscopes</title>
                <link rel="shortcut icon" type="image/x-icon"
                      href="data:image/png;base64,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"/>
            </Head>
            <div className="mainBody">
                <Link href={`/sprintbuilder`}>Sprint Builder</Link>
                <button onClick={newSprintScope}>What does the future hold</button>
                <h1>{title}</h1>
                <h3>{retro}</h3>
                <br/>
                <div className="imageBody">
                    {graph ? (
                        <Image
                            src={graph.link}
                            layout="responsive"
                            height={graph.height}
                            width={graph.width}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
