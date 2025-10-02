import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform relative image paths to absolute public URLs
 * 
 * Typora uses: ![](images/photo.png)
 * Converts to: ![](/blog/post-slug/images/photo.png)
 */
export function remarkImagePath() {
  return (tree, file) => {
    // Extract content type (blog or projects) and slug from file path
    const filePath = file.history[0];
    const pathParts = filePath.split('/');
    
    // Find content type (blog or projects)
    const contentTypeIndex = pathParts.findIndex(part => part === 'blog' || part === 'projects');
    if (contentTypeIndex === -1) return;
    
    const contentType = pathParts[contentTypeIndex];
    
    // Find the post/project folder name (the folder containing the .md file)
    let slug = '';
    
    if (contentType === 'blog') {
      // For blog: filename becomes slug
      const filename = pathParts[pathParts.length - 1];
      slug = filename.replace(/^\d+\.\s*/, '').replace(/\.mdx?$/, '');
    } else if (contentType === 'projects') {
      // For projects: parent folder name becomes slug
      slug = pathParts[pathParts.length - 2];
    }
    
    // Transform image URLs
    visit(tree, 'image', (node) => {
      // Only transform relative paths starting with 'images/' or 'attachment/'
      if (node.url.startsWith('images/') || node.url.startsWith('attachment/')) {
        const imagePath = node.url.replace('attachment/', 'images/');
        node.url = `/${contentType}/${slug}/${imagePath}`;
      }
    });
  };
}

export default remarkImagePath;
