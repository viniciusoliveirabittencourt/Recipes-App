import React from 'react';
import { Card } from 'react-bootstrap';

export default function VideoRecipe() {
  return (
    <Card.Body>
      <Card.Subtitle>
        Video
      </Card.Subtitle>
      <iframe
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="video"
        data-testid="video"
      />
    </Card.Body>
  );
}
