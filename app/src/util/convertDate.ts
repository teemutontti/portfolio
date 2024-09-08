export default function convertDate(date: Date, lang: string): string {
    const newLocaleString = new Date(date).toLocaleDateString(lang, {
        month: "long",
        year: "numeric",
    });
    return newLocaleString.charAt(0).toUpperCase() + newLocaleString.slice(1);
}