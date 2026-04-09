const DEFAULT_EXTENSION = 'jpg';

const sanitizeFileName = (value = 'marketly-image') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'marketly-image';

const inferExtension = (imageUrl) => {
  try {
    const { pathname } = new URL(imageUrl, window.location.origin);
    const match = pathname.match(/\.([a-zA-Z0-9]+)$/);
    return match?.[1]?.toLowerCase() || DEFAULT_EXTENSION;
  } catch {
    return DEFAULT_EXTENSION;
  }
};

export const buildImageFilename = (imageUrl, baseName) => {
  const safeBase = sanitizeFileName(baseName);
  const extension = inferExtension(imageUrl);
  return `${safeBase}.${extension}`;
};

const triggerDownload = (href, fileName) => {
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName;
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadImage = async (imageUrl, baseName = 'marketly-image') => {
  const fileName = buildImageFilename(imageUrl, baseName);

  try {
    const response = await fetch(imageUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status}`);
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    triggerDownload(blobUrl, fileName);

    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch {
    window.open(imageUrl, '_blank', 'noopener,noreferrer');
  }
};

