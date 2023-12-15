export function getName(): string {
    throw new Error("should not be called")
}
export function getShortName(): string {
    return getName().split(':')[1]
}