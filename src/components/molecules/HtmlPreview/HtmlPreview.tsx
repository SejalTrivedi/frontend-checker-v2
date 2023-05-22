import React from 'react';

export interface HTMLPreviewProps {
  htmlContent: string;
}

export const HTMLPreview: React.FC<HTMLPreviewProps> = ({
  htmlContent,
}) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
