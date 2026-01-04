/**
 * Returns the correct asset path for both development and production (GitHub Pages)
 * In production, prepends the basePath to the asset URL
 */
export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/New-Portafolio' : '';
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
}
