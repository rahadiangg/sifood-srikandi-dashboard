export default async function getData(url: string) {
    try {
        const resp = await fetch(url, { cache: "no-store" });

        if (!resp.ok) {
            const errorJson = await resp.json()
            throw new Error(`response HTTP ${resp.status}: ${JSON.stringify(errorJson)}`)
        }
        return resp.json();
    } catch (error: any) {
        throw new Error(error.message)
    }
}