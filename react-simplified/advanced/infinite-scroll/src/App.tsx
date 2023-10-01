import { useCallback, useEffect, useRef, useState } from 'react';
import './style.css';

type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const LIMIT = 20;

function parseLinkHeader(linkHeader: string | null) {
    if (!linkHeader) return {};

    const links = linkHeader.split(',');
    const parsedLinks = {} as Record<string, string>;
    links.forEach((link) => {
        const url = link.match(/<(.*)>/)?.[1] ?? '';
        const rel = link.match(/rel="(.*)"/)?.[1] ?? '';
        parsedLinks[rel] = url;
    });
    return parsedLinks;
}

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [photos, setPhotos] = useState([] as Photo[]);

    const nextUrlRef = useRef('');

    const fetchPhotos = useCallback(
        async (
            url: string,
            {
                signal,
                overwrite,
            }: Partial<{ signal: AbortSignal; overwrite: boolean }> = {}
        ) => {
            setIsLoading(true);
            try {
                await new Promise((r) => {
                    setTimeout(r, 2000);
                });
                const res = await fetch(url, { signal });
                nextUrlRef.current = parseLinkHeader(
                    res.headers.get('link')
                ).next;
                const data = (await res.json()) as Photo[];
                if (overwrite) {
                    setPhotos((prev) => [...prev, ...data]);
                } else {
                    setPhotos(data);
                }
            } catch (error) {
                console.warn(error);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        const controller = new AbortController();
        fetchPhotos(
            `http://localhost:3000/photos-short-list?_page=1&_limit=${LIMIT}`,
            {
                signal: controller.signal,
            }
        );
        return () => {
            controller.abort();
        };
    }, [fetchPhotos]);

    const imageRef = useCallback(
        (image: HTMLImageElement) => {
            if (!image || !nextUrlRef.current) return;
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    fetchPhotos(nextUrlRef.current, { overwrite: true });
                    observer.unobserve(image);
                }
            });
            observer.observe(image);
        },
        [fetchPhotos]
    );

    return (
        <div className="grid">
            {photos.map((p, i) => (
                <img
                    key={`${p.id}`}
                    src={p.url}
                    ref={i === photos.length - 1 ? imageRef : undefined}
                />
            ))}
            {isLoading
                ? Array(LIMIT)
                      .fill(null)
                      .map((_, idx) => (
                          <div key={idx} className="skeleton">
                              Loading...
                          </div>
                      ))
                : null}
        </div>
    );
}

export default App;
