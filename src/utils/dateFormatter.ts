export const formatTransactionListDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();

    // Reset hours to compare calendar days
    const today = new Date(now.setHours(0, 0, 0, 0));
    const target = new Date(new Date(dateString).setHours(0, 0, 0, 0));

    const diffTime = today.getTime() - target.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays >= 0 && diffDays < 7) {
        if (diffDays === 0) return "Today"; // Optional polish
        if (diffDays === 1) return "Yesterday"; // Match screenshot
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }

    // Otherwise M/D/YY
    return date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
    });
};

export const formatDetailDate = (dateString: string): string => {
    const date = new Date(dateString);
    const datePart = date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
    });

    // Custom 24h-ish or just simple HH:MM
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    // If we want exactly "12:47", let's just do `${hours}:${minutes}`?
    // Or match locale.
    return `${datePart}, ${hours}:${minutes}`;
};
