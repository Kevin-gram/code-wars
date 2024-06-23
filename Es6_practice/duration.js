const formatDuration = (seconds) => {
    if (seconds === 0) return "now";

    let years = Math.floor(seconds / (365 * 24 * 60 * 60));
    seconds %= 365 * 24 * 60 * 60;

    let days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let parts = [];
    if (years > 0) parts.push(`years ${years}`);
    if (days > 0) parts.push(`days ${days}`);
    if (hours > 0) parts.push(`hours ${hours}`);
    if (minutes > 0) parts.push(`minutes ${minutes}`);
    if (seconds > 0) parts.push(`seconds ${seconds}`);

    return parts.join(", ");
};
console.log(formatDuration (132030240))