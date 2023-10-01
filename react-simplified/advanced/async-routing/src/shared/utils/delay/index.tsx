export default async function delay(t = 2550) {
    return new Promise((r) => {
        setTimeout(r, t);
    });
}
