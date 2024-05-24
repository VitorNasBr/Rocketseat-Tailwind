export function formatBytes(bytes : number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    let value = bytes;
    let unitsIndex = 0

    while(value >= 1024 && unitsIndex < units.length -1) {
        value /= 1024
        unitsIndex ++
    }

    return(
        `${value.toFixed(1)}${units[unitsIndex]}`
    )
}