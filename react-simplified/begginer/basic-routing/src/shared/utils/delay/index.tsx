export default async function delay(t = 550) {
    return new Promise((r) => {
        setTimeout(r, t);
    });
}
